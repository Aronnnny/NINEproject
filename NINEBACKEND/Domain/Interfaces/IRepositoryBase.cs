namespace Domain.Interfaces
{
    public interface IRepositoryBase<T> where T : class
    {
      void Add(T entity);
      Task<IEnumerable<T>> GetAll();
      void Update(T entity);
      void Delete(T entity);
      Task<T> GetById(string id);
      Task<bool> SaveChangeAsync();
    }
}