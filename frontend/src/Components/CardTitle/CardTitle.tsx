
interface Props  {
    departmentName:string;
};

const CardTitle = ({departmentName}: Props) => {
    return(
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <p className="card_departmentName">{departmentName}</p>
        </div>
    );
}

export default CardTitle;