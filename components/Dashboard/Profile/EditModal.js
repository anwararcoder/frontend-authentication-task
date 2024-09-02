import React from "react";
import ProfileUpdate from "./ProfileUpdate";

const EditModal = ({ editModalRef }) => {
  return (
    <div
      className="fixed z-[55555] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[80vw] w-full max-h-[90vh] overflow-y-auto shadow-lg border-[1px] border-[#DDD] rounded-[8px]"
      ref={editModalRef}
    >
      <h4 class="text-xl font-bold p-[30px] border-b-[1px] border-[#DDD]">Update Profile : Mariam Aly</h4>
      <div className="p-[30px]">
        <ProfileUpdate />
      </div>
    </div>
  );
};

export default EditModal;
