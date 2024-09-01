import React from "react";
import AsideLogoBox from "./AsideLogoBox";
import AsideLinks from "./AsideLinks";

const Aside = ({ openAside, setOpenAside }) => {
  return (
    <>
      <aside
        className={`absolute left-0 top-0 z-[9999] lg:static p-[30px] pr-0 flex h-full w-[calc(100%-30px)] sm:w-[350px] flex-col overflow-y-hidden lg:translate-x-0 bg-white ${
          openAside ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-[#E9E9E9] border-[1px] rounded-[16px] h-full">
          <AsideLogoBox openAside={openAside} setOpenAside={setOpenAside} />
          <div className="no-scrollbar flex flex-col overflow-y-auto h-full justify-between">
            <AsideLinks openAside={openAside} setOpenAside={setOpenAside} />
          </div>
        </div>
      </aside>
      {openAside && (
        <div
          onClick={() => setOpenAside(!openAside)}
          className="absolute inset-0 z-[9998] lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Aside;
