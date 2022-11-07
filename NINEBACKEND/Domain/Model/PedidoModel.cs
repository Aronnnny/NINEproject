namespace Domain.Model
{
    public class PedidoModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public decimal Valuetotal { get; set; }
        public DateTime Data { get; set; }
        public string IdPagamento { get; set; }="";
        public string IdCliente { get; set; }="";
    }
}