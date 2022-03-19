import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "flowbite";

import Logo from "../../media/favicon.ico";
import avatar from "../../media/avatars/300-1.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Dashnav = () => {

  //navbar
  const [isOpen, setIsOpen] = useState(false);

  const navhandler = () => {
    setIsOpen(!isOpen); //to toggle
  };



  // accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* top menu */}
      <div className="relative text-sm md:text-base">
        {/* Desktop Menus */}
        <div className="bg-slate-200 fixed w-full z-50">
          <div className="flex flex-wrap items-center py-3 md:py-5">
            <div className="w-1/2 md:px-5 flex flex-wrap items-center space-x-4">
              <img src={Logo} alt="LOGO" className="w-8 hidden md:block" />
              <p className="hidden md:block">Merchantplace</p>

              {/* hamburger */}
              <div className=" md:hidden">
                <button
                  onClick={navhandler}
                  className=" p-4 focus:outline-none focus:bg-indigo-700 focus:text-white  menu-button rounded-2xl"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 font-semibold text-2xl "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 font-semibold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />{" "}
                    </svg>
                  )}
                </button>
              </div>

              {/* hamburger ends */}
            </div>

            <div className="w-1/2 px-5 flex  items-center space-x-4 justify-end">
              <div className="flex flex-wrap items-center md:order-2">
                <button
                  type="button"
                  className="flex mr-3 text-sm  md:mr-0 space-x-4 items-center focus:outline-none dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown"
                >
                  <span className="font-regular text-xs md:text-sm ">Adeyemi Oluwasegun</span>
                  <img src={avatar} alt="avatar" className="w-8 rounded-full" />
                </button>

                <div
                  className="hidden z-20 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown"
                >
                  <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul class="py-1" aria-labelledby="dropdown">
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* side menu bar */}

        <div className="flex flex-wrap">
          <div
            className={` backdrop-blur-lg overflow-scroll md:w-96 h-screen md:h-full bg-white/30 mt-6 md:fixed min-h-screen md:translate-x-0 inset-y-0 left-0 top-12 transform fixed -translate-x-full transition duration-300 ease-in-out z-40 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" px-5 flex flex-wrap items-center space-x-4 md:hidden font-medium mt-5">
              <img src={Logo} alt="LOGO" className="w-8" />
              <p className="">The Plaza wears</p>
            </div>

            {/* Accordion nav start */}

<div className="py-3">
<Link to="/dashboard" onClick={navhandler}>
              <Accordion className="shadow-none border-b" >
                <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10">
                  <div className="space-x-8">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                  </div>
                </AccordionSummary>
              </Accordion>
            </Link>

            <Accordion
              className="shadow-none"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold py-0 px-10"
              >
                <div className="space-x-8">
                  <i className="fa-solid fa-cart-flatbed"></i>
                  <span>Orders</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div class="text-sm">
                  <Link to="#" className="block hover:bg-indigo-200 px-20 py-2">
                    {" "}
                    Manual Orders
                  </Link>
                  <Link to="#" className="block hover:bg-indigo-200 px-20 py-2">
                    {" "}
                    Draft
                  </Link>
                  <Link to="#" className="block hover:bg-indigo-200 px-20 py-2">
                    {" "}
                    Abandoned Checkouts
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="shadow-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold  px-10"
              >
                <div className="space-x-8">
                  <i className="fa-solid fa-tag"></i>
                  <span>Products</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="space-y-2 text-sm">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Inventory
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Transfers
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Collections
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Gift Cards
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion className="shadow-none">
              <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10">
                <div className="space-x-8">
                  <i className="fa-solid fa-user"></i>
                  <span>Customers</span>
                </div>
              </AccordionSummary>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="shadow-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
              >
                <div className="space-x-8">
                <i class="fa-solid fa-wallet"></i>
                  <span>Finances</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="text-sm">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Billing
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="shadow-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
              >
                <div className="space-x-8">
                <i class="fa-solid fa-chart-simple"></i>
                <span>Analytics</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="space-y-2 text-sm">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Reports
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Live View
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              className="shadow-none"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
              >
                <div className="space-x-8">
                <i class="fa-solid fa-bullhorn"></i>
                                  <span>Marketing</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="space-y-2 text-sm">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Campaigns
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Automations
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion  className="shadow-none">
              <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 ">
                <div className="space-x-8">
                  <i class="fa-solid fa-percent"></i>
                  <span>Discounts</span>
                </div>
              </AccordionSummary>
            </Accordion>

            <Accordion className="shadow-none">
              <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 ">
                <div className="space-x-8">
                  <i className="fa-solid fa-boxes-stacked"></i>
                  <span>Apps</span>
                </div>
              </AccordionSummary>
            </Accordion>

            <Accordion className="mt-16 shadow-none">
              <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 ">
                <div className="flex justify-between items-center w-full">
                  <div className="">Sales Channel</div>
                  <div>
                    {" "}
                    <i className="fa-solid fa-circle-plus "></i>{" "}
                  </div>
                </div>
              </AccordionSummary>
            </Accordion>

            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              className="shadow-none"
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 "
              >
                <div className="flex justify-between items-center w-full">
                  <div className="space-x-8">
                    <i className="fa-solid fa-store"></i>
                    <span className="">Online Store</span>
                  </div>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </AccordionSummary>
              <AccordionDetails className="">
                <div className="space-y-2 text-sm">
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Themes
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Blog Posts
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Pages
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Navigation
                  </Link>
                  <Link
                    to="#"
                    className="block hover:bg-indigo-200 px-20 py-2.5"
                  >
                    Prefences
                  </Link>
                </div>
              </AccordionDetails>
            </Accordion>


            <Accordion className="mt-16 shadow-none">
              <AccordionSummary className="focus:bg-indigo-700 focus:text-white font-semibold  px-10 ">
                <div className="space-x-8">
                  <i className="fa-solid fa-gear"></i>
                  <span>Settings</span>
                </div>
              </AccordionSummary>
            </Accordion>
</div>

          </div>

          {/* End of side bar */}

          {/* main Contents */}

          <div className="flex-1 bg-slate-100 h-full md:ml-96 z-30">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
