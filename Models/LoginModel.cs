using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Models
{
    public class LoginModel
    {   
        [Key]
        public string UserId { get; set; }
        [Required]
        
        public string FirstName { get; set; }
        [Required]
        
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string PictureUrl { get; set; }
        public string ProviderName { get; set; }
    }
}
