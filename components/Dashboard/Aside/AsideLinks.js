import React, { Fragment } from "react";
import AsideLinksItem from "./AsideLinksItem";

const AsideLinks = ({ openAside, setOpenAside }) => {
  const menuLinks = [
    {
      name: "Dashboard",
      svg: (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zm12-2h6a2 2 0 0 1 2 2v5h-8zm0 11h8v5a2 2 0 0 1-2 2h-6z"
          />
        </svg>
      ),
      href: "/dashboard",
    },
    {
      name: "Employees",
      svg: (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7"
          />
          <path
            fill="currentColor"
            d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7m3.49 10.74a20.6 20.6 0 0 0-13 2a1.77 1.77 0 0 0-.91 1.6v3.56a1 1 0 0 0 2 0v-3.43a18.92 18.92 0 0 1 12-1.68Z"
          />
          <path
            fill="currentColor"
            d="M33 22h-6.7v-1.48a1 1 0 0 0-2 0V22H17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1m-1 10H18v-8h6.3v.41a1 1 0 0 0 2 0V24H32Z"
          />
          <path
            fill="currentColor"
            d="M21.81 27.42h5.96v1.4h-5.96zM10.84 12.24a18 18 0 0 0-7.95 2A1.67 1.67 0 0 0 2 15.71v3.1a1 1 0 0 0 2 0v-2.9a16 16 0 0 1 7.58-1.67a7.3 7.3 0 0 1-.74-2m22.27 1.99a17.8 17.8 0 0 0-7.12-2a7.5 7.5 0 0 1-.73 2A15.9 15.9 0 0 1 32 15.91v2.9a1 1 0 1 0 2 0v-3.1a1.67 1.67 0 0 0-.89-1.48m-22.45-3.62v-.67a3.07 3.07 0 0 1 .54-6.11a3.15 3.15 0 0 1 2.2.89a8.2 8.2 0 0 1 1.7-1.08a5.13 5.13 0 0 0-9 3.27a5.1 5.1 0 0 0 4.7 5a7.4 7.4 0 0 1-.14-1.3m14.11-8.78a5.17 5.17 0 0 0-3.69 1.55a8 8 0 0 1 1.9 1a3.14 3.14 0 0 1 4.93 2.52a3.09 3.09 0 0 1-1.79 2.77a7 7 0 0 1 .06.93a8 8 0 0 1-.1 1.2a5.1 5.1 0 0 0 3.83-4.9a5.12 5.12 0 0 0-5.14-5.07"
          />
        </svg>
      ),
      href: "/dashboard/employees",
      subMenu: [
        {
          svg: (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"
                color="currentColor"
              />
            </svg>
          ),
          name: "Profile",
          href: "/dashboard/employees/profile",
        },
        {
          svg: (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4" />
                <path d="m9 14.714l1.689 1.689a.64.64 0 0 0 .908 0L15 13" />
              </g>
            </svg>
          ),
          name: "Attendance",
          href: "/dashboard/employees/attendance",
        },
        {
          svg: (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 28 28"
            >
              <path
                fill="currentColor"
                d="M4 5.25A3.25 3.25 0 0 1 7.25 2h13.5A3.25 3.25 0 0 1 24 5.25v12.129q-.181.12-.341.28L22.5 18.818V5.25a1.75 1.75 0 0 0-1.75-1.75H7.25A1.75 1.75 0 0 0 5.5 5.25v17.5c0 .966.784 1.75 1.75 1.75h8.068l1.5 1.5H7.25A3.25 3.25 0 0 1 4 22.75zm6.5 3.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-1.25 6.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M12.75 8a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM12 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 12 14m.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm13.03 1.28l-6 6a.75.75 0 0 1-1.06 0l-2.998-2.998a.75.75 0 0 1 1.06-1.06l2.468 2.467l5.47-5.47a.75.75 0 1 1 1.06 1.061"
              />
            </svg>
          ),
          name: "Tasks",
          href: "/dashboard/employees/tasks",
        },
      ],
    },
    {
      name: "payroll",
      svg: (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
            <path d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5" />
          </g>
        </svg>
      ),
      href: "/dashboard/payroll",
    },
    {
      name: "Holidays",
      svg: (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7"
          />
          <path
            fill="currentColor"
            d="M18.42 16.31a5.7 5.7 0 1 1 5.76-5.7a5.74 5.74 0 0 1-5.76 5.7m0-9.4a3.7 3.7 0 1 0 3.76 3.7a3.74 3.74 0 0 0-3.76-3.7m3.49 10.74a20.6 20.6 0 0 0-13 2a1.77 1.77 0 0 0-.91 1.6v3.56a1 1 0 0 0 2 0v-3.43a18.92 18.92 0 0 1 12-1.68Z"
          />
          <path
            fill="currentColor"
            d="M33 22h-6.7v-1.48a1 1 0 0 0-2 0V22H17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1m-1 10H18v-8h6.3v.41a1 1 0 0 0 2 0V24H32Z"
          />
          <path
            fill="currentColor"
            d="M21.81 27.42h5.96v1.4h-5.96zM10.84 12.24a18 18 0 0 0-7.95 2A1.67 1.67 0 0 0 2 15.71v3.1a1 1 0 0 0 2 0v-2.9a16 16 0 0 1 7.58-1.67a7.3 7.3 0 0 1-.74-2m22.27 1.99a17.8 17.8 0 0 0-7.12-2a7.5 7.5 0 0 1-.73 2A15.9 15.9 0 0 1 32 15.91v2.9a1 1 0 1 0 2 0v-3.1a1.67 1.67 0 0 0-.89-1.48m-22.45-3.62v-.67a3.07 3.07 0 0 1 .54-6.11a3.15 3.15 0 0 1 2.2.89a8.2 8.2 0 0 1 1.7-1.08a5.13 5.13 0 0 0-9 3.27a5.1 5.1 0 0 0 4.7 5a7.4 7.4 0 0 1-.14-1.3m14.11-8.78a5.17 5.17 0 0 0-3.69 1.55a8 8 0 0 1 1.9 1a3.14 3.14 0 0 1 4.93 2.52a3.09 3.09 0 0 1-1.79 2.77a7 7 0 0 1 .06.93a8 8 0 0 1-.1 1.2a5.1 5.1 0 0 0 3.83-4.9a5.12 5.12 0 0 0-5.14-5.07"
          />
        </svg>
      ),
      href: "/dashboard/holidays",
      subMenu: [
        {
          svg: (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="M29.29 34H6.71A1.7 1.7 0 0 1 5 32.31V6.69A1.75 1.75 0 0 1 7 5h2v2H7v25h22V7h-2V5h2.25A1.7 1.7 0 0 1 31 6.69v25.62A1.7 1.7 0 0 1 29.29 34"
                className="clr-i-outline clr-i-outline-path-1"
              />
              <path
                fill="currentColor"
                d="M16.66 25.76L11.3 20.4a1 1 0 0 1 1.42-1.4l3.94 3.94l8.64-8.64a1 1 0 0 1 1.41 1.41Z"
                className="clr-i-outline clr-i-outline-path-2"
              />
              <path
                fill="currentColor"
                d="M26 11H10V7.33A2.34 2.34 0 0 1 12.33 5h1.79a4 4 0 0 1 7.75 0h1.79A2.34 2.34 0 0 1 26 7.33ZM12 9h12V7.33a.33.33 0 0 0-.33-.33H20V6a2 2 0 0 0-4 0v1h-3.67a.33.33 0 0 0-.33.33Z"
                className="clr-i-outline clr-i-outline-path-3"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          ),
          name: "holidays Test",
          href: "/dashboard/holidays/test",
        },
      ],
    },
    {
      name: "advanced payment",
      svg: (
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M13.5 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25zM4.75 5A1.75 1.75 0 0 0 3 6.75V8h14V6.75A1.75 1.75 0 0 0 15.25 5zM17 9H3v4.25c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 13.25z"
          />
        </svg>
      ),
      href: "/dashboard/advancedPayment",
    },
  ];

  return (
    <ul className="mb-6 flex flex-col gap-[10px]">
      {menuLinks.map((item, index) => (
        <Fragment key={index}>
          <AsideLinksItem
            openAside={openAside}
            setOpenAside={setOpenAside}
            link={item}
          />
        </Fragment>
      ))}
    </ul>
  );
};

export default AsideLinks;
