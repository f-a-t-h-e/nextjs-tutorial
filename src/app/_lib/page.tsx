// import Table, { TableProps } from "../table";

// const revenueData: TableProps<"year" | "month" | "revenue"> = {
//     header: [
//       { text: "Year", name: "year" },
//       { text: "Month", name: "month" },
//       { text: "Revenue", name: "revenue" }
//     ],
//     rows: [
//       {
//         values: {
//           year: { value: 2023, type: "th" },
//           month: { value: "January", type: "td" },
//           revenue: { value: 50000 }
//         }
//       },
//       {
//         values: {
//           year: { value: 2023, type: "th" },
//           month: { value: "February", type: "td" },
//           revenue: { value: 55000 }
//         }
//       },
//       {
//         values: {
//           year: { value: 2023, type: "th" },
//           month: { value: "March", type: "td" },
//           revenue: { value: 60000 }
//         }
//       },
//       {
//         values: {
//           year: { value: 2023, type: "th" },
//           month: { value: "April", type: "td" },
//           revenue: { value: 62000 }
//         }
//       },
//       {
//         values: {
//           year: { value: 2023, type: "th" },
//           month: { value: "May", type: "td" },
//           revenue: { value: 65000 }
//         }
//       }
//     ]
//   };

// export default function RevenuePage() {
//       return (
//         <div className="">
//           <h2 className="text-2xl mb-2 underline">Revenue</h2>
//       <input type="text" placeholder="Try this" className="m-3 px-3 py-1 text-slate-800" />
//           <Table
//             data={{
//                 header: revenueData.header,
//                 rows: revenueData.rows.concat(revenueData.rows, revenueData.rows)
//             }}
//           />
//         </div>
//       );
// }