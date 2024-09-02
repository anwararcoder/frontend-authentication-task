"use client";
import React, { useContext } from "react";
import Login from "@/components/Login/Login";
import { ContextAuth } from "@/context/ContextAuth";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(ContextAuth);

  return <>{isLoggedIn ? router.push("/dashboard") : <Login />}</>;
};

export default Home;
