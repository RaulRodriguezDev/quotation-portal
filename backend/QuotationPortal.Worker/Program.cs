using QuotationPortal.Infrastructure.Logging;
using QuotationPortal.Worker;

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddQuotationPortalLogging(builder.Configuration);
builder.Services.AddHostedService<Worker>();

var host = builder.Build();
host.Run();
