namespace Domain
{
    public class EntityBase
    {

        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Descricao { get; set; } = "";
        public DateOnly Data { get; set; }
        public string Nome { get; set; } = "";
        public string Endereco { get; set; }="";
        public string Email { get; set; }="";
        public int CPF { get; set; }
        public int Numero { get; set; }
        public int Quantidade { get; set; }
        public string Categoria { get; set; } = "";
        public float Entrada { get; set; }
        public float Saida { get; set; }
        public float Valor { get; set; }
    }
}