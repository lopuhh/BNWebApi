"use client";

import Button from "antd/es/button/button"
import { useEffect, useState } from "react"
import Title from "antd/es/typography/Title"
import { Workers } from "../../Components/Worker/Worker";
import { WorkerGet, WorkerPost } from "../../Models/Worker";
import { WorkerRequest, createWorker, deleteWorker, getWorkersByDepartmentId, getAllWorkers, updateWorker } from "../../Services/WorkerService";
import { CreateUpdateWorker, Mode } from "../../Components/CreateUpdateWorker/CreateUpdateWorker";
import { Link, useParams } from "react-router-dom";
import { date, string } from "yup";
import "./WorkerPage.css";





export default function WorkerPage(){
    const {departmentId} = useParams();

    const defaultValues = {
        fio: "",
        staffPosition: "",
        email: "",
        phomeNumber: "",
        addressOfResidence: "",
        departmentId: departmentId,
    } as WorkerGet;

    

    
    


    const [values, setValues] = useState<WorkerGet>(defaultValues);
    const[workers, setWorkers] = useState<WorkerGet[]>([]);
    const[loading, setLoading] = useState(true);
    const[isModalOpan, setIsModalOpen] = useState(false);
    const[mode, setMode] = useState(Mode.Create);

    

    useEffect(() => {
        const getWorkers = async () => {
            const workers = await getWorkersByDepartmentId(departmentId);
            setLoading(false);
            setWorkers(workers);
        };

        getWorkers();
    }, []);

    const handleCreateWorker = async (request: WorkerRequest) => {
        await createWorker(departmentId, request);
        closeModal();

        const workers = await getWorkersByDepartmentId(departmentId);
        setWorkers(workers);
    };

    const handleUpdate = async (id: string, request: WorkerRequest) => {
        await updateWorker(id, request);
        closeModal();

        const workers = await getWorkersByDepartmentId(departmentId);
        setWorkers(workers);
    };

    const handleDelete = async(id: string) => {
        await deleteWorker(id);
        closeModal();

        const workers = await getWorkersByDepartmentId(departmentId);
        setWorkers(workers);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (worker: WorkerGet) => {
        setMode(Mode.Edit);
        setValues(worker);
        setIsModalOpen(true);
    };



    return(

        <div>
            
            <Link to={"/department"}>
                <Button className="Btn_return">
                    Назад
                </Button>
            </Link>
                    
            <Button
            className="Btn_Add_worker"
            type="primary"
            style={{marginTop: "30px"}}
            size="large"
            onClick={openModal}>
                Добавить сотрудника
            </Button>
            

            <CreateUpdateWorker mode={mode} values={values} isModalOpen={isModalOpan} handleCreate={handleCreateWorker} handleUpdate={handleUpdate} handleCancel={closeModal}/>

            {loading ? (<Title>Loading...</Title>) : <Workers workers={workers} handleOpen={openEditModal} handleDelete={handleDelete}/>}
        </div>
    );
};



