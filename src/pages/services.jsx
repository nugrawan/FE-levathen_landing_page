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
        <SectionHeading className='text-center'>Dokter Unggulan</SectionHeading>
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

      <div className="mt-10">
        <SectionHeading className='text-center'>Agen Terbaik</SectionHeading>
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

function Services() {
  return (
    <>
      <WhyServicesSection />
      <SectionTwo />
    </>
  );
}

export default Services;
