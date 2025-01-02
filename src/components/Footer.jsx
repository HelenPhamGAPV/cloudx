import * as React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

const socialLinks = [
  {
    imgSrc: facebook,
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: insta,
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: twitter,
    link: "https://twitter.com",
    width: 14,
  },
];

const information = [
  {
    id: 1,
    section: "Contact",
    link: ["Help/FAQ", "partnerwith@cloudx.com", "LinkedIn"],
  },
  {
    id: 2,
    section: "Services",
    link: [
      "Generative AI",
      "Digital Archaeology",
      "Data & Analytics",
      "Backend",
      "MVP Development",
      "Automation & QA",
      "Web Development",
      "Mobile Apps",
      "Web3 Development",
    ],
  },
];

const footer = () => {
  return (
    <footer className="w-full bg-black500">
      <div className="m-auto flex max-w-8xl flex-col justify-center items-center text-white">
        <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* COLUMN-1 */}
          <div className="sm:col-span-6 lg:col-span-6">
            <div className="flex flex-shrink-0 items-center border-right">
              {/* <img src={logo} style={{width: "56px", height: "56px"}} /> */}
              <Link href="/" className="text-3xl font-semibold">
                GAPV Solution
              </Link>
            </div>
            <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
              {" "}
              101 Candido CT
              Manalapan, NJ 07726
              United States
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                    <img
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={items.width}
                      height={2}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {information.map((infor) => (
            <div key={infor.id} className="sm:col-span-2">
              <p className="text-xl font-semibold mb-5">{infor.section}</p>
              <ul>
                {infor.link.map((link, index) => (
                  <li key={index} className="text-l mb-2">
                    <Link
                      href="/"
                      className="text-footerlinks text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2">
            <ul>
              <li key={1} className="mb-5">
                <Link
                  href="/"
                  className="text-xl font-semibold mb-5"
                >
                  About Us
                </Link>
              </li>
              <li key={2} className="mb-5">
                <Link
                  href="/"
                  className="text-xl font-semibold mb-5"
                >
                  Success Cases
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="w-full flex h-[60px] flex-row bg-black300">
          <div className="m-auto flex w-full max-w-6xl flex-row justify-between px-6">
            <h4 className="text-darkgrey text-sm justify-start text-center md:text-start font-normal">
              All rights reserved CloudX © 2023
            </h4>
            <div className="gap-5 mt-5 md:mt-0 justify-end">
              <h4 className="text-darkgrey text-sm font-normal">
                <Link href="/" target="_blank">
                  Privacy Policy
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
