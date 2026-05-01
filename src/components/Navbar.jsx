import { ArrowRightToSquare } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <div className="flex flex-col lg:flex-row gap-4 text-[#005BC5] font-medium">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/courses">Courses</Link>
      </li>
      <li>
        <Link href="/myprofile">My Profile</Link>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="text-[#005BC5] font-bold text-xl">SkillSphere</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5 ">
          <Button variant="none" className="text-[16px]" color="primary">
            <ArrowRightToSquare className="text-lg" />
            Login
          </Button>
          <Button className="bg-[#005BC5] text-[16px]">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
