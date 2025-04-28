using System.ComponentModel.DataAnnotations;

namespace Q1WebAPI.Models
{
    public class Book
    {
        [Key]
        public int bookid { get; set; }
        public string? name { get; set; }
        public string? description { get; set; }
        public decimal? price { get; set; }
        public string? note { get; set; }
    }
}
