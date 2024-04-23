namespace api.Dtos.Worker
{
    public class WorkerDto
    {
        public int Id { get; set; }
        public string FIO { get; set; } = string.Empty;
        public string StaffPosition { get; set; } = string.Empty;
        public decimal Salary { get; set; }
        public DateTime CreateOn { get; set; } = DateTime.Now;
        public string Email { get; set; } = string.Empty;
        public string PhomeNumber { get; set; } = string.Empty;
        public string AddressOfResidence { get; set; } = string.Empty;
        public int DepartmentId { get; set; }
    }
}
