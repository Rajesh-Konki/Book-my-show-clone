using movies.Web.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.View_Model
{
    public class MovieProvider : IMovieContract
    {
        private readonly DataContext _context;
        public MovieProvider( DataContext context)
        {
            _context = context;

        }
        public IEnumerable<Movie> GetAllMovies(string type)
        {
            try
            {
                List<Movie> movies = new List<Movie>();

                var res = _context.Movie.Where(movie=>movie.Type==type).ToList();

                return res;
            }
            catch { throw; }
        }

        public async Task<VMovie> GetMovie(long id)
        {
            var movie = await _context.Movie.FindAsync(id);
            VMovie vmovie = new VMovie();
            vmovie.Title = movie.Title;
            vmovie.DateOfRelease = movie.DateOfRelease;
            vmovie.Genre = movie.Genre;
            vmovie.ImageUrl = movie.ImageUrl;
            vmovie.Language = movie.Language;
            vmovie.Reactions = movie.Reactions;
            vmovie.Synopsis = movie.Synopsis;
            if (movie.Casting != null)
            {
                var ids = movie.Casting.Split(',').Select(Int64.Parse).ToList();
                Console.WriteLine(ids);
                vmovie.Casting = new List<Artist>();
                foreach (var castingId in ids)
                {
                    Artist artist = await _context.Artist.FindAsync(castingId);

                    vmovie.Casting.Add(artist);
                    Console.WriteLine(artist);
                }

            }
            if (movie.Crew != null)
            {
                var ids = movie.Crew.Split(',').Select(Int64.Parse).ToList();
                Console.WriteLine(ids);
                vmovie.Crew = new List<Artist>();
                foreach (var crewId in ids)
                {
                    Artist artist = await _context.Artist.FindAsync(crewId);
                    vmovie.Crew.Add(artist);
                    Console.WriteLine(artist);
                }

            }
            return vmovie;
        }
    }
}
