"use client";
import Image from "next/image";
import CountdownClock from "@/ui/CountDownClock";
import bannerShape_1 from "@/assets/img/banner/banner_shape01.png";
import bannerShape_2 from "@/assets/img/banner/banner-1.png";
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ABI from "../../ABI/BoockyICO.json";

const errorMessages = {
  walletNotConnected: "Please Connect Wallet First!",
  zeroEthValue: "ETH Value can't be zero!",
  contractError: "Something Went Wrong!",
};

const successMessage = {
  claimedSuccess: "Tokens received successfully",
};

const ToastArgs: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const Banner = () => {
  const { address, isConnected } = useAccount();
  const { getEthPriceNow } = require("get-eth-price");
  const { chain } = useNetwork();

  const bookyICOAddress = "0x441e29f04d6B72C8f47de0482C112AD243582047";
  const [ethAmount, setEthAmount] = useState<number>(0);
  const [ethPrice, setEthPrice] = useState<number>();
  const [bookyPerEth, setBookyPerEth] = useState<number | undefined>();
  const { data: balanceData } = useBalance({
    address,
  });
  const handleEthAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    const parsedValue = parseFloat(inputVal);
    if (!isNaN(parsedValue)) {
      setEthAmount(parsedValue);
    }
    findBookyPrice(parsedValue);
  };

  const toastOpen = (message: string, error: boolean) => {
    return error
      ? toast.error(message, ToastArgs)
      : toast.success(message, ToastArgs);
  };

  const { config } = usePrepareContractWrite({
    chainId: chain?.id,
    address: bookyICOAddress,
    abi: ABI,
    functionName: "buyToken",
    value: parseEther(ethAmount.toString()),
  });

  const {
    isLoading: isContractLoading,
    data,
    isError,
    isSuccess,
    write,
  } = useContractWrite(config);
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  async function buyBooky() {
    if (!isConnected) {
      return toastOpen(errorMessages.walletNotConnected, true);
    }
    if (ethAmount <= 0 || !ethAmount) {
      return toastOpen(errorMessages.zeroEthValue, true);
    }
    write?.();
  }

  const findBookyPrice = (ethValue: number) => {
    const BOOkYPriceUSD = 0.008;
    if (typeof ethPrice !== "undefined") {
      const BOOkYPerUSD = 1 / BOOkYPriceUSD;
      const BOOkYPerEth: number = BOOkYPerUSD * (ethPrice * ethValue);
      setBookyPerEth(BOOkYPerEth);
    }
  };

  useEffect(() => {
    getEthPriceNow().then((data: any) => {
      const ethData = data[Object.keys(data)[0]]?.ETH;
      setEthPrice(ethData.USD);
    });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toastOpen(successMessage.claimedSuccess, false);
    }
    if (isError) {
      toastOpen(errorMessages.contractError, true);
    }
  }, [isSuccess, isError]);

  return (
    <section
      className="banner-area banner-bg"
      style={{
        backgroundImage: `url(/assets/img/banner/banner_p.png)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content text-start">
              <h2 className="title">
                ICO NOW LIVE<br></br> The Worlds First Crypto Casino Where You
                Can Be The House
              </h2>
              <p>
                The World&#39;s FIRST Crypto Gambling site where YOU can stake
                YOUR $BOOKY Tokens and be the booky. Act as the bookmaker on all
                major sporting events and casino games by setting your odds and
                collecting your winnings or stake your tokens into the POOL and
                earn from the house daily.
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
              <div className="contribution-sec">
                <div className="inp-block">
                  <input
                    onChange={handleEthAmountChange}
                    className="cont-inp"
                    type="number"
                    placeholder="0.001 ETH"
                    // value={ethAmount}
                  />
                  <p style={{ color: "#fff" }}>
                    Balance:{" "}
                    {balanceData?.formatted &&
                    +(balanceData?.formatted || 0) > 0.001
                      ? (+balanceData?.formatted).toFixed(3)
                      : "0"}{" "}
                  </p>
                </div>
                <div className="btn-block">
                  <button
                    disabled={isLoading || isContractLoading}
                    className="btn btn-purchase"
                    onClick={buyBooky}
                  >
                    {isLoading || isContractLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        {" Loading.."}
                      </>
                    ) : (
                      "Buy BOOKY"
                    )}
                  </button>
                </div>
              </div>
              <div className="claculate text-center" style={{ color: "#fff" }}>
                1 USD ≈ 500 BOOKY
              </div>
              {ethAmount ? (
                <div
                  className="claculate text-center"
                  style={{ color: "#fff" }}
                >
                  {!ethAmount || ethAmount === 0
                    ? "0 ETH ≈ 0 BOOKY"
                    : !bookyPerEth || Number.isNaN(bookyPerEth)
                    ? "0 ETH ≈ 0 BOOKY"
                    : `${ethAmount} ETH ≈ ${Math.round(bookyPerEth)} BOOKY`}
                </div>
              ) : (
                ""
              )}
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
        <Image
          src={bannerShape_1}
          alt=""
          className="leftToRight"
          style={{ display: "none" }}
        />
        <Image
          src={bannerShape_2}
          width={200}
          alt=""
          className="alltuchtopdown"
        />
      </div>
    </section>
  );
};

export default Banner;
