using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Worker
{
    public class UpdateWorkerRequestDto
    {
        [Required]
        public string FIO { get; set; } = string.Empty;
        [Required]
        public string StaffPosition { get; set; } = string.Empty;
        [Required]
        [Range(0, 100000)]
        public decimal Salary { get; set; }
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string PhomeNumber { get; set; } = string.Empty;
        [Required]
        public string AddressOfResidence { get; set; } = string.Empty;
    }
}
