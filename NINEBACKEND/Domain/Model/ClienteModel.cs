namespace Domain.Model
{
    public class ClienteModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string DataNascimento { get; set; } = "";
        public int Numero { get; set; }
        public string Endereco { get; set; } = "";
        public string Email { get; set; } = "";
        public int CPF { get; set; }
        public string Senha { get; set; } = "";
    }
}