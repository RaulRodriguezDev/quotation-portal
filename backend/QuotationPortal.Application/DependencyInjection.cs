using Microsoft.Extensions.DependencyInjection;
using QuotationPortal.Application.Services;

namespace QuotationPortal.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IProductService, ProductService>();
        return services;
    }
}
