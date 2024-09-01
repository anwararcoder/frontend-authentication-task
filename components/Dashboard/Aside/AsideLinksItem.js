import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AsideLinksItem = ({ link, openAside, setOpenAside }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSubMenuActive = link.subMenu?.some(
    (subLink) => pathname === subLink.href
  );
  const isActivePage = pathname === link.href || isSubMenuActive;

  const toggleSubMenu = (event) => {
    event.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeAside = () => {
    if (link.subMenu) {
      return;
    } else {
      setOpenAside(!openAside);
    }
  };

  return (
    <li onClick={closeAside}>
      <Link
        className={`group relative capitalize flex items-center gap-[20px] pl-[50px] pr-[30px] py-[15px] rounded-r-full font-[600] text-[16px] border-l-4 border-transparent hover:border-[#EE232F] hover:bg-[#F9EAEB] hover:text-[#EE232F] ${
          isActivePage ? "bg-[#F9EAEB] text-[#EE232F] border-l-[#EE232F]" : ""
        }`}
        href={link.subMenu ? "#" : link.href}
        onClick={link.subMenu ? toggleSubMenu : null}
      >
        <i>{link.svg}</i>
        {link.name}
        {link.subMenu && (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-transform duration-300 ease-in-out ${
              isSubMenuOpen ? "rotate-180" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            ></path>
          </svg>
        )}
      </Link>
      {link.subMenu && (
        <div
          className={`transform overflow-hidden transition-max-height duration-300 ease-in-out ${
            isSubMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="mt-[10px] flex flex-col gap-[15px]">
            {link.subMenu.map((subLink, subIndex) => (
              <li key={subIndex} onClick={() => setOpenAside(!openAside)}>
                <Link
                  className={`group relative capitalize flex items-center gap-[10px] rounded-md pl-[110px] pr-[15px] font-[600] text-[16px] duration-300 ease-in-out focus:text-[#7B7B7B] hover:text-[#7B7B7B] ${
                    pathname === subLink.href
                      ? "text-[#7B7B7B]"
                      : "text-[#262626]"
                  }`}
                  href={subLink.href}
                >
                  {subLink.svg}
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default AsideLinksItem;
