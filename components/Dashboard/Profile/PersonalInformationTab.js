import { formatDate } from "@/utils/FormatDate";
import React from "react";

const PersonalInformationTab = ({ data }) => {
  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {data.first_name && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">First Name</span>
            <div className="text-[16px] font-semibold leading-[3]">
              {data.first_name}
            </div>
          </div>
        )}
        {data.last_name && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">Last Name</span>
            <div className="text-[16px] font-semibold leading-[3]">
              {data.last_name}
            </div>
          </div>
        )}
        {data.phone && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">
              Mobile Number
            </span>
            <div className="text-[16px] font-semibold leading-[3]">
              {data.phone}
            </div>
          </div>
        )}
        {data.email && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">
              Email Address
            </span>
            <div className="text-[16px] font-semibold leading-[3]">
              {data.email}
            </div>
          </div>
        )}
        {data.created && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">
              Created Date
            </span>
            <div className="text-[16px] font-semibold leading-[3]">
              {formatDate(data.created)}
            </div>
          </div>
        )}
        {data.date_joined && (
          <div className="border-[#DDD] border-b-[1px]">
            <span className="block text-[#A2A1A8] leading-[1]">
              Date Joined
            </span>
            <div className="text-[16px] font-semibold leading-[3]">
              {formatDate(data.date_joined)}
            </div>
          </div>
        )}
        {data.bio && (
          <div>
            <span className="block text-[#A2A1A8] leading-[1]">bio</span>
            <div className="text-[16px] font-semibold leading-[3]">
              {data.bio}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformationTab;
