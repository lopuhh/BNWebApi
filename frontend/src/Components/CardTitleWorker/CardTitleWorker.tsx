
interface Props  {
    fio:string;
};

const CardTitleWorker = ({fio}: Props) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <p className="card_fio">{fio}</p>
        </div>
    );
}

export default CardTitleWorker;