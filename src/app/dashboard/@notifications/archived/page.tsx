import Link from "next/link";
import Notifications from "../Notifications";

export default function NotificationsPage() {
  const notifications = [
    { message: "Archived Notification 1" },
    { message: "Archived Notification 2" },
    { message: "Archived Notification 3" },
  ];

  return (
    <>
      <h2 className="text-2xl underline mb-2">Archived notifications</h2>
      <div className="flex flex-col items-center justify-center py-2 bg-slate-500">
        <Notifications notifications={notifications} />
        <Link
          href="/dashboard"
          className="text-black mx-4 hover:text-slate-900"
          scroll={false}
        >
          Active notifications
        </Link>
      </div>
    </>
  );
}
