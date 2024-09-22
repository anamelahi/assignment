import React, { useLayoutEffect, useRef } from "react";
import "./Page4.css";
import Button from "../Buttons/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import etsy from "../../assets/c1.svg";
import c2 from "../../assets/c2.svg";
import c3 from "../../assets/c3.svg";
import c4 from "../../assets/c4.svg";
import c5 from "../../assets/c5.svg";
import c6 from "../../assets/c6.svg";
import c7 from "../../assets/c7.svg";

const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parentRef = useRef();

  const imagesArr = [etsy, c2, c3, c4, c5, c6, c7];

  useLayoutEffect(() => {
    const ctx1 = gsap.context(() => {
      let t1 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".head",
          },
        })
        .to(
          ".img1",
          {
            top: "15%",
            left: "75%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img2",
          {
            top: "20%",
            left: "35%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img3",
          {
            top: "10%",
            left: "15%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img4",
          {
            bottom: "10%",
            left: "60%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img5",
          {
            bottom: "25%",
            left: "70%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img6",
          {
            bottom: "30%",
            left: "15%",
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".img7",
          {
            bottom: "15%",
            left: "25%",
            duration: 1.5,
          },
          "a"
        );
    }, parentRef);

    return () => ctx1.revert();
  }, []);

  return (
    <div className="page4">
      <div className='container' ref={parentRef}>

<div className='content'>

  <p className='heading'>Connect your store</p>

  <p className='subtext'>Printify easily integrates with major e-commerce platforms and marketplaces</p>

  <div className='image-container'>

    {imagesArr.map((e, i) => (
      <img 
        key={i} 
        className={`img${i} image ${e === "top" ? 'image-top' : 'image-bottom'} ${e === "/src/assets/blank.svg" ? "bg-green" : "bg-white"}`} 
        src={e} 
        alt={e} 
      />
    ))}

  </div>

</div>
</div>

      <div className="contact-card">
        <h2>
          Are you a large business looking <br /> for custom solutions?
        </h2>
        <Button color="black" btntext="Talk to sales" />
      </div>
    </div>
  );
};

export default Page4;
