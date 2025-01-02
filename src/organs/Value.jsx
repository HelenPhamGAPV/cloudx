import { useCallback, useRef } from "react";
import { AirplaneTilt, CaretLeft, CaretRight } from "@phosphor-icons/react";
import handshake from "../assets/handshake.svg";

const Value = ({ value }) => {
  return (
    // <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
    //     <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
    //         {TopDestinationTexts.firstText}
    //     </Text>
    //     <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
    //         {TopDestinationTexts.secondText}
    //     </Text>

    //     {/* Controllers  */}
    //     <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
    //         <Button onClick={previous} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
    //             <CaretLeft size={18} color="currentColor" weight="fill" />
    //         </Button>
    //         <Button onClick={next} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
    //             <CaretRight size={18} color="currentColor" weight="fill" />
    //         </Button>
    //     </div>

    //     {/* Slides  */}
    //     <div className="w-full h-auto mt-4">
    //         <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
    //             {
    //                 TopDestinationTexts.cards.map((card, index) => (
    //                     <div key={index} className="md:px-6 px-3">
    //                         <Card cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group" imageAlt={card.country} imageSrc={renderCities(index)} imageWrapperClass="w-full h-[250px] overflow-hidden" cover="group-hover:scale-125 transition duration-500 ease" textWrapperClass="flex flex-col gap-4 w-full px-5 py-5">
    //                             <div className="flex justify-between items-center">
    //                                 <Text as="h4" className="text-base font-medium text-color3">
    //                                     {card.country}
    //                                 </Text>
    //                                 <Text as="small" className=" text-color3 font-light text-sm">
    //                                     {card.price}
    //                                 </Text>
    //                             </div>
    //                             <div className="w-full flex gap-4 items-center text-color3">
    //                                 <AirplaneTilt size={20} color="currentColor" weight="fill" />
    //                                 <Text as="p" className=" text-color3 font-light text-base">
    //                                     {card.duration}
    //                                 </Text>
    //                             </div>
    //                         </Card>
    //                     </div>
    //                 ))
    //             }
    //         </Slider>
    //     </div>

    // </section>
    <section class="w-full bg-white100">
      <div class="m-auto flex max-w-6xl flex-col justify-center items-center py-10 px-6 !py-7">
        <div class="m-auto flex max-w-4xl max-w-fit flex-col items-center py-0 2sm:py-1 lg:py-9">
          <h2 class="text-parisianNight font-montserrat font-bold w-auto max-w-fit text-center text-2xl md:text-4xl md:leading-10 pt-1 pb-2 md:pt-2 md:pb-4 relative border-b-2 border-b-primary-550 after:content-[''] after:absolute after:bottom-[-1px] after:border-b-2 after:border-b-color6 px-6 after:left-[24px] after:w-[calc(100%-48px)] paddingLeft ::after mb-0 2sm:mb-1.5 md:mb-5">
            {value.title}
          </h2>
          <div class="mt-3.5 flex flex-row justify-center gap-x-4 2sm:mt-5 2sm:flex-row 2sm:flex-wrap md:gap-x-10 lg:flex-nowrap">
            {value.value.map((item, index) => (
              <div class="flex max-w-[320px] flex-col py-3.5 2sm:max-w-[240px] md:items-start md:pb-4 md:pt-6 lg:max-w-[320px] lg:items-center">
                <div class="mb-3 flex flex-row items-center justify-center align-middle lg:mb-6">
                  <img
                    src={item.img}
                    className="ml-1 mr-2.5 mt-1 w-7 min-w-5 orange-color 2sm:w-8 lg:min-w-6"
                  />
                  <h3 class="text-color6 font-montserrat text-lg leading-5 md:text-xl md:leading-6 text-center font-bold">
                    {item.title}
                  </h3>
                </div>
                <span class="text-parisianNight font-roboto text-lg leading-6 font-light lg:text-center 2sm:text-left text-center">
                  {item.content}
                </span>
              </div>
            ))}
            {/* <div class="flex max-w-[320px] flex-col py-3.5 2sm:max-w-[240px] md:items-start md:pb-4 md:pt-6 lg:max-w-[320px] lg:items-center">
              <div class="mb-3 flex flex-row items-center justify-center align-middle lg:mb-6">
                <img src={handshake} className="ml-1 mr-2.5 mt-1 w-7 min-w-5 orange-color 2sm:w-8 lg:min-w-6"/>
                <h3 class="text-color6 font-montserrat text-lg leading-5 md:text-xl md:leading-6 text-center font-bold">
                  Partnership
                </h3>
              </div>
              <span class="text-parisianNight font-roboto text-lg leading-6 font-light lg:text-center 2sm:text-left text-center">
                We nurture the best client partnerships through{" "}
                <strong class="font-bold">strong bonds of trust</strong> and
                personalized relationships.
              </span>
            </div>
            <div class="flex max-w-[320px] flex-col py-3.5 2sm:max-w-[240px] md:items-start md:pb-4 md:pt-6 lg:max-w-[320px] lg:items-center">
              <div class="mb-3 flex flex-row items-center justify-center align-middle lg:mb-6">
                
                <h3 class="text-color6 font-montserrat text-lg leading-5 md:text-xl md:leading-6 text-center font-bold">
                  Seniority
                </h3>
              </div>
              <span class="text-parisianNight font-roboto text-lg leading-6 font-light lg:text-center 2sm:text-left text-center">
                We will add value to your business with a team of{" "}
                <strong class="font-bold">pragmatic and productive</strong>{" "}
                Senior engineers who are ready for any challenge.
              </span>
            </div>
            <div class="flex max-w-[320px] flex-col py-3.5 2sm:max-w-[240px] md:items-start md:pb-4 md:pt-6 lg:max-w-[320px] lg:items-center">
              <div class="mb-3 flex flex-row items-center justify-center align-middle lg:mb-6">
                
                <h3 class="text-color6 font-montserrat text-lg leading-5 md:text-xl md:leading-6 text-center font-bold">
                  High Quality
                </h3>
              </div>
              <span class="text-parisianNight font-roboto text-lg leading-6 font-light lg:text-center 2sm:text-left text-center">
                With top performance in mind, we code applying the best
                practices to ensure{" "}
                <strong class="font-bold">scalability and elasticity</strong> of
                your software.
              </span>
            </div>
            <div class="flex max-w-[320px] flex-col py-3.5 2sm:max-w-[240px] md:items-start md:pb-4 md:pt-6 lg:max-w-[320px] lg:items-center">
              <div class="mb-3 flex flex-row items-center justify-center align-middle lg:mb-6">
                
                <h3 class="text-color6 font-montserrat text-lg leading-5 md:text-xl md:leading-6 text-center font-bold">
                  Passion
                </h3>
              </div>
              <span class="text-parisianNight font-roboto text-lg leading-6 font-light lg:text-center 2sm:text-left text-center">
                We code because we enjoy it. No matter how big the challenge,
                for us it’s like{" "}
                <strong class="font-bold">
                  playing the game on hard mode!
                </strong>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
