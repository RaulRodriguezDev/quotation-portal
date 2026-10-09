using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuotationPortal.Domain.Entities.Product;

namespace QuotationPortal.Infrastructure.Persistence.Configurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("product");

            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).HasMaxLength(50).ValueGeneratedNever();
            builder.Property(p => p.Description).HasMaxLength(500).IsRequired();
            builder.Property(p => p.Unit).HasMaxLength(20).IsRequired();
            builder.Property(p => p.Price).HasPrecision(12, 2);
            builder.Property(p => p.ProductPrecedenceId).HasColumnName("procedence_id");

            builder.HasOne(p => p.ProductCategory)
                .WithMany()
                .HasForeignKey(p => p.ProductCategoryId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(p => p.ProductBrand)
                .WithMany()
                .HasForeignKey(p => p.ProductBrandId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(p => p.ProductPrecedence)
                .WithMany()
                .HasForeignKey(p => p.ProductPrecedenceId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasIndex(p => p.ProductCategoryId);
            builder.HasIndex(p => p.ProductBrandId);
            builder.HasIndex(p => p.ProductPrecedenceId);
        }
    }
}
