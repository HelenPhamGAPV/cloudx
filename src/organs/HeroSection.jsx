import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import Carousel from "../atoms/Carousel";
import { HeroTexts } from "../particles/DataLists";
import { Button } from "../atoms/Button";
import { Play } from "@phosphor-icons/react";
import { Text } from "../atoms/Text";

const HeroSection = () => {
  const proprietes = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="realtive w-full md:max-h-[550px] max-h-[800px] md:mb-6 mb-1">
      <Slider {...proprietes}>
        {HeroTexts.map((item) => {
          return (
            <div>
              <div
                className="h-[500px] w-[100%] mix-blend-multiply"
                style={{
                  backgroundImage: `url(${item.image})`,
                  objectFit: "cover",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="h-full flex justify-center items-center text-center px-6">
                  <div className="inline-block justify-center items-center text-center px-40">
                    <h1 className="z-50 font-montserrat text-4xl font-bold text-white lg:text-6xl">
                      {item.header}
                    </h1>
                    <p class="z-50 font-roboto text-xl font-light text-white lg:text-2xl pt-4">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HeroSection;
