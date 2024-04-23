using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class WorkerRepository : IWorkerRepository
    {
        private readonly ApplicationDBContext _context;
        public WorkerRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Worker> CreateAsync(Worker workerModel)
        {
            await _context.Workers.AddAsync(workerModel);
            await _context.SaveChangesAsync();

            return workerModel;
        }

        public async Task<Worker?> DeleteAsync(int id)
        {
            var workerModel = await _context.Workers.FirstOrDefaultAsync(x => x.Id == id);

            if (workerModel == null)
            {
                return null;
            }

            _context.Workers.Remove(workerModel);
            await _context.SaveChangesAsync();

            return workerModel;
        }

        public async Task<List<Worker>> DeleteDepartmentAsync(int departmentId)
        {
            var workerModel = await _context.Workers.Where(x => x.DepartmentId == departmentId).ToListAsync();



            _context.Workers.RemoveRange(workerModel);
            await _context.SaveChangesAsync();

            return workerModel;
        }

        public async Task<List<Worker>> GetByDepartmentIdAsync(int departmentId)
        {

            return await _context.Workers.Where(c => c.DepartmentId == departmentId).ToListAsync();


        }

        public async Task<Worker?> GetByIdAsync(int id)
        {
            return await _context.Workers.Include(c => c.Department).FirstOrDefaultAsync(i => i.Id == id);
        }


        public async Task<Worker?> UpdateAsync(int id, Worker workerModel)
        {
            var existingWorker = await _context.Workers.FirstOrDefaultAsync(x => x.Id == id);

            if (existingWorker == null)
            {
                return null;
            }

            existingWorker.FIO = workerModel.FIO;
            existingWorker.StaffPosition = workerModel.StaffPosition;
            existingWorker.Salary = workerModel.Salary;
            existingWorker.Email = workerModel.Email;
            existingWorker.PhomeNumber = workerModel.PhomeNumber;
            existingWorker.AddressOfResidence = workerModel.AddressOfResidence;

            await _context.SaveChangesAsync();

            return existingWorker;
        }
    }
}
