import { Input, Modal } from "antd";
import { DepartmentRequest } from "../../Services/DepartmenService";

import { useEffect, useState } from "react";
import { DepartmentGet } from "../../Models/Department";
import "./CreateUpdateDepartment.css";

interface Props {
    mode: Mode;
    values: DepartmentGet;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: DepartmentRequest) => void;
    handleUpdate: (id:string, request: DepartmentRequest) => void;
};

export enum Mode {
    Create,
    Edit,
};

export const CreateUpdateDepartment = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
}: Props) => {
    const[departmentName, setDepartmentName] = useState<string>("");
    const[adress, setAdress] = useState<string>("");

    useEffect(() => {
        setDepartmentName(values.departmentName);
        setAdress(values.adress);
    }, [values]);

    const handleOnOk = async () => {
        const departmentRequest = {departmentName, adress};

        mode == Mode.Create ? handleCreate(departmentRequest) : handleUpdate(values.id, departmentRequest);
    };

    

    return (
        <Modal title={mode === Mode.Create ? "Добавить подразделение" : "Редактировать подразделение"} open={isModalOpen} cancelText={"Отмена"} onOk={handleOnOk} onCancel={handleCancel} >
            <div className="department_modal">
                <Input
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    placeholder="Название"
                />
                <Input
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    placeholder="Адресс"
                />
            </div>
        </Modal>
    );
};