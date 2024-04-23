using api.Models;

namespace api.Interfaces
{
    public interface IWorkerRepository
    {
        Task<List<Worker>> GetByDepartmentIdAsync(int departmentId);
        Task<Worker?> GetByIdAsync(int id);
        Task<Worker> CreateAsync(Worker workerModel);
        Task<Worker?> UpdateAsync(int id, Worker workerModel);
        Task<Worker?> DeleteAsync(int id);
        Task<List<Worker>> DeleteDepartmentAsync(int departmentId);
    }
}
