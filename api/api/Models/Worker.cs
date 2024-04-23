using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Worker
    {
        public int Id { get; set; }
        public string FIO { get; set; } = string.Empty;
        public string StaffPosition { get; set; } = string.Empty;
        [Column(TypeName = "decimal(18,2)")]
        public decimal Salary { get; set; }
        public string Email { get; set; } = string.Empty;
        public string PhomeNumber { get; set; } = string.Empty;
        public string AddressOfResidence { get; set; } = string.Empty;
        public int DepartmentId { get; set; }
        public Department? Department { get; set; }
    }
}
