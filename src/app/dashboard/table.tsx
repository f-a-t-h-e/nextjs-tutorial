const TableRow = <T extends string | number>(
  {values,mappingObj, id}:{values: IRow<T>,
  mappingObj: (keyof IRow<T>)[]; id:number|string,}
) => (
  <tr key={id} className="hover:bg-gray-800 even:bg-gray-50/15">
    {mappingObj.map((name, i) => {
      const targetData = values[name];
      if (targetData.type === "th") {
        return <th key={i} className="border px-4 py-2 bg-gray-800/45">{targetData.value}</th>;
      }
      return <td key={i} className="border px-4 py-2">{targetData.value}</td>;
    })}
  </tr>
);
type IRow<T extends string | number = ""> = {
  [key in T]: {
    value: string | number | null | undefined;
    type?: "td" | "th";
  };
};

export interface TableProps<T extends string | number> {
  header: { text: string | number | null | undefined; name: T }[];
  rows: {
    values: {
      [key in T]: {
        value: string | number | null | undefined;
        type?: "td" | "th";
      };
    };
  }[];
}

export default function Table<T extends string | number = "">({
  data,
}: {
  data: TableProps<T>;
}) {
  const mappingObj = data.header.map((val) => val.name as typeof val.name);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            {data.header.map((val, i) => (
              <th key={i} className="px-4 py-2 font-semibold">{val.text}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {data.rows.map((row, index) => (
            <TableRow<T> id={index} key={index} {...row} mappingObj={mappingObj}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
