namespace QuotationPortal.Application.DTOs;

public sealed record LookupDto(int Id, string Name);

public sealed record ProductDto(
    string Id,
    string Description,
    decimal Price,
    string Unit,
    string? CategoryName,
    string? BrandName,
    string? OriginName);

public sealed record ProductQuery(
    string? Search = null,
    int? CategoryId = null,
    int? BrandId = null,
    int? OriginId = null,
    int Page = 1,
    int PageSize = 20);

public sealed record PagedResult<T>(IReadOnlyList<T> Items, int Page, int PageSize, int TotalCount)
{
    public int TotalPages => (int)Math.Ceiling(TotalCount / (double)PageSize);
}
