using movies.Web.Api.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.View_Model
{
    public class VEvent
    {
        [Key]
        public long EventId { get; set; }
        [Required]
        public string Title { get; set; }
        public string StreamingOn { get; set; }
        [Required]
        public DateTime DateOfStreaming { get; set; }
        public string duration { get; set; }
        public string Language { get; set; }
        public int LikesCount { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
        public string About { get; set; }
        public List<Artist> Organizers { get; set; }
    }
}
