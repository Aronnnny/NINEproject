namespace Domain.Entity
{
    public class Produto 
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Descricao { get; set; } = "";
        public int Quantidade { get; set; }
        public string Categoria { get; set; } = "";
        public string Tamanho { get; set; }="";
        public string Imagem { get; set; }="";
        public float Valor { get; set; }
    }
}