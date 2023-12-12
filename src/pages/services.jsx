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

const whyServiced = [
  {
    title: "Dr.Jeje",
    image: "/images/doctors/doctor1.jpg",
    desc: "Jl-Senopati.No/32, Kab Baru",
  },
  {
    title: "Dr.Tirta",
    image: "/images/doctors/doctor2.jpg",
    desc: "Jl-Senopati.No/32, Kab Baru",
  },
  {
    title: "Dr.Boyke",
    image: "/images/doctors/doctor3.jpg",
    desc: "Jl-Senopati.No/32, Kab Baru",
  },
  {
    title: "Dr.Riri",
    image: "/images/doctors/doctor4.jpg",
    desc: "Jl-Senopati.No/32, Kab Baru",
  },
]

function WhyServicesSection() {
  return (
    <Section className="mt-20 flex flex-col">
      <SectionExplain className="md:w-2/3 w-full">
        <SectionTag className="text-center">Layanan Kami</SectionTag>
        <SectionHeading className="text-center">
          Layanan terbaik dari partner professional kami
        </SectionHeading>
        <SectionDescription className="text-center">
          Temukan tenaga professional yang cocok dengan kebutuhan bisnis anda
        </SectionDescription>
      </SectionExplain>

      <div className="mt-10">
        <SectionHeading>Dokter Unggulan</SectionHeading>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10 gap-5">
          {whyServiced.map((item, i) => (
            <a href="#">
              <Card data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" key={i}>
                <img src={item.image} alt="Profile" className="rounded-lg" />
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.desc}</CardDesc>
                <div className="inline-flex gap-2 cursor-pointer group items-center">
                  <p className="text-primary-default font-bold">Rp.599.000/Bln</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SectionTwo() {
  return (
    <Section className="mt-4">
      <div className="bg-primary-default p-5 md:p-20 w-full rounded-3xl flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="flex flex-col gap-6 md:w-3/4 md:mt-0 mt-4">
          <SectionTag className="text-white">Costumer Service</SectionTag>
          <SectionHeading className="text-xl mr-5 text-white">
            Kami selalu siap mendengarkan masalah anda
          </SectionHeading>
          <Button variant="secondary" className="w-fit mt-5">Hubungi</Button>
        </div>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/home3.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

const questions = [
  {
    text: "What are the benefits of joining the Levathen network?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "What should I expect from the screening process?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "Is Telephone service available?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/plus.png",
  },
  {
    text: "Is the money refundable if I am unable to register?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/min.png",
  },
];

function FAQSection() {
  const [active, setActive] = React.useState(0);

  return (
    <Section className="flex-col text-xs md:text-lg">
      <SectionExplain className="md:w-[80%] mb-10 mx-auto">
        <SectionHeading className="text-center">
          Frequently asked questions about coworking
        </SectionHeading>
        <SectionDescription className="text-center md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo
          at sit mi sed gravida et imperdiet sagittis euismod tortor fringilla
          amet.
        </SectionDescription>
      </SectionExplain>
      <div className="space-y-5">
        {questions.map((faq, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <div className="w-[80%]">
                <CardTitle>{faq.text}</CardTitle>
                {i === active && (
                  <CardDesc className="opacity-80">{faq.desc}</CardDesc>
                )}
              </div>
              <button onClick={() => setActive(i)}>
                <img
                  src={i === active ? "/icons/min.png" : "/icons/plus.png"}
                  alt="icon"
                  className="w-7 h-7 hover:p-0.5"
                />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section className="mt-4" row>
      <div className="bg-[#F0F6FF] p-10 rounded-3xl flex md:flex-row flex-col-reverse md:gap-20 gap-12 items-center">
        <div className="flex flex-col gap-8 md:w-[80%]">
          <SectionHeading>
            Confused about which plan would be most suitable for me?
          </SectionHeading>
          <Button className="w-fit" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">Contact us</Button>
        </div>
        <div data-aos-offset="0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
          <img src="/images/pricing1.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-[80%]">
        <SectionHeading className="text-center">
          We enable people to work where they want, when they want and how they
          want
        </SectionHeading>
        <SectionDescription className="text-center md:w-[60%]">
          We offer offices for lease by the day, by the week, or by the year.
          Choose from any of our 3000 locations. Get a free quote!
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

        <p className="text-center mt-4 text-sm md:text-base italic opacity-50">
          No worries, we don’t do spam!
        </p>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <>
      <WhyServicesSection />
      <SectionTwo />
      <FAQSection />
      <ContactSection />
      <SubscribeSection />
    </>
  );
}

export default Services;
