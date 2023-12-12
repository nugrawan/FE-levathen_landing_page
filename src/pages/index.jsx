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
    <div className="bg-[url(/images/chicken.jpg)] bg-center bg-cover bg-no-repeat md:bg-left lg:bg-cover py-10 md:p-20 lg:p-32 xl:p-40 text-white mb-10 md:mb-28">
      <Section>
        <SectionExplain className="flex flex-col md:gap-4 gap-0 w-[100%] lg:w-[60%]">
          <SectionHeading className="animate-fade-up animate-duration-[300ms] animate-delay-300 animate-ease-in">
            Siap Membantu Para Peternak Ayam Hingga Menghasilkan Profit Yang Maksimal
          </SectionHeading>
          <SectionDescription className="animate-fade-up animate-duration-[500ms] text-white animate-delay-500 animate-ease-in">
            Kami bekerja sama dengan para peternak ayam petelur dan ayam pedaging, sehingga menghasilkan profit yang lebih maksimal dengan berbagai layanan terbaik kami!
          </SectionDescription>

          <div className="animate-fade-up animate-duration-[700ms] animate-delay-700 animate-ease-in-out">
            <Button>Layanan Kami</Button>
          </div>
        </SectionExplain>

      </Section>
    </div>
  );
}

const services = [
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Starter Spaces",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Coworking Spaces",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Virtual Office",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Meeting Room",
    desc: "Ideal for members who need a productive space to work.",
  },
];

function OurServicesSection() {
  return (
    <Section className="mt-4 md:items-start" col>
      <SectionExplain className="md:w-[80%]">
        <SectionTag className="md:text-left text-center" >
          Layanan
        </SectionTag>
        <SectionHeading className="md:text-left text-center" >
          Temukan layanan yang sesuai dengan kebutuhan ternak anda
        </SectionHeading>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i} active={i === 1} >
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Learn more</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const locations = [
  {
    name: "Sulawesi",
  },
  {
    name: "Jawa",
  },
  {
    name: "Sumatra",
  },
];

function OurOfficeSection() {
  return (
    <Section className="mt-4 flex gap-x-28" row>
      <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="md:w-1/2 w-full">
        <img src="/images/home2.png" alt="hero" />
      </div>
      <SectionExplain className="md:w-1/2 w-full">
        <SectionHeading>
          Kami berpartner dengan para peternak dari berbagai provinsi
        </SectionHeading>
        <SectionDescription>
          As we headstart into this new normal, we are ensuring your workspace
          experience remains exceptional.
        </SectionDescription>

        <div className="space-y-5 py-10" data-aos-offset="0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          {locations.map((location, i) => (
            <div key={i} className="flex items-center gap-5">
              <img className="w-10" src="/icons/map.png" alt="icon" />
              <p className="font-bold text-lg text-[#2E3135]">
                {location.name}
              </p>
            </div>
          ))}
        </div>

        <Button>Lihat lokasi</Button>
      </SectionExplain>
    </Section>
  );
}

function SectionThree() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-5/6">
        <SectionHeading className="text-center text-xl w-3/4 mx-auto">
          Berlangganan untuk mendapatkan update terbaru dari kami
        </SectionHeading>
      </SectionExplain>

      <div className="">
        <div className="rounded-full border border-gray-300 flex justify-between max-w-xl p-2.5 mx-auto ">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button>Berlangganan</Button>
        </div>
      </div>
    </Section>
  );
}

function MainPage() {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <OurOfficeSection />
      <SectionThree />
    </>
  );
}

export { MainPage };
