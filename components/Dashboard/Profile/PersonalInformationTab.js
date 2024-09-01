import React from "react";

const PersonalInformationTab = () => {
  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">First Name</span>
          <div className="text-[16px] font-semibold leading-[3]">Mariam</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">Last Name</span>
          <div className="text-[16px] font-semibold leading-[3]">Aly</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">
            Mobile Number
          </span>
          <div className="text-[16px] font-semibold leading-[3]">
            010567240256
          </div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">
            Email Address
          </span>
          <div className="text-[16px] font-semibold leading-[3]">
            mariam@gmail.com{" "}
          </div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">
            Date of Birth
          </span>
          <div className="text-[16px] font-semibold leading-[3]">
            July 14, 1995{" "}
          </div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">
            Marital Status
          </span>
          <div className="text-[16px] font-semibold leading-[3]">Single</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">Gender</span>
          <div className="text-[16px] font-semibold leading-[3]">Female</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">Nationality</span>
          <div className="text-[16px] font-semibold leading-[3]">Egypt</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">Address</span>
          <div className="text-[16px] font-semibold leading-[3]">Maadi</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">City</span>
          <div className="text-[16px] font-semibold leading-[3]">Cairo</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">State</span>
          <div className="text-[16px] font-semibold leading-[3]">Cairo</div>
        </div>
        <div className="border-[#DDD] border-b-[1px]">
          <span className="block text-[#A2A1A8] leading-[1]">Zip Code</span>
          <div className="text-[16px] font-semibold leading-[3]">35624</div>
        </div>
        <div>
          <span className="block text-[#A2A1A8] leading-[1]">Work’s hours</span>
          <div className="text-[16px] font-semibold leading-[3]">180 hour</div>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <span className="block text-[#A2A1A8] leading-[1]">
              Salary/hour
            </span>
            <div className="text-[16px] font-semibold leading-[3]">300 EGP</div>
          </div>
          <div>
            <span className="block leading-[1] font-bold text-[#EE232F]">
              Total Salary
            </span>
            <div className="text-[16px] font-semibold leading-[3]">
              54000 EGP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationTab;
