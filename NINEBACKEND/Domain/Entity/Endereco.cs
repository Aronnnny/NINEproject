namespace Domain.Model
{
    public class Endereco
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Rua { get; set; }="";
        public string Bairro { get; set; }="";
        public string Cidade { get; set; }="";
        public int NumeroCasa { get; set; }
        public string Adicional { get; set; }="";
    }
}