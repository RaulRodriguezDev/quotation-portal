using Microsoft.EntityFrameworkCore;
using QuotationPortal.Application.Abstractions;
using QuotationPortal.Application.DTOs;
using ProductEntity = QuotationPortal.Domain.Entities.Product.Product;

namespace QuotationPortal.Infrastructure.Persistence.Repositories;

public sealed class ProductRepository(ApplicationDbContext db) : IProductRepository
{
    public async Task<(IReadOnlyList<ProductEntity> Items, int TotalCount)> SearchAsync(ProductQuery query, CancellationToken ct)
    {
        var products = db.Products.AsNoTracking();

        if (!string.IsNullOrEmpty(query.Search))
        {
            foreach (var term in query.Search.Split(' ', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries))
            {
                var pattern = $"%{term.Replace("\\", "\\\\").Replace("%", "\\%").Replace("_", "\\_")}%";
                products = products.Where(p =>
                    EF.Functions.ILike(p.Description, pattern) ||
                    EF.Functions.ILike(p.Id, pattern) ||
                    (p.ProductCategory != null && EF.Functions.ILike(p.ProductCategory.ProductCategoryName, pattern)) ||
                    (p.ProductBrand != null && EF.Functions.ILike(p.ProductBrand.BrandName, pattern)) ||
                    (p.ProductPrecedence != null && EF.Functions.ILike(p.ProductPrecedence.ProcedenceName, pattern)));
            }
        }
        if (query.CategoryId is not null) products = products.Where(p => p.ProductCategoryId == query.CategoryId);
        if (query.BrandId is not null) products = products.Where(p => p.ProductBrandId == query.BrandId);
        if (query.OriginId is not null) products = products.Where(p => p.ProductPrecedenceId == query.OriginId);

        var total = await products.CountAsync(ct);
        var items = await products
            .Include(p => p.ProductCategory)
            .Include(p => p.ProductBrand)
            .Include(p => p.ProductPrecedence)
            .OrderBy(p => p.Id)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync(ct);

        return (items, total);
    }

    public Task<ProductEntity?> GetByIdAsync(string id, CancellationToken ct) =>
        db.Products.AsNoTracking()
            .Include(p => p.ProductCategory)
            .Include(p => p.ProductBrand)
            .Include(p => p.ProductPrecedence)
            .FirstOrDefaultAsync(p => p.Id == id, ct);

    public async Task<IReadOnlyList<LookupDto>> GetCategoriesAsync(CancellationToken ct) =>
        await db.ProductCategories.AsNoTracking().OrderBy(c => c.ProductCategoryName)
            .Select(c => new LookupDto(c.Id, c.ProductCategoryName)).ToListAsync(ct);

    public async Task<IReadOnlyList<LookupDto>> GetBrandsAsync(CancellationToken ct) =>
        await db.ProductBrands.AsNoTracking().OrderBy(b => b.BrandName)
            .Select(b => new LookupDto(b.Id, b.BrandName)).ToListAsync(ct);

    public async Task<IReadOnlyList<LookupDto>> GetOriginsAsync(CancellationToken ct) =>
        await db.ProductPrecedences.AsNoTracking().OrderBy(o => o.ProcedenceName)
            .Select(o => new LookupDto(o.Id, o.ProcedenceName)).ToListAsync(ct);
}
