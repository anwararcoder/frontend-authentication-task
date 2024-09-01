import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import UseImage from "./../../../public/user.png";
import EditModal from "./EditModal";

const ProfileInfo = ({ data }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const editModalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (editModalRef.current && !editModalRef.current.contains(event.target)) {
        setOpenEditModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-[30px]">
        <div className=" inline-flex items-center gap-[15px]">
          <Image
            className="rounded-[10px]"
            width={100}
            height={100}
            src={UseImage}
            alt={UseImage}
          />
          <div>
            <h3 className="font-bold text-[24px] capitalize mb-[15px]">
              Mariam Aly
            </h3>
            <ul className="flex flex-col gap-[5px]">
              <li className="text-[16px] font-semibold flex items-center gap-[8px]">
                <svg
                  className="fill-current"
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
                    <path d="M8.308 21h7.384c3.71 0 4.375-1.45 4.569-3.213l.692-7.2c.25-2.196-.397-3.987-4.338-3.987h-9.23c-3.941 0-4.587 1.791-4.338 3.987l.692 7.2C3.933 19.55 4.598 21 8.308 21m0-14.4v-.72c0-1.593 0-2.88 2.954-2.88h1.476c2.954 0 2.954 1.287 2.954 2.88v.72" />
                    <path d="M9.812 13.331A15.26 15.26 0 0 1 3.234 11m11 2.331A15.26 15.26 0 0 0 20.812 11M14 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  </g>
                </svg>
                UX/UI DESIGNER
              </li>
              <li className="text-[16px] font-semibold flex items-center gap-[8px]">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect width="18.5" height="17" x="2.682" y="3.5" rx="4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13"
                    />
                  </g>
                </svg>
                mariam@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className="btn-1 btn-2"
            onClick={() => setOpenEditModal(!openEditModal)}
          >
            <svg
              className="fill-current relative z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"
              />
            </svg>
            <span>Edit Profile</span>
          </button>
        </div>
      </div>
      {openEditModal && <EditModal editModalRef={editModalRef} />}
    </>
  );
};

export default ProfileInfo;
