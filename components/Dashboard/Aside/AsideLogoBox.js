import Image from "next/image";
import React from "react";
import LogoImage from "./../../../public/logo.png";

const AsideLogoBox = ({ openAside, setOpenAside }) => {
  return (
    <div className="flex  items-center justify-between lg:justify-center gap-[15px] p-[25px] my-[40px]">
      <Image className="max-w-[150px] lg:max-w-[200px]" src={LogoImage} alt="LogoImage" />
      <button
        className="lg:hidden w-[40px] h-[40px] bg-[#EE232F] flex items-center justify-center rounded-[3px] hover:bg-[#262626]"
        onClick={() => setOpenAside(!openAside)}
      >
        <svg
          viewBox="0 0 20 18"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white w-[15px] h-[15px]"
        >
          <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default AsideLogoBox;
