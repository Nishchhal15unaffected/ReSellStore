using API.Entities;

namespace API.Data
{
    public static class DbIntializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any())
                return;
            var products = new List<Product>
            {
                new Product
                {
                    Id =1,
                    Name = "Green Angular Board 3000",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/sb-ang2.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                }
               
            };
            foreach(var product in products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();
        }
    }
}
