"use client";
import React, { useContext, useState } from "react";
import { AxiosAPI } from "@/axios/axiosInstance";
import { ContextAuth } from "@/context/ContextAuth";
import { ShowErrors } from "@/utils/ShowErrors";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { storage } from "@/utils/LocalStorage";

const LoginForm = () => {
  const router = useRouter();
  const { saveTokens, login } = useContext(ContextAuth);
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    const credentialsData = new URLSearchParams();
    credentialsData.append("email", email);
    credentialsData.append("password", password);

    setIsLoading(true);

    try {
      const response = await AxiosAPI.post("/login/", credentialsData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.status === 200) {
        saveTokens(response.data.refresh, response.data.access);
        toast.success("Login successful!");
        try {
          const { data } = await AxiosAPI.get("/profile/", {
            headers: {
              Authorization: `Bearer ${storage.get("token")}`,
            },
          });
          login(data);
          router.push("/dashboard/employees/profile");
        } catch (fetchError) {
          ShowErrors(fetchError.response.data);
        }
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      ShowErrors(error.response?.data || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={loginSubmit}
      className="py-[80px] px-[40px] border-[#E9E9E9] border-[1px] rounded-[16px]"
    >
      <div className="mb-[30px]">
        <label className="text-[17px] font-semibold leading-[1.25] text-[#262626] block mb-[15px]">
          Email Address
        </label>
        <div className="relative">
          <input
            placeholder="nouran@cyparta.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[60px] w-[100%] leading-[60px] border-[2px] border-[#E9E9E9] hover:border-[#262626] focus:border-[#262626] text-[#262626] text-[14px] rounded-[8px] bg-[#FFF] px-[15px]"
          />
        </div>
      </div>
      <div className="mb-[30px]">
        <label className="text-[17px] font-semibold leading-[1.25] text-[#262626] block mb-[15px]">
          Password
        </label>
        <div className="relative">
          <input
            placeholder="***************"
            type={showPassword ? "password" : "text"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[60px] w-[100%] leading-[60px] border-[2px] border-[#E9E9E9] hover:border-[#262626] focus:border-[#262626] text-[#262626] text-[14px] rounded-[8px] bg-[#FFF] px-[15px]"
          />
          <span
            className="absolute top-[50%] translate-y-[-50%] right-[20px] cursor-pointer block"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                className="fill-[#B3B3B3] hover:fill-[#EE232F]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 512 512"
              >
                <g>
                  <g data-name="Layer 16">
                    <path d="M419.72 419.72 92.26 92.27l-.07-.08a19 19 0 0 0-26.78 27l28.67 28.67a332.64 332.64 0 0 0-88.19 89 34.22 34.22 0 0 0 0 38.38C65.86 364 160.93 416 256 415.35a271.6 271.6 0 0 0 90.46-15.16l46.41 46.41a19 19 0 0 0 26.94-26.79zM256 363.74a107.78 107.78 0 0 1-98.17-152.18l29.95 29.95a69.75 69.75 0 0 0 82.71 82.71l29.95 29.95a107.23 107.23 0 0 1-44.44 9.57zM506.11 236.81C446.14 148 351.07 96 256 96.65a271.6 271.6 0 0 0-90.46 15.16l46 46a107.78 107.78 0 0 1 142.63 142.63l63.74 63.74a332.49 332.49 0 0 0 88.2-89 34.22 34.22 0 0 0 0-38.37z"></path>
                    <path d="M256 186.26a69.91 69.91 0 0 0-14.49 1.52l82.71 82.7A69.74 69.74 0 0 0 256 186.26z"></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                className="fill-[#B3B3B3] hover:fill-[#EE232F]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 488.85 488.85"
              >
                <g>
                  <path d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"></path>
                </g>
              </svg>
            )}
          </span>
        </div>
      </div>
      <div>
        <button type="submit" className="btn-1 btn-2 w-full">
          {isLoading ? <span>Loading...</span> : <span>Login</span>}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
