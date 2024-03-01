export const metadata = {
    title: {
      template: "Dashboard | %s",
      default: "Dashboard",
    },
    description: "This is the dashboard",
  };
  
  export default function Dashboard() {
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
      <div className="">
        <h1 className="text-3xl my-3">Default Dashboard</h1>
      </div>
    );
  }
  