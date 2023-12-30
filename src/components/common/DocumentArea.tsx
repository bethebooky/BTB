import Link from "next/link";
import Image from "next/image";
import TelegramSVG from "@/assets/img/svg/telegram.svg";
import TwitterSVG from "@/assets/img/svg/twitter.svg";

const doc_data: string[] = [
  "Whitepaper",
  "Token Sale Terms",
  "Presentation",
  "Lightpaper",
];

const DocumentArea = () => {
  return (
    <section className="document-area mt-5" id="contact">
      <div className="container">
        <div className="document-inner-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title mt-5">Have Any Questions?</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 text-center p-5">
              <h2 className="sub-title mb-3">Connect with us on</h2>
              <div className="row justify-content-center">
                <div className="col-2">
                  <div>
                    <Link href={"https://t.me/bethebooky"}>
                      <Image width={50} alt="telegram" src={TelegramSVG} />
                    </Link>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <Link href={"https://twitter.com/bethebooky"}>
                      <Image width={50} alt="telegram" src={TwitterSVG} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-8">
              <div className="document-form-wrap">
                <h4 className="title">Get In Touch Now</h4>
                <DocumentForm />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="document-wrap">
                <h4 className="title">Read Documents</h4>
                <ul className="list-wrap">
                  {doc_data.map((list, i) => (
                    <li key={i}>
                      <Link href="#">
                        <span className="icon">
                          <i className="fas fa-file-pdf"></i>
                        </span>
                        {list}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" className="btn">
                  Download All
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="document-shape">
        <Image src={docShape} alt="" className="alltuchtopdown" />
      </div> */}
    </section>
  );
};

export default DocumentArea;
