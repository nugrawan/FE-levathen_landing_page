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
        name: "Pricing ",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Spaces",
        link: "#",
      },
    ],
  },
  {
    title: "Product",
    children: [
      {
        name: "Office Space",
        link: "#",
      },
      {
        name: "Business Lounge",
        link: "#",
      },
      {
        name: "Meeting Room",
        link: "#",
      },
      {
        name: "Virtual Office",
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
        name: "Book A Tour",
        link: "#",
      },
      {
        name: "Blog",
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
  { icon: "./icons/facebook.png" },
  { icon: "./icons/linkidn.png" },
  { icon: "./icons/instagram.png" },
  { icon: "./icons/twitter.png" },
];

export function Footer() {
  return (
    <footer className=" mb-32 hidden md:block">
      <div className="flex justify-between cont border-t pt-16">
        <div>
          <h1 className="text-primary-default text-2xl font-bold">Levathen</h1>
          <p className="text-sm leading-6 text-[#000]/50 text-left max-w-xs mt-4">
            We want to build more than nice, shared office spaces. We want to
            build a community.
          </p>
          <div className="flex gap-5 my-10">
            {icons.map((icon, i) => (
              <img key={i} className="h-5" src={icon.icon} alt="icon" />
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
                    <a href={child.link} className="text-[#000]/50 hover:underline">
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
        <p className="text-[#000]/50 text-sm">
          © 2023 All rights reserved - Levathen
        </p>
      </div>
    </footer>
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
