using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Models
{
    public class Movie
    {
        [Key]
        public long MovieId { get; set; }
        [Required]

        public DateTime DateOfRelease { get; set; }
        [Required]

        public string Title { get; set; }
        public int Reactions { get; set; }
        public string Language { get; set; }
        public string ImageUrl { get; set; }
        public string Genre { get; set; }
        public string Synopsis { get; set; }
        public string Casting { get; set; }
        public string Location { get; set; }
        public string Crew { get; set; }
        public string Type { get; set; }
    }
}
