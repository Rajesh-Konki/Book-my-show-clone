using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using movies.Web.Api.Models;

namespace movies.Web.Api.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private  DataContext _db;
        public LoginController(DataContext db)
        {
            _db = db;

        }
      

        // POST: api/Login
        [HttpPost("[action]")]
        public IActionResult Login([FromBody] LoginModel userData)
        {
            if (userData != null)
            {
                var alreadySaved = _db.LogInUser.Where(Uid => Uid.UserId == userData.UserId).FirstOrDefault();
                if (ModelState.IsValid)
                {
                    if (alreadySaved != null)
                    {
                        return Ok(new { message = "User data has been saved already" });

                    }
                    var user = new LoginModel
                    {
                        UserId = userData.UserId,
                        FirstName = userData.FirstName,
                        PictureUrl = userData.PictureUrl,
                        EmailAddress = userData.EmailAddress,
                        ProviderName = userData.ProviderName,
                    };
                    _db.Add(user);
                    _db.SaveChanges();
                    return Ok(new { message = "User Login successful" });
                }
            }
            var errors = ModelState.Values.First().Errors;
            return BadRequest(new JsonResult(errors));
        }

        
    }
}
