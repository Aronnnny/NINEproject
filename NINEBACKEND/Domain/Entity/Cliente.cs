namespace Domain.Entity
{
    public class Cliente 
    {
        public Cliente(){}
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public DateOnly DataNascimento { get; set; }
        public int Numero { get; set; }
        public string Endereco { get; set; }="";
        public string Email { get; set; }="";
        public int CPF { get; set; }
        public string Senha { get; set; }="";
    }
}