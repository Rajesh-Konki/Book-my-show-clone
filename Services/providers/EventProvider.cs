using movies.Web.Api.Models;
using movies.Web.Api.Services.contracts;
using movies.Web.Api.View_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Services.providers
{
    public class EventProvider : IEventContract
    {
        private readonly DataContext _context;
        public EventProvider(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<Event> GetAllEvents(string menuType)
        {
            try
            {
               // List<Event> events = new List<Event>();
                
                var res = _context.Event.Where(e=>e.MenuType==menuType).ToList();

                return res;
            }
            catch { throw;  }
        }

        public IEnumerable<string> GetCategories(string type)
        {
            try
            {
                var res = _context.Event.Where(e => e.MenuType == type).Select(e => e.Type).Distinct();
                return res;

            }
            catch { throw; }

        }

        public async Task<VEvent> GetEvent(long id)
        {

            var @event = await _context.Event.FindAsync(id);
            var vevent = new VEvent();
            vevent.Title = @event.Title;
            vevent.Image = @event.Image;
            vevent.Language = @event.Language;
            vevent.Price = @event.Price;
            vevent.StreamingOn = @event.StreamingOn;
            vevent.Type = @event.Type;
            vevent.About = @event.About;
            vevent.DateOfStreaming = @event.DateOfStreaming;
            vevent.duration = @event.duration;
            if (@event.OrganizerIds != null)
            {
                var ids = @event.OrganizerIds.Split(',').Select(Int64.Parse).ToList();
                vevent.Organizers = new List<Artist>();
                foreach (var oId in ids)
                {
                    Artist artist = await _context.Artist.FindAsync(oId);

                    vevent.Organizers.Add(artist);
                }
            }

            
                return  vevent;

        }
    }
}
