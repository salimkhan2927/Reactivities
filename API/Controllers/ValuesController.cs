using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private DataContext _repo;

        public ValuesController(DataContext repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            var values = await _repo.Values.ToListAsync();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<Value> Get(int id)
        {
            var value = await _repo.Values.FindAsync(id);
            return value;
        }

        [HttpPost]
        public void SaveNewValue([FromBody] string value)
        {
        }

        [HttpPut]
        public void UpdateValue(int id, [FromBody] string value)
        {
        }

        [HttpDelete]
        public void RemoveValue(int id)
        {
        }
    }
}