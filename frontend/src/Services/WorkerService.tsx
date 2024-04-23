import { useParams } from "react-router-dom";

  export interface WorkerRequest {
    fio: string,
    staffPosition: string,
    salary: number,
    email: string,
    phomeNumber: string,
    addressOfResidence: string,
    departmentId: string,
}

const api = "https://localhost:7198/api/";

export const getAllWorkers = async () => {
    const response = await fetch(api + "worker")

    return response.json();
};

export const getWorkersByDepartmentId = async (departmentId: string | undefined) => {
    const response = await fetch(api + "worker/" + departmentId)

    return response.json();
};

export const createWorker = async (departmentId: string | undefined, workerrequest: WorkerRequest) => {
    await fetch(api + "worker/" + departmentId,{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(workerrequest)
    })
}

export const updateWorker = async (id: string, workerrequest: WorkerRequest) => {
    await fetch(api + 'worker/'+id,{
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(workerrequest)
    })
}

export const deleteWorker = async (id: string) => {
    await fetch(api + 'worker/'+id,{
        method: "DELETE",
    })
}


