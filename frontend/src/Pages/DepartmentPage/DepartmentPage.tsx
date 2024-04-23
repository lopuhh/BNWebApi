"use client";

import Button from "antd/es/button/button"
import { useEffect, useState } from "react"
import { DepartmentRequest, createDepartment, deleteDepartment, getAllDepartments, updateDepartment, getWorkersByDepartmentId } from "../../Services/DepartmenService"
import Title from "antd/es/typography/Title"
import { CreateUpdateDepartment, Mode } from "../../Components/CreateUpdateDepartment/CreateUpdateDepartment";
import { DepartmentGet, DepartmentPost } from "../../Models/Department";
import { Departments } from "../../Components/Department/Department";
import "./DepartmentPage.css";




export default function DepartmentsPage(){
    const defaultValues = {
        departmentName: "",
        adress: "",
        } as DepartmentGet;
    


    const [values, setValues] = useState<DepartmentGet>(defaultValues);
    const[departments, setDepartments] = useState<DepartmentGet[]>([]);
    const[loading, setLoading] = useState(true);
    const[isModalOpan, setIsModalOpen] = useState(false);
    const[mode, setMode] = useState(Mode.Create);


    useEffect(() => {
        const getDepartments = async () => {
            const departments = await getAllDepartments();
            setLoading(false);
            setDepartments(departments);
        };

        getDepartments();
    }, []);

    const handleCreateDepartment = async (request: DepartmentRequest) => {
        await createDepartment(request);
        closeModal();

        const departments = await getAllDepartments();
        setDepartments(departments);
    };

    const handleGetDepartment = async(departmentId: string) => {
        await getWorkersByDepartmentId(departmentId);
        closeModal();
    }

    const handleUpdate = async (id: string, request: DepartmentRequest) => {
        await updateDepartment(id, request);
        closeModal();

        const departments = await getAllDepartments();
        setDepartments(departments);
    };

    const handleDelete = async(id: string) => {
        await deleteDepartment(id);
        closeModal();

        const departments = await getAllDepartments();
        setDepartments(departments);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (department: DepartmentGet) => {
        setMode(Mode.Edit);
        setValues(department);
        setIsModalOpen(true);
    };



    return(
        <div>
            <Button
            className="Btn_Add"
            type="primary"
            style={{marginTop: "30px", marginLeft: "30px"}}
            size="large"
            onClick={openModal}>
                Добавить подразделение
            </Button>

            <CreateUpdateDepartment mode={mode} values={values} isModalOpen={isModalOpan} handleCreate={handleCreateDepartment} handleUpdate={handleUpdate} handleCancel={closeModal}/>

            {loading ? (<Title>Loading...</Title>) : <Departments departments={departments} handleOpen={openEditModal} handleDelete={handleDelete}/>}
        </div>
    );
};



