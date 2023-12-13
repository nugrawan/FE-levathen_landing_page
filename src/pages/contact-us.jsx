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
    <div className="bg-primary-default text-white pt-10 mb-20">
      <Section>
        <SectionExplain className="m-auto md:w-[60%] text-center">
          <SectionTag className="text-white">CONTACT US</SectionTag>
          <SectionHeading className="text-center">
            Kami Bermitra Dengan Para Peternak Dari 5 Provinsi Besar Di Seluruh Indonesia
          </SectionHeading>
          <SectionDescription className="text-center text-xs md:text-base">
            Kami menjangkau para peternak di berbagai daerah dengan pelayanan maksimal
          </SectionDescription>
        </SectionExplain>
      </Section>

      <div className="cont pb-10">
        <img src="/images/contact-map.png" alt="hero" />
      </div>
    </div>
  );
}

const contacts = [
  {
    title: "Kantor Pusat",
    desc: "Yogyakarta jl sekian nomor sekian",
    link: "Maps",
  },
  {
    title: "Hubungi kami",
    desc: "+6282151803943",
    link: "Telepon",
  },
  {
    title: "E-Mail",
    desc: "levathen14@gmail.com",
    link: "Email",
  },
];

function ContactSection() {
  return (
    <Section className="flex-col p-10 border-2 rounded-xl">
      <SectionHeading className='text-center'>Informasi Lanjutan</SectionHeading>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-14 m-auto">
        {contacts.map((contact, i) => (
          <Card key={i} className="md:w-[100%]">
            <CardTitle>{contact.title}</CardTitle>
            <CardDesc>{contact.desc}</CardDesc>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default text-sm font-semibold">{contact.link}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FormSection() {
  return (
    <Section className="flex-col bg-primary-default p-10 rounded-xl">
      <SectionExplain className='mx-auto text-white mb-5'>
        <SectionHeading className="text-center">
          Kritik Dan Saran
        </SectionHeading>
        <SectionDescription className="text-white mx-auto text-center md:w-[70%]">
          Kami selalu terbuka untuk kritik dan saran dari kalian untuk menjadi lebih baik
        </SectionDescription>
      </SectionExplain>
      <div className="md:px-10 px-5 w-full md:w-[70%] mx-auto">
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
          <div className="flex md:flex-row flex-col gap-10">
            <input
              className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <select className="px-10 opacity-80 py-4 w-full border rounded-full focus:outline-primary-default">
              <option className="opacity-50" disabled value="option">Peran Anda</option>
              <option className="opacity-50" value="option">Pengunjung</option>
              <option className="opacity-50" value="option">Pengguna</option>
              <option className="opacity-50" value="option">Partner</option>
              <option className="opacity-50" value="option">Lain-lain</option>
            </select>
          </div>
          <input
            className="px-8 py-4 w-full border rounded-full focus:outline-primary-default caret-primary-default"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <label className="flex gap-3 text-[1em] md:text-sm opacity-80 text-white">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            Dengan mengklik centang biru berarti anda menyetujui seluruh ketentuan dan layanan dari kami
          </label>
          <Button variant='secondary'>Submit</Button>
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
      <FormSection />
    </>
  );
}

export default ContactUsPage;
