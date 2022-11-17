namespace Domain.Entity
{
    public class Cliente
    {
        public Cliente() { }
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string NomeSobrenome { get; set; } = "";
        public string DataNascimento { get; set; } = "";
        public int Telefone { get; set; }
        public string Endereco { get; set; } = "";
        public string Email { get; set; } = "";
        public string CPF { get; set; } = "";
        public string Senha { get; set; } = "";
    }
}