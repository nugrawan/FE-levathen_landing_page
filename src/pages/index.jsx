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

          <a href="/services" className="animate-fade-up animate-duration-[700ms] animate-delay-700 animate-ease-in-out">
            <Button>Layanan Kami</Button>
          </a>
        </SectionExplain>

      </Section>
    </div>
  );
}

const services = [
  {
    title: "Merawat Kesehatan Ternak Anda",
    desc: "Kami ada untuk membantu anda menjaga kesehatan ternak anda hingga mendapat profit yang maksimal dan mengurangi kerugian anda",
  },
  {
    title: "Mengelola Sistem Peternakan Anda",
    desc: "Selain kerugian dan keuntungan Levathen juga membantu anda mengelola sistem peternakan yang sulit di atasi.",
  },
  {
    title: "Menyediakan Kebutuhan Ternak Anda",
    desc: "Kami bekerja sama dengan para produsen pakan ternak terbaik hingga product kami cocok bagi hewan ternak anda.",
  },
];

function OurServicesSection() {
  return (
    <Section className="py-20 md:items-start" col>
      <SectionExplain className="md:w-[80%]">
        <SectionTag className="md:text-left text-center" >
          Solusi
        </SectionTag>
        <SectionHeading className="md:text-left text-center" >
          Levathen ada untuk...
        </SectionHeading>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i} >
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
    <Section className="mt-4 flex gap-x-28 bg-[url(./images/ayam.jpg)] bg-cover bg-center p-7 m-5 md:p-20 rounded-xl shadow-xl" row>
      <SectionExplain className="md:w-1/2 w-full ">
        <SectionHeading>
          Kami berpartner dengan para peternak dari berbagai provinsi
        </SectionHeading>
        <SectionDescription className='text-black'>
          Selain peternak, kami juga bermitra dengan berbagai tenaga kerja professional yang akan menangani masalah ternak anda.
        </SectionDescription>

        <div className="space-y-5 " data-aos-offset="0" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
          {locations.map((location, i) => (
            <div key={i} className="flex items-center gap-5">
              <p className="font-bold text-xs md:text-lg">
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

const questions = [
  {
    text: "Apa bedanya levathen dengan layanan dari perusahaan lain?",
    desc: "Levathen ada sebagai partner untuk kepentingan para costumer.",
    icon: "./icons/plus.png",
  },
  {
    text: "Apa tujuan dari levathen?",
    desc: "Levathen di buat untuk membantu para peternak dari seluruh indonesia dalam menghandle peternakan mereka di bantu dengan para tenaga professional.",
    icon: "./icons/plus.png",
  },
  {
    text: "Apakah fitur costumer service bisa digunakan secara gratis?",
    desc: "Kami selalu siap menjawab panggilan dari anda dengan batas tertentu sesuai kebijakan.",
    icon: "./icons/plus.png",
  },
  {
    text: "Apakah berlangganan bisa dibatalkan?",
    desc: "Anda bisa membatalkan langganan jika ada kendala tertentu, dengan syarat dan ketentuan yang berlaku.",
    icon: "./icons/plus.png",
  },
];

function FAQSection() {
  const [active, setActive] = React.useState(0);

  return (
    <Section className="flex-col my-20">
      <SectionExplain className="md:w-[80%] mb-0 md:mb-10 mx-auto">
        <SectionHeading className="text-center">
          Pertanyaan paling sering muncul
        </SectionHeading>
      </SectionExplain>
      <div className="space-y-5">
        {questions.map((faq, i) => (
          <Card key={i}>
            <div className="flex md:text-lg text-xs justify-between items-center max-w-lg">
              <div className="w-full md:w-[80%]">
                <CardTitle>{faq.text}</CardTitle>
                {i === active && (
                  <CardDesc className="opacity-80">
                    <p className="md:text-base text-[.7rem] leading-none mt-3">{faq.desc}</p>
                  </CardDesc>
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

const founders = [
  { name: 'Sigmantara ', img: './images/about-team1.png', city: 'Malang, Jawa Timur, Indonesia', role: 'Hustler' },
  { name: 'Diva Ananda ', img: './images/about-team3.png', city: 'Banyuwangi, Jawa Timur, Indonesia', role: 'Hipster' },
  { name: 'Nugrawan ', img: './images/about-team4.png', city: 'Enrekang, Sulawesi Selatan, Indonesia', role: 'Hacker' }
]

function FounderSection() {
  return (
    <Section className='flex-col py-20'>
      <SectionExplain>
        <SectionHeading className='text-center'>Founders</SectionHeading>
        <SectionDescription className='text-center'>Project ini terbentuk dari 3 Inovator Muda Indonesia dengan beragam keahlian.</SectionDescription>
      </SectionExplain>

      <div className="md:flex-row flex-col flex gap-10">
        {
          founders.map((founder, i) => (
            <Card key={i}>
              <CardTitle>{founder.role}</CardTitle>
              <img src={founder.img} alt="founder" />
              <CardTitle>{founder.name}</CardTitle>
              <CardDesc>{founder.city}</CardDesc>
            </Card>
          ))
        }
      </div>
    </Section>
  )
}

function SectionThree() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="md:w-5/6">
        <SectionHeading className="text-center text-base md:text-xl w-full md:w-3/4 mx-auto">
          Berlangganan untuk mendapatkan update terbaru dari kami
        </SectionHeading>
      </SectionExplain>

      <div>
        <div className="rounded-full border border-gray-300 flex justify-between text-xs md:text-base max-w-xl p-1 md:p-2 mx-auto ">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button className='md:text-base text-[.6rem]'>Berlangganan</Button>
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
      <FounderSection />
      <FAQSection />
      <SectionThree />
    </>
  );
}

export { MainPage };
