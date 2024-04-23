using api.Data;
using api.Dtos.Department;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IDepartmentRepository _departmentRepo;
        private readonly IWorkerRepository _workerRepo;
        public DepartmentController(ApplicationDBContext context,
                            IDepartmentRepository departmentRepo, IWorkerRepository workerRepo)
        {
            _departmentRepo = departmentRepo;
            _workerRepo = workerRepo;
            _context = context;
        }

        [HttpGet]
        //[Authorize]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var departments = await _departmentRepo.GetAllAsync();

            var departmentDto = departments.Select(s => s.ToDepartmentDto());

            return Ok(departmentDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var department = await _departmentRepo.GetByIdAsync(id);

            if (department == null)
            {
                return NotFound();
            }

            return Ok(department.ToDepartmentDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateDepartmentRequestDto departmentDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var departmentModel = departmentDto.ToDepartmentFromCreatedDto();
            await _departmentRepo.CreateAsync(departmentModel);


            return CreatedAtAction(nameof(GetById), new { id = departmentModel.Id }, departmentModel.ToDepartmentDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateDepartmentRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var departmentModel = await _departmentRepo.UpdateAsync(id, updateDto);

            if (departmentModel == null)
            {
                return NotFound();
            }

            return Ok(departmentModel.ToDepartmentDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var workerModel = await _workerRepo.DeleteDepartmentAsync(id);

            var departmentModel = await _departmentRepo.DeleteAsync(id);


            if (departmentModel == null | workerModel == null)
            {
                return NotFound();
            }



            return NoContent();
        }

    }
}
