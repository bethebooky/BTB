"use client";
import Image from "next/image";
import CountdownClock from "@/ui/CountDownClock";
import { Modal, Button, Container, Row, Form } from "react-bootstrap";

import bannerShape_1 from "@/assets/img/banner/banner_shape01.png";
import bannerShape_2 from "@/assets/img/banner/banner_shape02.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Banner = () => {
  const { isConnected } = useAccount();

  const { getEthPriceNow } = require("get-eth-price");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ethAmount, setEthAmount] = useState<number>(0);
  const [ethPrice, setEthPrice] = useState<number>();
  const [bookyPerEth, setBookyPerEth] = useState<number | undefined>();

  const handleEthAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const parsedValue = parseFloat(inputVal);
    if (!isNaN(parsedValue)) {
      setEthAmount(parsedValue);
    }
    findBookyPrice(parsedValue);
  };

  function clicked() {
    ethAmount > 0
      ? console.log(ethAmount)
      : () => {
          console.log("eth value can't be zero");
        };
  }

  const findBookyPrice = (ethValue: number) => {
    const BOOkYPriceUSD = 0.008;
    // Check if ethPrice is defined before performing the calculation
    if (typeof ethPrice !== "undefined") {
      const BOOkYPerUSD = 1 / BOOkYPriceUSD;
      const BOOkYPerEth: number = BOOkYPerUSD * (ethPrice / ethValue);
      setBookyPerEth(BOOkYPerEth);
    }
  };

  useEffect(() => {
    getEthPriceNow().then((data: any) => {
      const ethData = data[Object.keys(data)[0]]?.ETH;
      setEthPrice(ethData.USD);
    });
  }, []);

  return (
    <section
      className="banner-area banner-bg"
      style={{ backgroundImage: `url(/assets/img/banner/banner_bg.png)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content text-start">
              <h2 className="title">
                Discover the Next Big Opportunity: Our ICO is Live
              </h2>
              <p>
                A new smart block chain based marketplace for trading digital{" "}
                <br /> goods & assets according.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-countdown-wrap">
              <div className="coming-time" data-countdown="2024/8/29">
                <CountdownClock />
              </div>
              <div className="token-fund-info text-center mt-5">
                <h2>
                  Pre-Sale Target: <span>$444,000</span>
                </h2>
              </div>
              {/* <div className="contribution-btn">
                <button className="btn btn-purchase" onClick={handleShow}>
                  Buy BOOKY
                </button>
                <Link href="https://t.me/bethebooky" className="btn btn-two">
                  Join Community
                </Link>
              </div> */}
              <div className="contribution-sec">
                <div className="inp-block">
                  <input
                    onChange={handleEthAmountChange}
                    className="cont-inp"
                    type="number"
                    placeholder="0.001 ETH"
                    // value={ethAmount}
                  />
                </div>
                <div className="btn-block">
                  <button className="btn btn-purchase" onClick={clicked}>
                    Buy BOOKY
                  </button>
                </div>
              </div>
              <div className="claculate text-center">
                {!ethAmount || ethAmount === 0
                  ? "0 ETH ≈ 0 BOOKY"
                  : !bookyPerEth || Number.isNaN(bookyPerEth)
                  ? "0 ETH ≈ 0 BOOKY"
                  : `${ethAmount} ETH ≈ ${Math.round(bookyPerEth)} BOOKY`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll-down">
        <a href="#contribution" className="section-link">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="banner-shape-wrap">
        <Image src={bannerShape_1} alt="" className="leftToRight" />
        <Image src={bannerShape_2} alt="" className="alltuchtopdown" />
      </div>

      {/* <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="px-4 modal-head">
          <Modal.Title className="mx-auto">Buy BOOKY With ETH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-center">
              <div className="col-10">
                <div className="inp-block">
                  <Form.Text className="text-muted">
                    Add the ETH amount.
                  </Form.Text>
                  <input
                    onChange={handleEthAmountChange}
                    className="cont-inp"
                    type="number"
                    placeholder="0.001 ETH"
                    // value={ethAmount}
                  />
                </div>
                <div className="calc-text-block text-center">
                  <h2 className="calc-text">
                    {!ethAmount || ethAmount === 0
                      ? "0 ETH ≈ 0 BOOKY"
                      : !bookyPerEth || Number.isNaN(bookyPerEth)
                      ? "0 ETH ≈ 0 BOOKY"
                      : `${ethAmount} ETH ≈ ${Math.round(bookyPerEth)} BOOKY`}
                  </h2>
                </div>
                <div className="btn-block text-center mt-5">
                  <button
                    disabled={isConnected}
                    className="btn btn-purchase-two"
                    onClick={clicked}
                  >
                    {isConnected ? "Buy BOOKY" : "Please connect wallet"}
                  </button>
                </div>
              </div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal> */}
    </section>
  );
};

export default Banner;
