const TableRow = ({ name, age, email }: IRow) => (
  <tr className="hover:bg-gray-800 even:bg-gray-50/15 ">
    <td className="border px-4 py-2">{name}</td>
    <td className="border px-4 py-2">{age}</td>
    <td className="border px-4 py-2">{email}</td>
  </tr>
);
interface IRow {
  name: string;
  age: number;
  email: string;
}
export default function Table({ data }: { data: IRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Age</th>
            <th className="px-4 py-2 font-semibold">Email</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {data.map((person, index) => (
            <TableRow key={index} {...person} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
