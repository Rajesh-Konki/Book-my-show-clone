using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using movies.Web.Api.Models;

namespace movies.Web.Api.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }
        public DbSet<LoginModel> LogInUser { get; set; }
        public DbSet<movies.Web.Api.Models.Movie> Movie { get; set; }

        public DbSet<movies.Web.Api.Models.Artist> Artist { get; set; }

        public DbSet<movies.Web.Api.Models.Event> Event { get; set; }
    }
}
