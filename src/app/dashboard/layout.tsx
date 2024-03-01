"use client"

import { useState } from "react";

export default function RootLayout({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
  return isLoggedIn ?(
    <>
      <div className="mx-4">{children}</div>
      <div className="flex mx-4 gap-4">
        <div className="flex flex-col flex-grow">
          <div className="my-4">{revenue}</div>
          <div className="my-4">{users}</div>
        </div>
        <div className="h-fit sticky top-2">{notifications}</div>
      </div>
    </>
  ): (<>{login}</>);
}
