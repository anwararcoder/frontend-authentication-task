import React from "react";
import LogoImage from "./../../public/logo.png";
import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="min-h-[100vh] min-w-[100vw] flex items-center justify-center py-[100px]">
      <div className="container px-[15px] mx-auto">
        <div className="mx-auto max-w-[620px] w-full">
          <Image
            className="mb-[30px] w-full max-w-[220px] mx-auto"
            src={LogoImage}
            alt="Logo"
          />
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
