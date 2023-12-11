import React from "react";
import { WhyServicesSection } from "./index";

import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";
import { rc } from "../lib/utils";

function HeroPage() {
  return (
    <Section className="flex-col mb-10">
      <SectionExplain className="flex justify-between items-center md:flex-row flex-col">
        {/* <SectionHeading className="md:w-[40%] md:text-left text-center text-2xl animate-fade-right animate-duration-[500ms] animate-delay-300 animate-ease-in">
    
        </SectionHeading> */}
        <SectionDescription className="text-white leading-7 mx-0 text-xs md:text-lg opacity-80 font-thin md:text-left text-center animate-fade-left animate-duration-[500ms] animate-delay-500 animate-ease-in">

        </SectionDescription>
      </SectionExplain>

      <div className="animate-fade-up animate-duration-[300ms] animate-delay-100 animate-ease-in">
        <img src="./images/rumput.jpg" alt="" />
      </div>
    </Section>
  );
}

const datas = [
  {
    dataInt: "3000+",
    title: "Happy Members",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
  {
    dataInt: "12+",
    title: "Locations across the globe",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
  {
    dataInt: "10+",
    title: "Years Of Service",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
];

function DataSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionHeading className="text-xl md:text-2xl">
          Our space is more than a shared office. It is a meeting ground for
          creatives and teams
        </SectionHeading>
        <SectionDescription className="mx-0 text-xs md:text-base">
          Find focus and clarity space to do the things you need to do to grow
          your business in New York. Book by the month, daily or by the hour.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-8 border-t-2 border-gray-300 pt-10">
        {datas.map((data, i) => (
          <div key={i} className="space-y-3">
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="text-3xl font-bold text-primary-default">{data.dataInt}</p>
            <CardTitle className="text-lg">{data.title}</CardTitle>
            <CardDesc>{data.desc}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

const profiles = [
  {
    img: "./images/about-team1.png",
    name: "John Carter",
    position: "CEO & Founder",
  },
  {
    img: "./images/about-team2.png",
    name: "Sophie Moore",
    position: "CTO & Founder",
  },
  {
    img: "./images/about-team4.png",
    name: "Matt Cannon",
    position: "VP Of Finance",
  },
  {
    img: "./images/about-team3.png",
    name: "Andy Smith",
    position: "VP Of Design",
  },
  {
    img: "./images/about-team5.png",
    name: "Sam Houston",
    position: "VP Of Products",
  },
];

function LeadershipSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-[60%] w-[90%] mx-auto">
        <SectionTag className="text-center text-xs md:text-base">OUR LEADERSHIP TEAM</SectionTag>
        <SectionHeading className="text-center text-2xl ">
          Meet the great team behind Levathen
        </SectionHeading>
        <SectionDescription className="text-center text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sapien
          vestibulum quam massa viverra blandit sit auctor vestibulum semper
          viverra aliquet sit.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10 md:gap-20">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className={rc(
              "flex flex-col justify-center text-center space-y-3",
              "sm:col-span-1",
              i === 4 && "col-span-2"
            )}
          >
            <img
              data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100"
              src={profile.img}
              alt="leader"
              className="max-w-[120px] sm:max-w-[170px] mx-auto"
            />
            <CardTitle>{profile.name}</CardTitle>
            <CardDesc>{profile.position}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

function JoinTeamSection() {
  return (
    <Section row>
      <div className="bg-[#0190fe11] flex md:flex-row flex-col md:p-20 p-10 items-baseline rounded-3xl">
        <SectionHeading className="md:w-[40%] mx-0 text-xl md:text-4xl">
          Join our team
        </SectionHeading>
        <SectionExplain className="md:w-[60%] w-full md:mt-0 mt-12">
          <SectionDescription className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget
            eu elementum velit nunc tortor pulvinar ornare at mi sed nisl in
            proin sollicitudin ultricies aliquet malesuada aliquet.
          </SectionDescription>
          <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500" className="inline-flex gap-2 cursor-pointer group items-center text-xs md:text-base">
            <p className="text-primary-default font-bold">Explore Jobs</p>
            <img src="./icons/r-arrow.png" alt="icon" className="transition-transform group-hover:translate-x-2 w-5 h-5" />
          </div>
        </SectionExplain>
      </div>
    </Section>
  );
}

function ClientSection() {
  return (
    <div className="cont text-center p-5 md:p-10 md:px-20 mb-20">
      <p className="opacity-60 font-bold mb-5">
        Trusted by top companies and startups around the world
      </p>
      <div>
        <img src="./images/about-company.png" alt="partners" />
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <Section className="">
      <div className="md:p-20 p-10 bg-[#0190fe11] rounded-3xl gap-20 flex md:flex-row flex-col-reverse">
        <SectionExplain className="md:w-[60%]">
          <SectionHeading className="text-xl">
            We have all the amenities you need to grow your business starting on
            day one
          </SectionHeading>
          <SectionDescription className="text-xs md:text-base">
            We strive to create a professional and welcoming environment in
            order to foster collaboration, creativity, and productivity.
          </SectionDescription>
          <Button>Get Started</Button>
        </SectionExplain>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="./images/space2.png" alt="cta-img" />
        </div>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain>
        <SectionHeading className="text-center">
          Modern workspaces that fits your needs
        </SectionHeading>
        <SectionDescription className="text-center">
          No subscriptions or lousy monthly fees. Only pay for the space and
          time you need
        </SectionDescription>
      </SectionExplain>

      <div className="w-full">
        <div className="rounded-full border md:w-[40%] border-gray-300 flex justify-between p-2 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button>Submit</Button>
        </div>

        <p className="text-center mt-4 text-sm md:text-lg italic opacity-90">
          No worries, we don’t do spam!
        </p>
      </div>
    </Section>
  );
}

function AboutPage() {
  return (
    <>
      <div className="bg-primary-default text-white pb-1 mb-32">
        <HeroPage />
      </div>
      <DataSection />
      <WhyServicesSection />
      <LeadershipSection />
      <JoinTeamSection />
      <ClientSection />
      <CtaSection />
      <SubscribeSection />
    </>
  );
}

export default AboutPage;
