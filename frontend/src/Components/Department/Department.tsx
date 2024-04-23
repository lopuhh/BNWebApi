import Card from "antd/es/card/Card"

import Button from "antd/es/button/button"
import { DepartmentGet } from "../../Models/Department";
import { Link } from "react-router-dom";
import CardTitle from "../CardTitle/CardTitle";
import { useState } from "react";

interface Props {
    departments: DepartmentGet[];
    handleDelete: (id: string) => void;
    handleOpen: (department: DepartmentGet) => void;
}


export const Departments = ({departments, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {departments.map((department : DepartmentGet) => 
                <Card 
                    key={department.id} 
                    title={<CardTitle departmentName={department.departmentName}/>}
                    bordered={false}
                >
                    <p>{department.adress}</p>
                    <div className="card_button_worker">
                        <Link key={department.id} to={'/worker/'+department.id} >
                            <Button>
                                Просмотр сотрудников
                            </Button>
                        </Link>
                    </div>
                    <div className="card_buttons">
                        <Button onClick={() => handleOpen(department)} style={{flex: 1}}>
                            Редактировать
                        </Button>
                        <Button onClick={() => handleDelete(department.id)} danger style={{flex: 1}}>
                            Удалить
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
}
