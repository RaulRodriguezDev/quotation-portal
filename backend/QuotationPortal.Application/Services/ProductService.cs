using QuotationPortal.Application.Abstractions;
using QuotationPortal.Application.DTOs;
using ProductEntity = QuotationPortal.Domain.Entities.Product.Product;

namespace QuotationPortal.Application.Services;

public interface IProductService
{
    Task<PagedResult<ProductDto>> SearchAsync(ProductQuery query, CancellationToken ct);
    Task<ProductDto?> GetByIdAsync(string id, CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetCategoriesAsync(CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetBrandsAsync(CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetOriginsAsync(CancellationToken ct);
}

public sealed class ProductService(IProductRepository repository) : IProductService
{
    private const int MaxPageSize = 100;

    public async Task<PagedResult<ProductDto>> SearchAsync(ProductQuery query, CancellationToken ct)
    {
        var normalized = query with
        {
            Search = string.IsNullOrWhiteSpace(query.Search) ? null : query.Search.Trim(),
            Page = Math.Max(1, query.Page),
            PageSize = Math.Clamp(query.PageSize, 1, MaxPageSize)
        };

        var (items, total) = await repository.SearchAsync(normalized, ct);
        return new PagedResult<ProductDto>(items.Select(ToDto).ToList(), normalized.Page, normalized.PageSize, total);
    }

    public async Task<ProductDto?> GetByIdAsync(string id, CancellationToken ct)
    {
        var product = await repository.GetByIdAsync(id, ct);
        return product is null ? null : ToDto(product);
    }

    public Task<IReadOnlyList<LookupDto>> GetCategoriesAsync(CancellationToken ct) => repository.GetCategoriesAsync(ct);
    public Task<IReadOnlyList<LookupDto>> GetBrandsAsync(CancellationToken ct) => repository.GetBrandsAsync(ct);
    public Task<IReadOnlyList<LookupDto>> GetOriginsAsync(CancellationToken ct) => repository.GetOriginsAsync(ct);

    private static ProductDto ToDto(ProductEntity p) => new(
        p.Id,
        p.Description,
        p.Price,
        p.Unit,
        p.ProductCategory?.ProductCategoryName,
        p.ProductBrand?.BrandName,
        p.ProductPrecedence?.ProcedenceName);
}
