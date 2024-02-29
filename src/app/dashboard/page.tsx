import Table from "./table";

export default function Dashboard() {
    const data = [
        { name: "John Doe", age: 30, email: "john.doe@example.com" },
        { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
        { name: "Alice Johnson", age: 35, email: "alice.johnson@example.com" },
      ]
    return (
        <div className="">
            <Table  data={data.concat(data,data,data,data)}/>
        </div>
    )
}