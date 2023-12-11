import React from "react";

import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";

function HeroSection() {
  return (
    <>
      <Section className="mt-5">
        <SectionExplain className="m-auto md:w-[60%] text-center">
          <SectionTag>CONTACT US</SectionTag>
          <SectionHeading className="text-center">
            Our space is more than a shared office. It is a meeting ground.
          </SectionHeading>
          <SectionDescription className="text-center text-xs md:text-base">
            Find focus and clarity space to do the things you need to do to grow
            your business in New York. Book by the month, daily or by the hour.
          </SectionDescription>
        </SectionExplain>
      </Section>

      <div className="cont mb-32">
        <img src="/images/contact-map.png" alt="hero" />
      </div>
    </>
  );
}

const contacts = [
  {
    title: "Global Locations",
    desc: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    link: "All locations",
    img: "./icons/map.png",
  },
  {
    title: "Call Us Now",
    desc: "(252) 555-0126 (808) 555-0111",
    link: "Learn more",
    img: "./icons/r-arrow.png",
  },
  {
    title: "Costumer Service",
    desc: "Our friendly team is here to help.",
    link: "Email Us",
    img: "./icons/r-arrow.png",
  },
];

function ContactSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-14 m-auto">
        {contacts.map((contact, i) => (
          <Card key={i} className="md:w-[70%]">
            <CardTitle>{contact.title}</CardTitle>
            <CardDesc>{contact.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">{contact.link}</p>
              <img src={contact.img} alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5"/>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CtaSection() {
  return (
    <Section>
      <div className="flex md:flex-row flex-col rounded-3xl md:gap-20 gap-10 bg-[#0190fe11] p-10">
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="./images/contact1.png" alt="CTA" />
        </div>

        <SectionExplain>
          <SectionHeading className="text-2xl">Coworking, Private Offices and More</SectionHeading>
          <SectionDescription className="text-xs md:text-base">
            Your membership at is all-inclusive, providing amenities designed to
            allow you to focus on your business instead of logistics.
          </SectionDescription>
          <div className="flex gap-3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <Button className="px-5 text-[.7em]">Discover Now</Button>
            <Button className="px-5 text-[.7em]" variant="secondary">Book a tour</Button>
          </div>
        </SectionExplain>
      </div>
    </Section>
  );
}

function ClientSection() {
  return (
    <div className="cont text-center mb-32">
      <p className="opacity-60 font-bold mb-5">
        Trusted by top companies and startups around the world
      </p>
      <div>
        <img src="./images/about-company.png" alt="partners" />
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <Section className="flex-col items-start">
      <SectionExplain className="m-auto">
        <SectionHeading className="text-center">
          Take a tour & try a day of coworking for free
        </SectionHeading>
        <SectionDescription className="text-center md:w-[70%]">
          We offer offices for lease by the day, by the week, or by the
          year.Choose from any of our 3000 location Get a free quote!
        </SectionDescription>
      </SectionExplain>
      <div className="md:px-10 w-full">
        <form action="" className="flex gap-10 flex-col text-xs md:text-base">
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
            type="text"
            name="firstName"
            id="fistName"
            placeholder="First Name"
          />
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <div className="flex gap-10">
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <select className="px-8 opacity-60 py-4 w-full border rounded-full focus:outline-primary-default">
              <option className="opacity-50" value="option">Select option  </option>
            </select>
          </div>
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <label className="flex gap-3 text-[.7em] md:text-sm opacity-80">
            <input
              className="accent-[#C0C0C0]"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            By clicking the below button you agree to our Terms of Service.
          </label>
          <Button>Submit</Button>
        </form>
      </div>
    </Section>
  );
}

function ContactUsPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <CtaSection />
      <ClientSection />
      <FormSection />
    </>
  );
}

export default ContactUsPage;
