using movies.Web.Api.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.View_Model
{
    public class VMovie
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
        public List<Artist> Casting { get; set; }
        public string Location { get; set; }
        public List<Artist> Crew { get; set; }
    }
}
