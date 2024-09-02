import React, { useState } from "react";
import PersonalInformationTab from "./PersonalInformationTab";

const ProfileTabs = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="mt-[30px] pt-[30px] border-t-[1px] border-[#DDD]">
      <ul className="flex flex-wrap">
        <li
          className={`text-[16px] hover:text-[#EE232F] hover:border-[#EE232F] hover:border-b-[3px] font-bold flex items-center gap-[5px] px-[10px] cursor-pointer leading-[2] ${
            tabIndex === 1
              ? "text-[#EE232F] border-[#EE232F] border-b-[3px]"
              : "text-[#262626] border-b-[1px] border-[#DDD]"
          }`}
          onClick={() => setTabIndex(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="6" r="4" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
            />
          </svg>
          Personal Information
        </li>
        <li
          className={`text-[16px] hover:text-[#EE232F] hover:border-[#EE232F] hover:border-b-[3px] font-bold flex items-center gap-[5px] px-[10px] cursor-pointer leading-[2] ${
            tabIndex === 2
              ? "text-[#EE232F] border-[#EE232F] border-b-[3px]"
              : "text-[#262626] border-b-[1px] border-[#DDD]"
          }`}
          onClick={() => setTabIndex(2)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="6" r="4" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
            />
          </svg>
          Personal Information
        </li>
        <li
          className={`text-[16px] hover:text-[#EE232F] hover:border-[#EE232F] hover:border-b-[3px] font-bold flex items-center gap-[5px] px-[10px] cursor-pointer leading-[2] ${
            tabIndex === 3
              ? "text-[#EE232F] border-[#EE232F] border-b-[3px]"
              : "text-[#262626] border-b-[1px] border-[#DDD]"
          }`}
          onClick={() => setTabIndex(3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M7.808 2.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C5.752 5.562 5.75 6.564 5.75 8v8c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M2 4.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 2 4.25m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              clipRule="evenodd"
            />
          </svg>
          Documents
        </li>
        <li
          className={`text-[16px] hover:text-[#EE232F] hover:border-[#EE232F] hover:border-b-[3px] font-bold flex items-center gap-[5px] px-[10px] cursor-pointer leading-[2] ${
            tabIndex === 4
              ? "text-[#EE232F] border-[#EE232F] border-b-[3px]"
              : "text-[#262626] border-b-[1px] border-[#DDD]"
          }`}
          onClick={() => setTabIndex(4)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251" />
              <path d="M14.611 11.538H9.39c-.721 0-1.306.54-1.306 1.208v3.623c0 .667.585 1.208 1.306 1.208h5.222c.721 0 1.306-.541 1.306-1.208v-3.623c0-.667-.585-1.208-1.306-1.208" />
              <path d="M9.585 11.538v-1.207a2.415 2.415 0 1 1 4.83 0v1.207" />
            </g>
          </svg>
          Account Access
        </li>
      </ul>
      {tabIndex === 1 && <PersonalInformationTab data={data} />}
      {tabIndex === 2 && <>Personal Information</>}
      {tabIndex === 3 && <>Documents</>}
      {tabIndex === 4 && <>Account Access</>}
    </div>
  );
};

export default ProfileTabs;
