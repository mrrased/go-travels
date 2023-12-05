/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { TiInfoLarge } from "react-icons/ti";
import { SiPowerpages } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import "../../../customAntd.module.css";

const MobileNav = () => {
  const { setOpen, open } = useAuth();
  const [isChecked, setIsChecked] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer
        title="Go Travels"
        placement="right"
        onClose={onClose}
        open={open}
        width={200}
      >
        <div className="space-y-3">
          <h5
            onClick={() => setOpen(false)}
            className="flex items-center justify-start space-x-2"
          >
            <span>
              <IoMdHome className="text-pink-blue-50" />
            </span>
            <Link to="/">Home</Link>
          </h5>
          <h5
            onClick={() => setOpen(false)}
            className="flex items-center justify-start space-x-2"
          >
            <span>
              <TiInfoLarge className="text-pink-blue-50" />
            </span>
            <Link to="/about">About</Link>
          </h5>
          <h5 className="flex items-center justify-start space-x-2">
            <div className="relative w-full overflow-hidden ">
              <input
                type="checkbox"
                className="absolute top-0 inset-x-0 w-full  z-10 cursor-pointer opacity-0 peer"
                onClick={() => {
                  setIsChecked((prevValue) => !prevValue);
                }}
              />

              <div className="w-full pr-8 md:pl-5 flex items-center transition-all duration-500">
                <SiPowerpages className="mr-2 text-pink-blue-50" />
                <h1 className="">Pages </h1>
              </div>

              <div className="absolute top-0.5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {/* <div className="bg-white peer-checked:text-smooth-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-64 peer-checked:bg-pink-blue-50"></div> */}
              <div
                className={`${
                  isChecked
                    ? "max-h-64 overflow-hidden transition-all duration-500 text-smooth-gray-200 bg-pink-blue-50"
                    : "max-h-0 overflow-hidden transition-all duration-500"
                }`}
              >
                <div className="p-2 pl-8">
                  <Link
                    to="/booking-list"
                    onClick={() => {
                      setIsChecked(false);
                      setOpen(false);
                    }}
                  >
                    Booking List
                  </Link>
                </div>
              </div>
            </div>
          </h5>
          <h5 className="flex items-center justify-start space-x-2">
            <span>
              <AiFillEdit className="text-pink-blue-50" />
            </span>
            <Link to="/">Blog</Link>
          </h5>
          <h5
            onClick={() => setOpen(false)}
            className="flex items-center justify-start space-x-2"
          >
            <span>
              <MdContactPage className="text-pink-blue-50" />
            </span>
            <Link to="/contact">Contact</Link>
          </h5>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
