import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Notification = () => {
  const [openNotificationBox, setOpenNotificationBox] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenNotificationBox(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <button
        onClick={() => setOpenNotificationBox(!openNotificationBox)}
        className="w-[50px] h-[50px] bg-[#A2A1A8]/20 flex items-center justify-center rounded-[3px] hover:text-white hover:bg-[#EE232F]"
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            color="currentColor"
          >
            <path d="M2.53 14.77c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.13-.857-.777-1.57-1.256-2.267c-.627-.924-.689-1.931-.69-3.003C19.525 5.358 16.157 2 12 2S4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267" />
            <path d="M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3" />
          </g>
        </svg>
      </button>
      {openNotificationBox && (
        <div className="absolute right-0 top-[100%] mt-4 flex h-[360px] w-[350px] flex-col rounded-sm border border-[#DDD] bg-white">
          <div className="px-4 py-3">
            <h5 className="text-sm font-semibold text-[#666]">Notification</h5>
          </div>
          <ul className="flex h-auto flex-col overflow-y-auto">
            <li>
              <Link
                className="flex flex-col gap-[10px] border-t border-[#DDD] px-4 py-3 hover:bg-[#F9F9F9]"
                href="/dashboard"
              >
                <p className="text-sm text-[#666]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>

                <p className="text-xs font-medium">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-[10px] border-t border-[#DDD] px-4 py-3 hover:bg-[#F9F9F9]"
                href="/dashboard"
              >
                <p className="text-sm text-[#666]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>

                <p className="text-xs font-medium">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-[10px] border-t border-[#DDD] px-4 py-3 hover:bg-[#F9F9F9]"
                href="/dashboard"
              >
                <p className="text-sm text-[#666]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>

                <p className="text-xs font-medium">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-[10px] border-t border-[#DDD] px-4 py-3 hover:bg-[#F9F9F9]"
                href="/dashboard"
              >
                <p className="text-sm text-[#666]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>

                <p className="text-xs font-medium">12 May, 2025</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col gap-[10px] border-t border-[#DDD] px-4 py-3 hover:bg-[#F9F9F9]"
                href="/dashboard"
              >
                <p className="text-sm text-[#666]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>

                <p className="text-xs font-medium">12 May, 2025</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
