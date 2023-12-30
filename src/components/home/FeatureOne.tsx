import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import featureImg_1 from "@/assets/img/stake/Total-Supply.png";
import featureImg_2 from "@/assets/img/stake/Phase-1.png";
import featureImg_3 from "@/assets/img/stake/Phase-2.png";
import featureImg_4 from "@/assets/img/stake/Phase-3.png";

interface DataType {
  id: number;
  title: JSX.Element;
  desc: JSX.Element;
  img: StaticImageData;
}
const feature_data: DataType[] = [
  {
    id: 1,
    title: <>Total Supply</>,
    desc: <>888,000,000 $BOOKY</>,
    img: featureImg_1,
  },
  {
    id: 2,
    title: (
      <>
        Phase 1<br /> (LIVE)
      </>
    ),
    desc: <>1 BOOKY = $0.002</>,
    img: featureImg_2,
  },
  {
    id: 3,
    title: (
      <>
        Phase 2<br /> (Coming Soon)
      </>
    ),
    desc: <>1 BOOKY = $0.008</>,
    img: featureImg_3,
  },
  {
    id: 4,
    title: (
      <>
        Phase 3<br /> (Coming Soon)
      </>
    ),
    desc: <>1 BOOKY = $0.017</>,
    img: featureImg_4,
  },
];
const FeatureOne = () => {
  return (
    <section id="staking" className="features-area pt-140 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-70">
              <h2 className="title">Staking</h2>
              <p className="feat-subtitle my-3" style={{ fontSize: "18px" }}>
                The world&#39;s first Crypto Casino where you can earn from both
                sides. Stake your $BOOKY Tokens into the House Pool and when the
                house wins you win, profits are distributed directly into the
                POOL daily OR You can Stake your tokens and you set the odds.
                You can decide what odds to offer on sporting events publicly or
                privately between friends and you can win as the house!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {feature_data.map((item) => (
            <div key={item.id} className="col-lg-3">
              <div className="features-item">
                {/* <div className="features-content">
                  <h2 className="title">
                    <span>{item.title}</span>
                  </h2>
                  <p>{item.desc}</p>
                </div> */}
                <div className="features-img">
                  <Image width={164} src={item.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
