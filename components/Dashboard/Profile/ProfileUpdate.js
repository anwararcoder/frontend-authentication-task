import { AxiosAPI } from "@/axios/axiosInstance";
import Loading from "@/components/Loading";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProfileUpdate = () => {
  const [cover, setCover] = useState(null);
  const [coverFileName, setCoverFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCover(file);
      setCoverFileName(file.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cover) {
      toast.error("Please select an image file to upload.");
      return;
    }
    if (!firstName) {
      toast.error("Please Enter Your First Name to Update.");
      return;
    }
    if (!lastName) {
      toast.error("Please Enter Your Last Name to Update.");
      return;
    }

    const formData = new FormData();
    formData.append("cover", cover);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    setLoading(true);

    try {
      const response = await AxiosAPI.patch("/profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Profile updated successfully!");
      setCover(null);
      setCoverFileName("");
      setFirstName("");
      setLastName("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="group relative mb-[30px]">
        <label
          htmlFor="cover"
          className="cursor-pointer h-[120px] w-full border-[2px] border-dashed border-[#DDD] group-hover:border-[#EE232F] group-hover:bg-[#EE232F] rounded-[8px] flex items-center justify-center gap-[12px] text-[#999] font-[500] text-[20px] group-hover:text-[#fff]"
        >
          {coverFileName || "Upload User Image"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            className="fill-[#666666] group-hover:fill-[#fff]"
          >
            <path d="M9.50043 17.75C9.09043 17.75 8.75043 17.41 8.75043 17V12.81L8.03043 13.53C7.74043 13.82 7.26043 13.82 6.97043 13.53C6.68043 13.24 6.68043 12.76 6.97043 12.47L8.97043 10.47C9.18043 10.26 9.51043 10.19 9.79043 10.31C10.0704 10.42 10.2504 10.7 10.2504 11V17C10.2504 17.41 9.91043 17.75 9.50043 17.75Z" />
            <path d="M11.5004 13.7499C11.3104 13.7499 11.1204 13.6799 10.9704 13.5299L8.97043 11.5299C8.68043 11.2399 8.68043 10.7599 8.97043 10.4699C9.26043 10.1799 9.74043 10.1799 10.0304 10.4699L12.0304 12.4699C12.3204 12.7599 12.3204 13.2399 12.0304 13.5299C11.8804 13.6799 11.6904 13.7499 11.5004 13.7499Z" />
            <path d="M15.5 22.75H9.5C4.07 22.75 1.75 20.43 1.75 15V9C1.75 3.57 4.07 1.25 9.5 1.25H14.5C14.91 1.25 15.25 1.59 15.25 2C15.25 2.41 14.91 2.75 14.5 2.75H9.5C4.89 2.75 3.25 4.39 3.25 9V15C3.25 19.61 4.89 21.25 9.5 21.25H15.5C20.11 21.25 21.75 19.61 21.75 15V10C21.75 9.59 22.09 9.25 22.5 9.25C22.91 9.25 23.25 9.59 23.25 10V15C23.25 20.43 20.93 22.75 15.5 22.75Z" />
            <path d="M22.5 10.75H18.5C15.08 10.75 13.75 9.41999 13.75 5.99999V1.99999C13.75 1.69999 13.93 1.41999 14.21 1.30999C14.49 1.18999 14.81 1.25999 15.03 1.46999L23.03 9.46999C23.24 9.67999 23.31 10.01 23.19 10.29C23.07 10.57 22.8 10.75 22.5 10.75ZM15.25 3.80999V5.99999C15.25 8.57999 15.92 9.24999 18.5 9.24999H20.69L15.25 3.80999Z" />
          </svg>
        </label>
        <input
          className="absolute inset-0 opacity-0 cursor-pointer"
          id="cover"
          name="cover"
          type="file"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              setCover(file);
              setCoverFileName(file.name);
            }
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
        <div>
          <label class="text-[16px] font-bold leading-[1] block mb-[15px] text-[#666]">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Anwar Ramadan"
            defaultValue={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            class="w-[100%] h-[50px] leading-[50px] border-[1px] border-[#DDD] hover:border-[#EE232F] focus:border-[#EE232F] text-[#666] text-[14px] rounded-[8px] bg-[#FFF] px-[15px]"
          />
        </div>
        <div>
          <label class="text-[16px] font-bold leading-[1] block mb-[15px] text-[#666]">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Ramadan"
            defaultValue={lastName}
            onChange={(e) => setLastName(e.target.value)}
            class="w-[100%] h-[50px] leading-[50px] border-[1px] border-[#DDD] hover:border-[#EE232F] focus:border-[#EE232F] text-[#666] text-[14px] rounded-[8px] bg-[#FFF] px-[15px]"
          />
        </div>
      </div>
      <button type="submit" class="btn-1 btn-3 w-full">
        <span>Update Profile</span>
      </button>
    </form>
  );
};

export default ProfileUpdate;
