import Table from "../table";

export default function UsersPage() {
    const data = [
        {
          values: {
            name: {
              value: "John Doe",
              type: "th",
            },
            age: {
              value: 30,
              type: "td",
            },
            email: {
              value: "john.doe@example.com",
              type: "td",
            },
          },
        },
        {
          values: {
            name: {
              value: "Jane Smith",
              type: "th",
            },
            age: {
              value: 25,
              type: "td",
            },
            email: {
              value: "jane.smith@example.com",
              type: "td",
            },
          },
        },
        {
          values: {
            name: {
              value: "Alice Johnson",
              type: "th",
            },
            age: {
              value: 35,
              type: "td",
            },
            email: {
              value: "alice.johnson@example.com",
              type: "td",
            },
          },
        },
      ] as const;
    
      return (
        <div className="max-h-full grid grid-cols-[100%]">
          <h2 className="text-2xl mb-2 underline">Default Users</h2>
          <input
        type="text"
        placeholder="This will Disappear on the root rout of this layout /dashboard"
        className="m-3 px-3 py-1 text-slate-800  max-w-[calc(100%-1.5rem)]"
      />
          <Table
            data={{
              header: [
                { name: "name", text: "Name" },
                { name: "age", text: "Age" },
                { name: "email", text: "Email" },
              ],
              rows: data.concat(data, data, data),
            }}
          />
        </div>
      );
}