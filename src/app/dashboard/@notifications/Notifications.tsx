"use client";
import { useState } from "react";

const Notifications = ({
  notifications,
}: {
  notifications: { message: string }[];
}) => {
  const [show, setShow] = useState(true);

  return (
    // <div className="fixed top-0 right-0 m-4 flex flex-col items-end">
    <div className="m-4 flex flex-col items-end">
      {show &&
        notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white px-4 py-2 mb-2 rounded-md shadow-md"
          >
            {notification.message}
          </div>
        ))}
    </div>
  );
};

export default Notifications;
