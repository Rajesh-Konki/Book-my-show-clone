using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movies.Web.Api.Models;
using movies.Web.Api.Services.contracts;
using movies.Web.Api.View_Model;

namespace movies.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : Controller
    {
        private readonly IEventContract _contract;

        public EventsController(IEventContract contract)
        {
            _contract = contract;
        }

        // GET: api/Events
        [HttpGet]
        public IEnumerable<Event> GetEvent([FromQuery] string menuType)
        {
            var events= _contract.GetAllEvents(menuType);
            return events;
        }
        [HttpGet("Categories")]
        public IEnumerable<String> GetCategories([FromQuery] string categoryOf )
        {
            var categories = _contract.GetCategories(categoryOf);
            return categories;
        }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEvent([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var vevent = await _contract.GetEvent(id);
           

            if (vevent == null)
            {
                return NotFound();
            }

            return Ok(vevent);
        }

    //    // PUT: api/Events/5
    //    [HttpPut("{id}")]
    //    public async Task<IActionResult> PutEvent([FromRoute] long id, [FromBody] Event @event)
    //    {
    //        if (!ModelState.IsValid)
    //        {
    //            return BadRequest(ModelState);
    //        }

    //        if (id != @event.EventId)
    //        {
    //            return BadRequest();
    //        }

    //        _context.Entry(@event).State = EntityState.Modified;

    //        try
    //        {
    //            await _context.SaveChangesAsync();
    //        }
    //        catch (DbUpdateConcurrencyException)
    //        {
    //            if (!EventExists(id))
    //            {
    //                return NotFound();
    //            }
    //            else
    //            {
    //                throw;
    //            }
    //        }

    //        return NoContent();
    //    }

    //    // POST: api/Events
    //    [HttpPost]
    //    public async Task<IActionResult> PostEvent([FromBody] Event @event)
    //    {
    //        if (!ModelState.IsValid)
    //        {
    //            return BadRequest(ModelState);
    //        }

    //        _context.Event.Add(@event);
    //        await _context.SaveChangesAsync();

    //        return CreatedAtAction("GetEvent", new { id = @event.EventId }, @event);
    //    }

    //    // DELETE: api/Events/5
    //    [HttpDelete("{id}")]
    //    public async Task<IActionResult> DeleteEvent([FromRoute] long id)
    //    {
    //        if (!ModelState.IsValid)
    //        {
    //            return BadRequest(ModelState);
    //        }

    //        var @event = await _context.Event.FindAsync(id);
    //        if (@event == null)
    //        {
    //            return NotFound();
    //        }

    //        _context.Event.Remove(@event);
    //        await _context.SaveChangesAsync();

    //        return Ok(@event);
    //    }

    //    private bool EventExists(long id)
    //    {
    //        return _context.Event.Any(e => e.EventId == id);
    //    }
    }
}