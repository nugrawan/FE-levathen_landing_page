import React from "react";

const footItems = [
  {
    title: "About",
    children: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Founders",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
    ],
  },
  {
    title: "Products",
    children: [
      {
        name: "All Products",
        link: "#",
      },
      {
        name: "Best Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
      {
        name: "Favorited services",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    children: [
      {
        name: "Help Desk",
        link: "#",
      },
      {
        name: "Admin",
        link: "#",
      },
      {
        name: "Social Media",
        link: "#",
      },
      {
        name: "Forum",
        link: "#",
      },
    ],
  },
];

const icons = [
  { icon: "./icons/facebook.svg" },
  { icon: "./icons/linkedin.svg" },
  { icon: "./icons/instagram.svg" },
  { icon: "./icons/twitter.svg" },
  { icon: "./icons/envelope.svg" },
];

export function Footer() {
  return (
    <footer className=" mt-32 hidden md:block bg-primary-default text-white m-5 rounded-lg">
      <div className="flex justify-between cont border-t pt-16">
        <div>
          <h1 className="text-2xl font-bold">Levathen</h1>
          <p className="text-sm leading-6 text-left max-w-xs mt-4">
            Kami ingin menjadikan indonesia sebagai produsen ternak dengan kualitas terbaik
          </p>
          <div className="flex gap-5 text-white my-10">
            {icons.map((icon, i) => (
              <a href="#">
                <img key={i} className="h-5 hover:-translate-y-1" src={icon.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20 lg:gap-48 text-sm">
          {footItems.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold text-xl">{item.title}</h4>
              <ul className="flex flex-col gap-4 mt-6">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <a href={child.link} className="hover:underline">
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 cont">
        <p className="opacity-80 text-sm p-5">
          © 2023 All rights reserved - Levathen
        </p>
      </div>
    </footer >
  );
}

export function FooterMobile() {
  return (
    <footer className=" pt-16 mb-32 cont md:hidden block">
      <div className="flex flex-col items-center border-b py-5">
        <h1 className="text-2xl font-bold flex gap-2 text-primary-default"><img src="./logo-filled.svg" alt="logo" className="md:hidden block w-7" />Levathen</h1>
        <ul className="flex flex-col gap-4 mt-12 text-center">
          <a href="/about" className="text-[#000]/50">
            About Us
          </a>
          <a href="/pricing" className="text-[#000]/50">
            Pricing
          </a>
          <a href="/office" className="text-[#000]/50">
            Offices
          </a>
          <a href="/spaces" className="text-[#000]/50">
            Spaces
          </a>
          <a href="/contact-us" className="text-[#000]/50">
            Contact
          </a>
        </ul>
        <div className="flex gap-5 mt-5">
          {icons.map((icon, i) => (
            <img key={i} className="h-5" src={icon.icon} alt="icon" />
          ))}
        </div>
      </div>

      <div className="mt-6 cont">
        <p className="text-[#000]/50 text-sm text-center">
          © 2023 All rights reserved - Levathen
        </p>

        <div className="flex gap-8 justify-center">
          <p className="text-[#000]/50 text-sm text-center mt-10">
            Term of Service
          </p>
          <p className="text-[#000]/50 text-sm text-center mt-10">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
