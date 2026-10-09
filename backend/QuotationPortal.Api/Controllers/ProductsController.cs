using Microsoft.AspNetCore.Mvc;
using QuotationPortal.Application.DTOs;
using QuotationPortal.Application.Services;

namespace QuotationPortal.Api.Controllers;

[ApiController]
[Route("api")]
public class ProductsController(IProductService products) : ControllerBase
{
    [HttpGet("products")]
    public async Task<ActionResult<PagedResult<ProductDto>>> Search([FromQuery] ProductQuery query, CancellationToken ct) =>
        Ok(await products.SearchAsync(query, ct));

    [HttpGet("products/{id}")]
    public async Task<ActionResult<ProductDto>> GetById(string id, CancellationToken ct)
    {
        var product = await products.GetByIdAsync(id, ct);
        return product is null ? NotFound() : Ok(product);
    }

    [HttpGet("product-categories")]
    public async Task<ActionResult<IReadOnlyList<LookupDto>>> Categories(CancellationToken ct) =>
        Ok(await products.GetCategoriesAsync(ct));

    [HttpGet("product-brands")]
    public async Task<ActionResult<IReadOnlyList<LookupDto>>> Brands(CancellationToken ct) =>
        Ok(await products.GetBrandsAsync(ct));

    [HttpGet("product-origins")]
    public async Task<ActionResult<IReadOnlyList<LookupDto>>> Origins(CancellationToken ct) =>
        Ok(await products.GetOriginsAsync(ct));
}
