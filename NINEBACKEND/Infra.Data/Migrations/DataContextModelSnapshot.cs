﻿// <auto-generated />
using System;
using Infra.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Infra.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.9");

            modelBuilder.Entity("Domain.Entity.Cliente", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("CPF")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("DataNascimento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Numero")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cliente");
                });

            modelBuilder.Entity("Domain.Entity.Produto", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("Categoria")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Imagem")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Quantidade")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Tamanho")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<float>("Valor")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("Produto");
                });

            modelBuilder.Entity("Domain.Model.Endereco", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("Adicional")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("NumeroCasa")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Rua")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Endereco");
                });

            modelBuilder.Entity("Domain.Model.Pedido", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Data")
                        .HasColumnType("TEXT");

                    b.Property<string>("IdCliente")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("IdPagamento")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Valuetotal")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Pedido");
                });

            modelBuilder.Entity("Domain.Model.PedidoDetalhes", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("IdPedido")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("IdProduto")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("QuantidadePedido")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("ValorTotal")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorUnidade")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("PedidoDetalhes");
                });
#pragma warning restore 612, 618
        }
    }
}
