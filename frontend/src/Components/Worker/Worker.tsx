import Card from "antd/es/card/Card"

import Button from "antd/es/button/button"
import { Link } from "react-router-dom";
import CardTitle from "../CardTitle/CardTitle";
import { WorkerGet } from "../../Models/Worker";

interface Props {
    workers: WorkerGet[];
    handleDelete: (id: string) => void;
    handleOpen: (worker: WorkerGet) => void;
}

export const Workers = ({workers, handleDelete, handleOpen}: Props) => {
    return (
        <div className="cards">
            {workers.map((worker : WorkerGet) => 
                <Card 
                    key={worker.id} 
                    title={<CardTitle departmentName={worker.fio}/>}
                    bordered={false}
                >
                    <p>{worker.staffPosition}</p>
                    <p>{worker.salary}</p>
                    <p>{worker.email}</p>
                    <p>{worker.phomeNumber}</p>
                    <p>{worker.addressOfResidence}</p>
                    <div className="card_buttons">
                        <Button onClick={() => handleOpen(worker)} style={{flex: 1}}>
                            Редактировать
                        </Button>
                        <Button onClick={() => handleDelete(worker.id)} danger style={{flex: 1}}>
                            Удалить
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    );
}
