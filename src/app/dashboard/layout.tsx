"use client";

import { Suspense, useState } from "react";
import Loading from "./@revenue/loading";

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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return isLoggedIn ? (
    <>
      <div className="mx-4">{children}</div>
      <div className="grid grid-cols-[minmax(200px,1fr)_minmax(100px,auto)] mx-4 gap-4 max-w-full">
        <div className="flex flex-col flex-grow">
          <div className="my-4 flex flex-col max-h-[30rem]">{users}</div>
          <div className="my-4 flex flex-col max-h-[40rem]">
            <Suspense fallback={<Loading />}>{revenue}</Suspense>
          </div>
        </div>
        <div className="h-fit sticky top-2">{notifications}</div>
      </div>
    </>
  ) : (
    <>{login}</>
  );
}
