"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = ({ pageTitle }) => {
  const pathname = usePathname();
  const crumbs = pathname?.split("/").filter((crumb) => crumb);
  crumbs.pop();

  return (
    <nav className="mb-[30px]">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse flex-wrap">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[16px] font-bold text-[#262626] hover:text-[#EE232F] capitalize"
          >
            Home
          </Link>
        </li>
        {crumbs?.map((crumb, index) => {
          const linkPath = crumbs.slice(0, index + 1).join("/");
          return (
            <li key={index}>
              {linkPath !== "/" && (
                <>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href={`/${linkPath}`}
                      className="ms-1 text-[16px] font-bold text-[#262626] hover:text-[#EE232F] md:ms-2 capitalize"
                    >
                      {crumb}
                    </Link>
                  </div>
                </>
              )}
            </li>
          );
        })}
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-[16px] font-bold text-gray-500 md:ms-2 capitalize">
              {pageTitle}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
