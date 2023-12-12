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
import { SwiperSlide } from "swiper/react";
import { SSwiper } from "../components/swiper";
import { rc } from "../lib/utils";

function HeroSection() {
  return (
    <Section row>
      <SectionExplain>
        <SectionHeading className="md:text-left text-center animate-fade-top animate-duration-500 animate-delay-2000 animate-ease-in-out">
          A creative coworking space in New York
        </SectionHeading>
        <SectionDescription className="md:text-left text-center animate-fade-right animate-duration-500 animate-delay-100 animate-ease-in">
          You can book personal office space across the country by the day, hour
          or month.
        </SectionDescription>
        <div className="rounded-full border border-gray-300 flex justify-between w-5/6 p-2.5 md:mx-0 mx-auto animate-fade-right animate-duration-500 animate-delay-100 animate-ease-in">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full text-sm md:text-base"
          />
          <Button>Submit</Button>
        </div>
      </SectionExplain>
      <div className="animate-fade-left animate-duration-300 animate-delay-300 animate-ease-in">
        <img src="./images/space1.png" alt="hero" />
      </div>
    </Section>
  );
}


const prices = [
  {
    tag: "Pakan Ayam Petelur J42-1",
    price: "Rp.260.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur 7183",
    price: "Rp.270.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur 7183A	",
    price: "Rp.280.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler Suja Samsung Jaya BRO 1 Master",
    price: "Rp.305.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler QL",
    price: "Rp.325.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler Japfa Broiler 1 SP",
    price: "Rp.325.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur Pokphand 324KJ",
    price: "Rp.375.000/sak",
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Ayam Broiler J511",
    price: "Rp.599.000/sak",
    desc: "Tersisa 2/5",
  },
];

function PricingSection() {
  const [plan, setPlan] = React.useState("monthly");

  return (
    <Section className="flex-col">
      <div className="bg-[#C9E8FF] h-14 p-2 mx-auto md:w-fit rounded-full flex items-center animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-in">
        <div
          className={rc(
            plan === "monthly"
              ? "bg-white  flex items-center text-primary-default rounded-full h-full px-4"
              : "px-4",
            "cursor-pointer"
          )}
          onClick={() => setPlan("monthly")}
        >
          <p className={plan === "monthly" ? "font-bold mx-auto" : ""}>
            Monthly
          </p>
        </div>
        <div
          className={rc(
            plan === "annual"
              ? "bg-white  flex items-center text-primary-default rounded-full h-full px-4"
              : "px-4",
            "cursor-pointer"
          )}
          onClick={() => setPlan("annual")}
        >
          <p className={plan === "annual" ? "font-bold mx-auto" : ""}>
            Annual (save 15%)
          </p>
        </div>
      </div>

      {plan === "monthly" ? (
        <div className="grid md:grid-cols-3 p-10 sm:grid-cols-2 grid-cols-1 gap-10">
          {prices.map((price, i) => (
            <Card className="h-fit" key={i}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
              <p className="font-semibold">{price.tag}</p>
              <h3 className="font-bold text-3xl">{price.price}</h3>
              <p className="opacity-60 text-sm">{price.desc}</p>
              <div className="border-t-2"></div>
              <Button className="w-full">Order Now</Button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="cont text-center p-10">
          <h1 className="font-bold text-5xl opacity-50">Annual Plan</h1>
        </div>
      )}
    </Section>
  );
}

const services = [
  {
    title: "Hots Desks",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    image: "./images/home-why1.png",
  },
  {
    title: "Starter Spaces",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    image: "./images/home-why2.png",
  },
  {
    title: "Coworking Spaces",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
    image: "./images/home-why3.png",
  },
];

function ServiceSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionTag className="text-center">Why Serviced Office</SectionTag>
        <SectionHeading className="text-center">
          We've helped thousands of fast-growing startups and teams
        </SectionHeading>
        <SectionDescription className="text-center">
          Grow without restriction. By giving you space that can be changed as
          your business grows. Only pay for the space you use with everything
          you need to be included in one price.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i}>
            <img src={service.image} alt="card-img" />
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Learn more</p>
              <img src="./icons/r-arrow.png" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
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
      <div className="flex md:flex-row flex-col-reverse p-10 md:p-16 bg-[#0190fe11] gap-20 rounded-3xl">
        <SectionExplain className="md:w-[60%]">
          <SectionHeading className="text-xl">
            Stay productive with modern workspace, private office, and coworking
            solutions
          </SectionHeading>
          <SectionDescription className="text-xs md:text-base">
            Workspaces that suit your business. We have professional and
            inspiring work environments to suit businesses of all sizes and
            budget.
          </SectionDescription>
          <Button data-aos="fade-right" data-aos-duration="700" data-aos-delay="300">Get Started</Button>
        </SectionExplain>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="./images/space2.png" alt="cta-img" />
        </div>
      </div>
    </Section>
  );
}

function FeedbackSection() {
  return (
    <Section>
      <div className="flex flex-col items-start bg-[#0190fe11] md:p-16 px-6 py-8 rounded-3xl">
        <SectionExplain className="m-auto">
          <SectionHeading className="text-center text-xl">
            One of our workspace experts will reach out to you based on your
            communication preferences.
          </SectionHeading>
        </SectionExplain>
        <div className="mt-10 md:p-10 md:w-[80%] p-5 m-auto bg-white rounded-xl">
          <div className="space-y-5 mb-5">
            <h3 className="font-bold text-center text-lg">
              We'd love to hear from you
            </h3>
            <p className="text-center md:w-[70%] text-sm md:text-base">
              To book a complimentary private day office or desk, simply
              complete the form below.
            </p>
          </div>
          <form action="" className="flex gap-10 flex-col text-xs md:text-base">
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
              type="text"
              name="firstName"
              id="fistName"
              placeholder="Enter your name"
            />
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
              type="text"
              name="message"
              id="message"
              placeholder="Enter your message"
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function ClientSection() {
  return (
    <div className="cont text-center px-5 md:px-20 mb-20">
      <p className="opacity-60 font-bold mb-5">
        Trusted by top companies and startups around the world
      </p>
      <div>
        <img src="./images/about-company.png" alt="partners" />
      </div>
    </div>
  );
}

function Products() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <ServiceSection />
      <CtaSection />
      <FeedbackSection />
      <ClientSection />
    </>
  );
}

export default Products;
