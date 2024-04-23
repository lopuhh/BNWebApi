import axios from "axios";
import { DepartmentGet, DepartmentPost } from "../Models/Department";
import { handleError } from "../Helpers/ErrorHandler";




  export interface DepartmentRequest {
    departmentName: string;
    adress: string;
}

const api = "https://localhost:7198/api/";
export const getAllDepartments = async () => {
    const response = await fetch(api + "department")

    return response.json();
};

export const getWorkersByDepartmentId = async (departmentId: string) => {
  const response = await fetch(api + "departmentId/" + departmentId)

  return response.json();
};

export const createDepartment = async (departmentrequest: DepartmentRequest) => {
    await fetch(api + "department",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(departmentrequest)
    })
}

export const updateDepartment = async (id: string, departmentrequest: DepartmentRequest) => {
    await fetch(api + 'department/'+id,{
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(departmentrequest)
    })
}

export const deleteDepartment = async (id: string) => {
    await fetch(api + 'department/'+id,{
        method: "DELETE",
    })
}


