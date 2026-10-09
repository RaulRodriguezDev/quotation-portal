using QuotationPortal.Application.DTOs;
using ProductEntity = QuotationPortal.Domain.Entities.Product.Product;

namespace QuotationPortal.Application.Abstractions;

public interface IProductRepository
{
    Task<(IReadOnlyList<ProductEntity> Items, int TotalCount)> SearchAsync(ProductQuery query, CancellationToken ct);
    Task<ProductEntity?> GetByIdAsync(string id, CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetCategoriesAsync(CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetBrandsAsync(CancellationToken ct);
    Task<IReadOnlyList<LookupDto>> GetOriginsAsync(CancellationToken ct);
}
