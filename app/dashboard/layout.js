"use client";
import Aside from "@/components/Dashboard/Aside/Aside";
import Navbar from "@/components/Dashboard/Navbar/Navbar";
import { ContextAuth } from "@/context/ContextAuth";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const LayoutAdmin = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useContext(ContextAuth);
  const [openAside, setOpenAside] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="h-screen">
          <div className="flex h-full overflow-hidden">
            <Aside openAside={openAside} setOpenAside={setOpenAside} />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Navbar openAside={openAside} setOpenAside={setOpenAside} />
              <main className="p-[30px]">
                <div className="w-full min-h-[50vh]">{children}</div>
              </main>
            </div>
          </div>
        </div>
      ) : (
        router.push("/")
      )}
    </>
  );
};

export default LayoutAdmin;
