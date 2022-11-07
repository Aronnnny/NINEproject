using AutoMapper;
using Domain.Interfaces;
using Domain.Entity;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;
using Service.BaseContainer;

namespace NINEAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        public IServiceBase<Produto> Service { get; }
        public IMapper Mapper { get; }
        public ProdutoController(IServiceBase<Produto> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<ProdutoModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult>GetById(string Id){
            var entity = await this.Service.GetById(Id);
            var results = this.Mapper.Map<ProdutoModel>(entity);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProdutoModel ProdutoModel){
            var prod1 = this.Mapper.Map<Produto>(ProdutoModel);

            this.Service.Add(prod1);

            if(await this.Service.SaveChangeAsync())
                return Created($"api/Produto/{ProdutoModel.Id}", ProdutoModel);
            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(string Id){
            var entity = await this.Service.GetById(Id);

            if(entity == null) return NotFound();
            this.Service.Delete(entity);

            if(await this.Service.SaveChangeAsync()) return Ok();
            return BadRequest();
        }

         [HttpPut("{Id}")]
         public async Task<IActionResult>Put(string Id, ProdutoModel model){
             var entity = await this.Service.GetById(Id);

             if(entity == null) return NotFound();
              this.Mapper.Map(model, entity);
             this.Service.Update(entity);

             if(await this.Service.SaveChangeAsync())

                 return Created($"api/Produto/{model.Id}", this.Mapper.Map<ProdutoModel>(entity));
             return BadRequest();
         }
    }
}