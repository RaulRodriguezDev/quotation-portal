using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace QuotationPortal.Infrastructure.Logging;

public static class LoggingExtensions
{
    /// <summary>
    /// Minimal logger used only until the host configuration is loaded,
    /// so startup failures are still captured.
    /// </summary>
    public static ILogger CreateBootstrapLogger() =>
        new LoggerConfiguration()
            .WriteTo.Console()
            .CreateBootstrapLogger();

    /// <summary>
    /// Configures Serilog from the "Serilog" configuration section.
    /// Shared by every host (Api, Worker).
    /// </summary>
    public static IServiceCollection AddQuotationPortalLogging(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddSerilog((serviceProvider, loggerConfiguration) => loggerConfiguration
            .ReadFrom.Configuration(configuration)
            .ReadFrom.Services(serviceProvider)
            .Enrich.FromLogContext());

        return services;
    }
}
