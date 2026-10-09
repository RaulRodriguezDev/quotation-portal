using System;
using System.Collections.Generic;
using System.Text;

namespace QuotationPortal.Domain.Entities.Product
{
    public class Product
    {
        public string Id { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int? ProductCategoryId { get; set; }
        public ProductCategory? ProductCategory { get; set; }
        public int? ProductBrandId { get; set; }
        public ProductBrand? ProductBrand { get; set; }
        public int? ProductPrecedenceId { get; set; }
        public ProductPrecedence? ProductPrecedence { get; set; }
        public decimal Price { get; set; }
        public string Unit { get; set; } = string.Empty;
    }
}
