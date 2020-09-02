using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movies.Web.Api.Models;
using movies.Web.Api.View_Model;

namespace movies.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : Controller
    {
        private readonly IMovieContract _contract;

        public MoviesController(IMovieContract contract)
        {
            _contract = contract;
        }

        // GET: api/Movies
        [HttpGet]
        public IEnumerable<Movie> GetMovies([FromQuery]string type)
        {
            try
            {
                List<Movie> movies =new List<Movie>();

                var res = _contract.GetAllMovies(type);               
                return res;
            }
            catch { throw; }
        }

        //GET: api/Movies/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var movie = await _contract.GetMovie(id);
            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // PUT: api/Movies/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutMovie([FromRoute] long id, [FromBody] VMovie movie)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != movie.MovieId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(movie).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!MovieExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Movies
        //[HttpPost]
        //public async Task<IActionResult> PostMovie([FromBody] VMovie movie)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    //  _context.Movie.Add(movie);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetMovie", new { id = movie.MovieId }, movie);
        //}

        //// DELETE: api/Movies/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteMovie([FromRoute] string id)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var movie = await _context.Movie.FindAsync(id);
        //    if (movie == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Movie.Remove(movie);
        //    await _context.SaveChangesAsync();

        //    return Ok(movie);
        //}

        //private bool MovieExists(long id)
        //{
        //    return _context.Movie.Any(e => e.MovieId == id);
        //}
   }
}