import { Input, Modal } from "antd";
import { WorkerRequest } from "../../Services/WorkerService";

import { useEffect, useState } from "react";
import { WorkerGet } from "../../Models/Worker";

interface Props {
    mode: Mode;
    values: WorkerGet;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: WorkerRequest) => void;
    handleUpdate: (id:string, request: WorkerRequest) => void;
};

export enum Mode {
    Create,
    Edit,
};

export const CreateUpdateWorker = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const[fio, setFio] = useState<string>("");
    const[staffPosition, setStaffPosition] = useState<string>("");
    const[salary, setSalary] = useState<number>(1);
    const[email, setEmail] = useState<string>("");
    const[phomeNumber, setPhone] = useState<string>("");
    const[addressOfResidence, setAdressOfResidence] = useState<string>("");
    const[departmentId, setDepartmentId] = useState<string>("");


    useEffect(() => {
        setFio(values.fio);
        setStaffPosition(values.staffPosition);
        setSalary(values.salary);
        setEmail(values.email);
        setPhone(values.phomeNumber);
        setAdressOfResidence(values.addressOfResidence);
        setDepartmentId(values.departmentId);
        
    }, [values]);

    const handleOnOk = async () => {
        const workerRequest = {fio, staffPosition, salary, email, phomeNumber, addressOfResidence, departmentId};

        mode == Mode.Create ? handleCreate(workerRequest) : handleUpdate(values.id, workerRequest);
    };

    

    return (
        <Modal title={mode === Mode.Create ? "Добавить сотрудника" : "Редактировать сотрудника"} open={isModalOpen} cancelText={"Отмена"} onOk={handleOnOk} onCancel={handleCancel}>
            <div className="worker_modal">
                <Input
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    placeholder="ФИО"
                />
                <Input
                    value={staffPosition}
                    onChange={(e) => setStaffPosition(e.target.value)}
                    placeholder="Должность"
                />
                <Input
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    placeholder="зарплата"
                />   
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Электронная почта"
                />
                <Input
                    value={phomeNumber}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Номер телефона"
                />
                <Input
                    value={addressOfResidence}
                    onChange={(e) => setAdressOfResidence(e.target.value)}
                    placeholder="Адресс проживания"
                />
            </div>
        </Modal>
    );
};