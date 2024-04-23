using api.Dtos.Worker;
using api.Models;

namespace api.Mappers
{
    public static class WorkerMappers
    {
        public static WorkerDto ToWorkerDto(this Worker workerModel)
        {
            return new WorkerDto
            {
                Id = workerModel.Id,
                FIO = workerModel.FIO,
                StaffPosition = workerModel.StaffPosition,
                Salary = workerModel.Salary,
                Email = workerModel.Email,
                PhomeNumber = workerModel.PhomeNumber,
                AddressOfResidence = workerModel.AddressOfResidence,
                DepartmentId = workerModel.DepartmentId

            };
        }

        public static Worker ToWorkerFromCreatedDto(this CreateWorkerRequestDto workerDto, int departmentId)
        {
            return new Worker
            {
                FIO = workerDto.FIO,
                StaffPosition = workerDto.StaffPosition,
                Salary = workerDto.Salary,
                Email = workerDto.Email,
                PhomeNumber = workerDto.PhomeNumber,
                AddressOfResidence = workerDto.AddressOfResidence,
                DepartmentId = departmentId
            };
        }

        public static Worker ToWorkerFromUpdate(this UpdateWorkerRequestDto workerDto)
        {
            return new Worker
            {
                FIO = workerDto.FIO,
                StaffPosition = workerDto.StaffPosition,
                Salary = workerDto.Salary,
                Email = workerDto.Email,
                PhomeNumber = workerDto.PhomeNumber,
                AddressOfResidence = workerDto.AddressOfResidence
            };
        }
    }
}
