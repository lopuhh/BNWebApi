using api.Data;
using api.Dtos.Department;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly ApplicationDBContext _context;
        public DepartmentRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Department> CreateAsync(Department departmentModel)
        {
            await _context.Departments.AddAsync(departmentModel);
            await _context.SaveChangesAsync();

            return departmentModel;
        }

        public async Task<Department?> DeleteAsync(int id)
        {
            var departmentModel = await _context.Departments.FirstOrDefaultAsync(x => x.Id == id);


            if (departmentModel == null)
            {
                return null;
            }

            _context.Departments.Remove(departmentModel);
            await _context.SaveChangesAsync();

            return departmentModel;
        }

        public async Task<List<Department>> GetAllAsync()
        {
            return await _context.Departments.Include(c => c.Workers).ToListAsync();
        }

        public async Task<Department?> GetByIdAsync(int id)
        {
            return await _context.Departments.Include(c => c.Workers).FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Department?> UpdateAsync(int id, UpdateDepartmentRequestDto departmentDto)
        {
            var existingDepartment = await _context.Departments.FindAsync(id);

            if (existingDepartment == null)
            {
                return null;
            }

            existingDepartment.DepartmentName = departmentDto.DepartmentName;
            existingDepartment.Adress = departmentDto.Adress;


            await _context.SaveChangesAsync();

            return existingDepartment;
        }

        public Task<bool> DepartmentExists(int id)
        {
            return _context.Departments.AnyAsync(s => s.Id == id);
        }
    }
}
