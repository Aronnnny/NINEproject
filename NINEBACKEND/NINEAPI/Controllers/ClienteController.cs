using AutoMapper;
using Domain.Interfaces;
using Domain.Entity;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;
using Infra.Data.Context;

namespace NINEAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : ControllerBase
    {
        public IServiceBase<Cliente> Service { get; }
        public IMapper Mapper { get; }
        public ClienteController(IServiceBase<Cliente> service, IMapper mapper)
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var entity = await this.Service.GetAll();
            var results = this.Mapper.Map<ClienteModel[]>(entity);
            return Ok(results);

        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById(string Id)
        {
            var entity = await this.Service.GetById(Id);
            var results = this.Mapper.Map<ClienteModel>(entity);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ClienteModel ClienteModel)
        {
            var cli1 = this.Mapper.Map<Cliente>(ClienteModel);

            this.Service.Add(cli1);

            if (await this.Service.SaveChangeAsync())
                return Created($"api/Cliente/{ClienteModel.Id}", ClienteModel);
            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(string Id)
        {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();
            this.Service.Delete(entity);

            if (await this.Service.SaveChangeAsync()) return Ok();
            return BadRequest();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put(string Id, ClienteModel model)
        {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();
            this.Mapper.Map(model, entity);
            this.Service.Update(entity);

            if (await this.Service.SaveChangeAsync())

                return Created($"api/Cliente/{model.Id}", this.Mapper.Map<ClienteModel>(entity));
            return BadRequest();
        }
    }
}