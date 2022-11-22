namespace Domain.Entity
{
    public class  AdminModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Email { get; set; } = "";
        public string Senha { get; set; } = "";
    }
}