namespace api.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
        public string Adress { get; set; } = string.Empty;

        public List<Worker> Workers { get; set; } = new List<Worker>();
    }
}
