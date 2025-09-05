import type React from "react";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  path: string;
  children: React.ReactNode;
  isActive: boolean;
}

const SideBarLink = ({ children, isActive, path }: SidebarLinkProps) => {
  return (
    <li className="flex items-center justify-between h-[44px] rounded-[10px]">
      <Link
        to={path}
        className={`flex items-center gap-x-4 min-w-[172px] py-[11px] pl-[10px] rounded-[10px] text-[16px] ${isActive ? 'text-[#3F8CFF] bg-[rgba(63_140_255_1)]': '' }`}
      >
        {children}0
      </Link>

      {isActive && (
        <span className="block h-full w-[2px] rounded-[5px] bg-[#3F8CFF]"></span>
      )}
    </li>
  );
};

export default SideBarLink;
