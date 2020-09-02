using movies.Web.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.View_Model
{
   public interface IMovieContract
    {
        IEnumerable<Movie>  GetAllMovies(string type);
        Task<VMovie> GetMovie(long id);
       // IEnumerable<String> GetCategories(string type);

    }
}
