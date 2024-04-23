using api.Dtos.Worker;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/worker")]
    [ApiController]
    public class WorkerController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepo;
        private readonly IWorkerRepository _workerRepo;
        public WorkerController(IDepartmentRepository departmentRepo,
                            IWorkerRepository workerRepo)
        {
            _departmentRepo = departmentRepo;
            _workerRepo = workerRepo;
        }

        [HttpGet("{departmentId:int}")]
        public async Task<IActionResult> GetByDepartmentId([FromRoute] int departmentId)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var worker = await _workerRepo.GetByDepartmentIdAsync(departmentId);

            var workerDto = worker.Select(s => s.ToWorkerDto());

            return Ok(workerDto);
        }

        [HttpGet("get{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var worker = await _workerRepo.GetByIdAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            return Ok(worker.ToWorkerDto());
        }

        [HttpPost("{departmentId:int}")]
        public async Task<IActionResult> Create([FromRoute] int departmentId, CreateWorkerRequestDto workerDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!await _departmentRepo.DepartmentExists(departmentId))
            {
                return BadRequest("Подразделения не существует");
            }

            var workerModel = workerDto.ToWorkerFromCreatedDto(departmentId);
            await _workerRepo.CreateAsync(workerModel);

            return CreatedAtAction(nameof(GetById), new { id = workerModel.Id }, workerModel.ToWorkerDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateWorkerRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var worker = await _workerRepo.UpdateAsync(id, updateDto.ToWorkerFromUpdate());

            if (worker == null)
            {
                return NotFound();
            }

            return Ok(worker.ToWorkerDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var workerModel = await _workerRepo.DeleteAsync(id);

            if (workerModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
