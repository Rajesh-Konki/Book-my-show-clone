using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using movies.Web.Api.View_Model;
using SimpleInjector;

namespace movies.Web.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
            var container = new Container();
            var lifeStyle = Lifestyle.Singleton;
            container.Register<IMovieContract, MovieProvider>();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
               .UseDefaultServiceProvider(options =>
                    options.ValidateScopes = false)
                .UseStartup<Startup>();
    }
}
