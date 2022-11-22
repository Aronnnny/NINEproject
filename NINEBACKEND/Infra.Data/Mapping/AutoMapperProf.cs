using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Domain.Entity;
using Domain.Model;

namespace Infra.Data.Mapping
{

    public class AutoMapperProf : Profile
    {
        public AutoMapperProf()
        {
            CreateMap<Produto, ProdutoModel>().ReverseMap();
            CreateMap<Cliente, ClienteModel>().ReverseMap();
            CreateMap<Endereco, EnderecoModel>().ReverseMap();
            CreateMap<Pedido, PedidoModel>().ReverseMap();
            CreateMap<PedidoDetalhes, PedidoDetalhesModel>().ReverseMap();
            CreateMap<Admin, AdminModel>().ReverseMap();

        }
    }
}