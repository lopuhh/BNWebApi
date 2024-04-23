using api.Dtos.Department;
using api.Models;

namespace api.Mappers
{
    public static class DepartmentMappers
    {
        public static DepartmentDto ToDepartmentDto(this Department departmentModel)
        {
            return new DepartmentDto
            {
                Id = departmentModel.Id,
                DepartmentName = departmentModel.DepartmentName,
                Adress = departmentModel.Adress,
                Workers = departmentModel.Workers.Select(c => c.ToWorkerDto()).ToList()

            };
        }

        public static Department ToDepartmentFromCreatedDto(this CreateDepartmentRequestDto departmentDto)
        {
            return new Department
            {
                DepartmentName = departmentDto.DepartmentName,
                Adress = departmentDto.Adress
            };
        }
    }
}
