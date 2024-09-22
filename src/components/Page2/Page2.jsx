import React from "react";
import "./Service.css";
import Service from "./Service";

const Page2 = () => {
  return (
    <div className="page2">
      <Service
        image="https://printify.com/pfh/assets/legacy/higher-profits.svg"
        heading="Higher Profits"
        text="We offer some of the lowest prices in the industry because print providers continuously compete."
      />
      <Service
        image="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
        heading="Robust Scaling"
        text="Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
      />
      <Service
        image="https://printify.com/pfh/assets/legacy/best-selection.svg"
        heading="Best Selection"
        text="With 900+ products and top quality brands, you can choose the best products for your business."
      />
    </div>
  );
};

export default Page2;
