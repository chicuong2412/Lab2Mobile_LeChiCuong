using Microsoft.EntityFrameworkCore;
using Q1WebAPI.Models;

namespace Q1WebAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed data
            modelBuilder.Entity<Book>().HasKey(book => book.bookid);
        }

        public DbSet<Models.Book> Books { get; set; } = default!;
    }
}
