using movies.Web.Api.Models;
using movies.Web.Api.View_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace movies.Web.Api.Services.contracts
{
    public interface IEventContract
    {
        IEnumerable<Event> GetAllEvents(string menuType);
        Task<VEvent> GetEvent(long id);
        IEnumerable<String> GetCategories(string type);
    }
}
