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
import { rc } from "../lib/utils";

const prices = [
  {
    tag: "Pakan Ayam Petelur J42-1",
    price: 260000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur 7183",
    price: 270000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur 7183A	",
    price: 280000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler Suja Samsung Jaya BRO 1 Master",
    price: 305000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler QL",
    price: 320000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Starter Ayam Broiler Japfa Broiler 1 SP",
    price: 325000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Komplet Ayam Petelur Pokphand 324KJ",
    price: 375000,
    desc: "Tersisa 2/5",
  },
  {
    tag: "Pakan Ayam Broiler J511",
    price: 599000,
    desc: "Tersisa 2/5",
  },
];

function PricingSection() {
  const [plan, setPlan] = React.useState("once");

  return (
    <Section className="flex-col mt-20">
      <SectionHeading className='py-3 mb-10 text-center border-2 rounded-xl'>Produk Unggulan Levathen</SectionHeading>
      <div className="bg-primary-default text-white text-xs md:text-sm lg:text-base h-14 p-2 mx-auto md:w-fit rounded-full flex items-center animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-in">
        <div
          className={rc(
            plan === "once"
              ? "bg-white  flex items-center text-primary-default rounded-full h-full px-4"
              : "px-4",
            "cursor-pointer"
          )}
          onClick={() => setPlan("once")}
        >
          <p className={plan === "once" ? "font-bold mx-auto" : ""}>
            Harga Biasa
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
            Langganan (Hemat 10%)
          </p>
        </div>
      </div>

      {plan === "once" ? (
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
          <h1 className="font-bold text-5xl">Langganan</h1>
          <div className="grid md:grid-cols-3 p-10 sm:grid-cols-2 grid-cols-1 gap-10">
            {prices.map((price, i) => (
              <Card className="h-fit" key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                </svg>
                <p className="font-semibold">{price.tag}</p>
                <h3 className="font-bold text-3xl">Rp.{price.price - (10 / 100 * price.price)}</h3>
                <p className="opacity-60 text-sm">Total Rp.{(price.price - (10 / 100 * price.price)) * 8}/Bulan</p>
                <div className="border-t-2"></div>
                <Button className="w-full">Order Now</Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

const services = [
  {
    title: "Memilih pakan terbaik untuk ternak",
    desc: "1 Januari 2024 / 20:00",
  },
  {
    title: "Pertolongan pertama pada ayam rematik",
    desc: "5 January 2024 / 13:00"
  },
  {
    title: "Letak strategis kandang yang ideal",
    desc: "20 Januari 2024 / 15:00",
  },
];

function ServiceSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionHeading className="text-center">
          Event Dari Levathen
        </SectionHeading>
        <SectionDescription className="text-center">
          Ikuti sesi pembelajaran secara gratis dari para mentor berpengalaman
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, i) => (
          <Card key={i}>
            <CardTitle>{service.desc} WIB</CardTitle>
            <img src='/images/red-chicken.png' alt="card-img" />
            <CardTitle>{service.title}</CardTitle>
            <div className="inline-flex gap-2 cursor-pointer group items-center">
              <p className="text-primary-default font-bold">Daftar</p>
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
      <div className="flex lg:flex-row flex-col-reverse p-10 md:p-16 bg-primary-default text-white gap-20 rounded-3xl">
        <SectionExplain className="md:w-[60%]">
          <SectionHeading className="text-xl">
            Bekerja sama dengan levathen membangun ekosistem yang menguntungkan.
          </SectionHeading>
          <SectionDescription className="text-xs md:text-base">
            Bekerja sama sebagai partner untuk menawarkan product pakan dengan syarat dan ketentuan dari levathen terms and policy
          </SectionDescription>
          <Button variant='secondary' data-aos="fade-right" data-aos-duration="700" data-aos-delay="300">Bekerja Sama</Button>
        </SectionExplain>
        <div data-aos-offset="0" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
          <img src="./images/ayam.jpg" className="rounded-xl" alt="cta-img" />
        </div>
      </div>
    </Section>
  );
}

function Products() {
  return (
    <>
      <PricingSection />
      <ServiceSection />
      <CtaSection />
    </>
  );
}

export default Products;
