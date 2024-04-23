﻿using api.Dtos.Department;
using api.Models;

namespace api.Interfaces
{
    public interface IDepartmentRepository
    {
        Task<List<Department>> GetAllAsync();
        Task<Department?> GetByIdAsync(int id);
        Task<Department> CreateAsync(Department departmentModel);
        Task<Department?> UpdateAsync(int id, UpdateDepartmentRequestDto departmentDto);
        Task<Department?> DeleteAsync(int id);
        Task<bool> DepartmentExists(int id);
    }
}
