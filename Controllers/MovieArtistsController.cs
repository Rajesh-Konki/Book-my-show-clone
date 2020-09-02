using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movies.Web.Api.Models;

namespace movies.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieArtistsController : ControllerBase
    {
        private readonly DataContext _context;

        public MovieArtistsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/MovieArtists
        [HttpGet]
        public IEnumerable<Artist> GetMovieArtist()
        {
            return _context.Artist;
        }

        // GET: api/MovieArtists/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovieArtist([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var movieArtist = await _context.Artist.FindAsync(id);

            if (movieArtist == null)
            {
                return NotFound();
            }

            return Ok(movieArtist);
        }

        // PUT: api/MovieArtists/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieArtist([FromRoute] long id, [FromBody] Artist movieArtist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != movieArtist.ArtistId)
            {
                return BadRequest();
            }

            _context.Entry(movieArtist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieArtistExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovieArtists
        [HttpPost]
        public async Task<IActionResult> PostMovieArtist([FromBody] Artist movieArtist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Artist.Add(movieArtist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieArtist", new { id = movieArtist.ArtistId }, movieArtist);
        }

        // DELETE: api/MovieArtists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieArtist([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var movieArtist = await _context.Artist.FindAsync(id);
            if (movieArtist == null)
            {
                return NotFound();
            }

            _context.Artist.Remove(movieArtist);
            await _context.SaveChangesAsync();

            return Ok(movieArtist);
        }

        private bool MovieArtistExists(long id)
        {
            return _context.Artist.Any(e => e.ArtistId == id);
        }
    }
}