"use client";
import Image from "next/image";
import Link from "next/link";

import contributionShape_1 from "@/assets/img/images/contribution_shape01.png";
import contributionShape_2 from "@/assets/img/images/contribution_shape02.png";
import { useEffect, useState } from "react";

const Contribution = () => {
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
              <h6 className="progress-title"> Booky Rate </h6>
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
