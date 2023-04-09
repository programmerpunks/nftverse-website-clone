import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow({ ...props }) {
  return (
    <IoIosArrowForward
      size={30}
      color="#7E7E7E"
      className="slider-button"
      {...props}
      style={{
        backgroundColor: "transparent",
        width: 30,
        height: 30,
        borderRadius: 2,
        marginRight: 15,
      }}
    />
  );
}

function SamplePrevArrow(props) {
  return (
    <IoIosArrowBack
      size={30}
      color="#7E7E7E"
      className="slider-button"
      {...props}
      style={{
        backgroundColor: "transparent",
        width: 30,
        height: 30,
        borderRadius: 2,
        marginLeft: 20,
      }}
    />
  );
}

export var settings = {
  dots: true,
  infinite: true,
  className: "center",
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: true,
  autoplay: true,
  cssEase: "linear",
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "-15px",
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "-8px",
        leftPadding: "40px",
        slidesToScroll: 1,
      },
    },
  ],
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
