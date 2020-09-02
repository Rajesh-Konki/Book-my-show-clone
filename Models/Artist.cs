using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Models
{
    public class Artist
    {
        [Key]
        public long ArtistId { get; set; }
       
        [Required]

        public string Name { get; set; }
       
        public string Role { get; set; }
        public string ImageUrl { get; set; }
       
    }
}

