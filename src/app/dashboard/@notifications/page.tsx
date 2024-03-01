import Link from "next/link";
import Notifications from "./Notifications";

export default function NotificationsPage() {
  const notifications = [
    { message: "Notification 1" },
    { message: "Notification 2" },
    { message: "Notification 3" },
  ];

  return (
    <>
      <h2 className="text-2xl underline mb-2">Notifications</h2>
      <div className="flex flex-col items-center justify-center py-2 bg-slate-500">
        <Notifications notifications={notifications} />
        <Link
          href="/dashboard/archived"
          className="text-black mx-4 hover:text-slate-900"
          scroll={false}
        >
          Archived notifications
        </Link>
      </div>
    </>
  );
}
