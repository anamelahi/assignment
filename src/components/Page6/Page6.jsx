import React from "react";
import "./Page6.css";
import cardimg from "../../assets/extractimages_9212024_104812.svg"
import Button from "../Buttons/Button";

const Page6 = () => {
  return (
    <div className="page6">
      <div className="card">
        <div className="left">
          <h1>Make Money, Risk-Free </h1>
          <p>You pay for fulfillment only when you make a sale</p>
          <div className="calc">
            <div className="deet">
              <p>You sell a t-shirt</p>
              <p>$ 30</p>
            </div>
            <div className="deet">
              <p>You sell a t-shirt</p>
              <p>$ 30</p>
            </div>
            <hr />
            <div className="deet">
              <p>You sell a t-shirt</p>
              <p>$ 30</p>
            </div>
          </div>
          <Button btntext="Start Selling"/>
        </div>
        <div className="rightt">
            <img src={cardimg} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Page6;
