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

const reviews = [
  {
    user: "Del Gibbs",
    desc: "Levathen is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations",
    position: "VP, Globee Softech",
    img: "./images/home-rev1.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
  {
    user: "Britanny",
    desc: "Quisque consectetur vulputate odio, non dictum metus porttitor molestie. Duis pharetra suscipit dolor, quis euismod velit fringilla sed.",
    position: "Co-Founder & CTO - Payfi",
    img: "./images/home-rev2.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
  {
    user: "Randal Robertson",
    desc: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
    position: "Project lead at Zoole",
    img: "./images/home-rev3.png",
    rating: "⭐ ⭐ ⭐ ⭐",
  },
];

function ReviewsSection() {
  const sliderRef = React.useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  return (
    <div className="mb-32">
      <Section className="mb-0">
        <div className="gap-10">
          <SectionExplain>
            <SectionTag>REVIEWS</SectionTag>
            <SectionHeading>What Our Members Say</SectionHeading>
          </SectionExplain>
        </div>
        <div className="inline-flex gap-10" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200">
          <img
            className="w-10 cursor-pointer md:block hidden hover:-translate-x-1 transition-all"
            src="./icons/L-arrow.png"
            alt="btn-prev"
            onClick={handlePrev}
          />
          <img
            className="w-10 cursor-pointer md:block hidden hover:translate-x-1 transition-all"
            src="./icons/RB-arrow.png"
            alt="btn-next"
            onClick={handleNext}
          />
        </div>
      </Section>

      <SSwiper refs={sliderRef} initialSlide={1}>
        {reviews.map((rev, i) => (
          <SwiperSlide
            data-aos="fade-left" data-aos-duration="700" data-aos-delay="200"
            key={i}
            className={rc(
              "max-w-md px-8 space-y-5 rounded-2xl h-64 shadow-md"
            )}
          >
            <h2>{rev.rating}</h2>
            <CardDesc>{rev.desc}</CardDesc>
            <div className="flex gap-3">
              <div className="rounded-full">
                <img className="w-10" src={rev.img} alt="user-img" />
              </div>
              <div>
                <CardTitle>{rev.user}</CardTitle>
                <CardDesc>{rev.position}</CardDesc>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SSwiper>
    </div>
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

function SpacesPage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CtaSection />
      <ReviewsSection />
      <FeedbackSection />
      <ClientSection />
    </>
  );
}

export default SpacesPage;
