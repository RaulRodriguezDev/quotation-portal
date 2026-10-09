using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuotationPortal.Domain.Entities.Product;

namespace QuotationPortal.Infrastructure.Persistence.Configurations
{
    public class ProductBrandConfiguration : IEntityTypeConfiguration<ProductBrand>
    {
        public void Configure(EntityTypeBuilder<ProductBrand> builder)
        {
            builder.ToTable("product_brand");
            builder.HasKey(b => b.Id);
            builder.Property(b => b.BrandName).HasMaxLength(100).IsRequired();
            builder.HasIndex(b => b.BrandName).IsUnique();
        }
    }

    public class ProductCategoryConfiguration : IEntityTypeConfiguration<ProductCategory>
    {
        public void Configure(EntityTypeBuilder<ProductCategory> builder)
        {
            builder.ToTable("product_category");
            builder.HasKey(c => c.Id);
            builder.Property(c => c.ProductCategoryName).HasMaxLength(100).IsRequired();
            builder.HasIndex(c => c.ProductCategoryName).IsUnique();
        }
    }

    public class ProductPrecedenceConfiguration : IEntityTypeConfiguration<ProductPrecedence>
    {
        public void Configure(EntityTypeBuilder<ProductPrecedence> builder)
        {
            builder.ToTable("product_procedence");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.ProcedenceName).HasMaxLength(100).IsRequired();
            builder.HasIndex(p => p.ProcedenceName).IsUnique();
        }
    }
}
