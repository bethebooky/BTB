"use client";
import Slider from "react-slick";

interface DataTyfe {
  id: number;
  roadmap_title: string;
  title: string;
  desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
  {
    id: 1,
    roadmap_title: "Live Now",
    title: "ICO",
    desc: (
      <>
        Participate in our live ICO now! Join us to invest and shape the future
        of $BOOKY.
      </>
    ),
  },
  {
    id: 2,
    roadmap_title: "Q1 2024",
    title: "Marketing Campaigns Initiated",
    desc: (
      <>
        Launching strategic marketing campaigns! Drive engagement and amplify
        reach for impactful results.
      </>
    ),
  },
  {
    id: 3,
    roadmap_title: "Q2 2024",
    title: "Major Exchange Announcements",
    desc: (
      <>
        Exciting Q2 2024: Unveiling major exchange partnerships! Stay tuned for
        significant growth and accessibility.
      </>
    ),
  },
  {
    id: 4,
    roadmap_title: "Q2 2024",
    title: "Staking Pools Launched",
    desc: (
      <>
        Introducing staking pools in 2024! Join us in earning rewards and
        boosting network participation.
      </>
    ),
  },
  {
    id: 5,
    roadmap_title: "Q3 2024",
    title: "App Launch",
    desc: (
      <>
        Coming Q3 2024: Our groundbreaking app launch! Experience seamless
        innovation firsthand.
      </>
    ),
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  centerMode: true,
  centerPadding: "260px",
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        enterPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        enterPadding: "0",
        centerMode: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        enterPadding: "0",
        centerMode: false,
      },
    },
  ],
};

const RoadMapArea = () => {
  return (
    <section id="roadMap" className="roadmap-area pt-10">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-12">
            <div className="section-title text-center mb-70">
              <h2 className="title">Our Roadmap</h2>
            </div>
          </div>
        </div>
        <Slider {...settings} className="row roadMap-active">
          {roadmap_data.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="roadmap-item">
                <span className="roadmap-title">{item.roadmap_title}</span>
                <div className="roadmap-content">
                  <h4 className="title">
                    <span className="dot"></span>
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RoadMapArea;
