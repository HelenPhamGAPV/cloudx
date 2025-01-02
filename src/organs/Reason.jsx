import { Text } from "../atoms/Text";
import { ReasonText } from "../particles/DataLists";
import { Button } from "../atoms/Button";
import { Play } from "@phosphor-icons/react";
import { Fade, Slide } from "react-awesome-reveal";
import Markable from "./Markable";

const Reason = ({ reason, kind, img }) => {
  return (
    <>
      {reason ? (
        <section className="w-full lg:h-[80vh] md:h-[550px] h-[830px] relative overflow-x-hidden overflow-y-hidden flex justify-end mt-8">
          {kind === 0 ? (
            <div className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
              <div className="flex flex-col justify-start md:gap-6 gap-3 md:order-1 order-2">
                <Text
                  as="h3"
                  className="text-color3 lg:text-4xl md:text-3xl text-2xl font-medium border-color6 border-b-2"
                >
                  {reason.title}
                </Text>
                <Text
                  as="h4"
                  className=" text-color3 lg:text-2xl md:text-xl text-l font-medium"
                >
                  <Fade>{reason.title1}</Fade>
                </Text>
                {reason.content.map((item, index) => (
                  <Text
                    as="p"
                    className="text-color3 md:text-base text-sm text-justify font-light"
                  >
                    <Fade>{item}</Fade>
                  </Text>
                ))}
              </div>
              <div className="flex flex-col justify-start items-end md:order-1 order-2">
                <img
                  src={img}
                  className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
              <div className="flex flex-col justify-start md:order-1 order-2">
                <img
                  src={img}
                  className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] object-cover"
                />
              </div>
              <div className="flex flex-col items-right md:gap-6 gap-3 md:order-2 order-1">
                <Text
                  as="h3"
                  className="text-color3 lg:text-4xl md:text-3xl text-2xl font-medium border-color6 border-b-2"
                >
                  {reason.title}
                </Text>
                <Text
                  as="h4"
                  className=" text-color3 lg:text-2xl md:text-xl text-l font-medium"
                >
                  <Fade>{reason.title1}</Fade>
                </Text>
                {reason.content.map((item, index) => (
                  <Text
                    as="p"
                    className="text-color3 md:text-base text-sm text-justify font-light"
                  >
                    <Fade>{item}</Fade>
                  </Text>
                ))}
              </div>
            </div>
          )}

          {/* <Markable/> */}
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Reason;
