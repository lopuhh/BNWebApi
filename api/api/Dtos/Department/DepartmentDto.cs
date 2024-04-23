using api.Dtos.Worker;

namespace api.Dtos.Department
{
    public class DepartmentDto
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;

        public List<WorkerDto> Workers { get; set; }
    }
}
