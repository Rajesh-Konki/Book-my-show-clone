using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Models
{
    public class Event
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
        public string Image { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
        public  string About { get; set; }
        public string OrganizerIds { get; set; }
        public string MenuType { get; set; }




    }
}
