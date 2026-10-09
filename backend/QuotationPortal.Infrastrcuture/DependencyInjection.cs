using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QuotationPortal.Infrastructure.Persistence;

namespace QuotationPortal.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException("Connection string 'DefaultConnection' is not configured. Set it with user-secrets or ConnectionStrings__DefaultConnection.");

            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseNpgsql(connectionString, npgsql => npgsql.EnableRetryOnFailure());
                options.UseSnakeCaseNamingConvention();
            });

            services.AddHealthChecks().AddDbContextCheck<ApplicationDbContext>();
            return services;
        }
    }
}
