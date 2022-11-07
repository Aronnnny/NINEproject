namespace Domain.Model
{
    public class PedidoDetalhes
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string IdPedido { get; set; }="";
        public string IdProduto { get; set; }="";
        public int QuantidadePedido { get; set; }
        public decimal ValorUnidade { get; set; }
        public decimal ValorTotal { get; set; }
    }
}