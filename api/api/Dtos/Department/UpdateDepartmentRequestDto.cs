using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Department
{
    public class UpdateDepartmentRequestDto
    {
        [Required]
        public string DepartmentName { get; set; } = string.Empty;
        [Required]
        public string Adress { get; set; } = string.Empty;
    }
}
