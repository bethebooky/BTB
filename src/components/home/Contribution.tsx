"use client";
import Image from "next/image";
import Link from "next/link";

import contributionShape_1 from "@/assets/img/images/contribution_shape01.png";
import contributionShape_2 from "@/assets/img/images/contribution_shape02.png";
import { useEffect, useState } from "react";

const Contribution = () => {
  const { getEthPriceNow } = require("get-eth-price");
  const [ethPrice, setEthPrice] = useState<number>();
  const [bookyPerEth, setBookyPerEth] = useState<number | undefined>();

  useEffect(() => {
    getEthPriceNow().then((data: any) => {
      const ethData = data[Object.keys(data)[0]]?.ETH;
      setEthPrice(ethData.USD);
    });
  }, []);

  useEffect(() => {
    const findBookyPrice = () => {
      const BOOkYPriceUSD = 0.008;
      // Check if ethPrice is defined before performing the calculation
      if (typeof ethPrice !== "undefined") {
        const BOOkYPerUSD = 1 / BOOkYPriceUSD;
        const BOOkYPerEth: number = BOOkYPerUSD * ethPrice;
        setBookyPerEth(BOOkYPerEth);
      }
    };
    findBookyPrice();
  }, [ethPrice]);

  return (
    <section id="contribution" className="contribution-area pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contribution-title">
              <h2 className="title">
                $ <span>45,256,432</span> Contribution Receive
              </h2>
            </div>
            <div className="progress-wrap">
              <ul className="list-wrap">
                <li>Pre-Sale</li>
                <li>soft cap</li>
                <li>bonus</li>
              </ul>
              <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "18%" }}></div>
              </div>
              <h6 className="progress-title">
                {" "}
                Booky Rate{" "}
                <span>
                  1 ETH = ${ethPrice} = {bookyPerEth} BOOKY
                </span>
              </h6>
            </div>
            <div className="contribution-btn">
              <Link href="/contact" className="btn btn-two">
                Read White Paper
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contribution-shape-wrap">
        <Image src={contributionShape_1} alt="" className="alltuchtopdown" />
        <Image src={contributionShape_2} alt="" className="leftToRight" />
      </div>
    </section>
  );
};

export default Contribution;
