import partnershipBuilders from "../assets/partnership-builders.svg"
import peopleFirst from "../assets/people-first.svg"
import minimum from "../assets/minimum-viable-bureaucracy.svg"
import challenge from "../assets/challenge-motivated.svg"



const DetailValue = () => {
  return (
    <section>
      <div class="hidden lg:flex lg:flex-col">
        <div class="relative">
          <div class="m-auto flex min-h-[400px] max-w-6xl flex-col justify-center">
            <div class="flex">
              <div class="w-[50%] px-6">
                <h2 class="text-parisianNight font-montserrat font-bold w-auto max-w-fit text-center text-2xl md:text-4xl md:leading-10 pt-1 pb-2 md:pt-2 md:pb-4 relative border-b-2 border-b-primary-550 after:content-[''] after:absolute after:bottom-[-1px] after:border-b-2 after:border-b-primary-500 pr-6 after:left-0 after:w-[calc(100%-24px)] paddingLeft paddingRight ::after">
                  Our Values
                </h2>
                <div class="mt-10 flex w-full justify-between">
                  <div class="flex w-full flex-col">
                    <h3 class="text-parisianNight font-roboto font-bold text-xl md:text-3xl leading-5 md:leading-8 text-left mb-6">
                      Developer-centric
                    </h3>
                    <p class="text-parisianNight font-roboto text-base lg:text-2xl font-light mb-10">
                      We empower our people to become experts in their fields.
                      We encourage people to thrive, be themselves and grow
                      professionally while staying close to technology.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-[50%]"></div>
            </div>
          </div>
          <div class="absolute top-0 min-h-[400px] w-full lg:flex">
            <div class="w-[50%]"></div>
            <div class="relative w-[50%]">
              <div
                class="absolute flex h-full w-full flex-col justify-center bg-gradient-to-r from-[#FF51001A] to-[#FF510040]"
              >
                <div class="relative flex h-[80%] justify-center">
                  <img
                    alt="illustrations"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    src={peopleFirst}
                    style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="m-auto flex min-h-[400px] max-w-6xl flex-col justify-center">
            <div class="flex">
              <div class="w-[50%]"></div>
              <div class="w-[50%] px-6 pl-14">
                <div class="mt-10 flex w-full justify-between">
                  <div class="flex w-full flex-col">
                    <h3 class="text-parisianNight font-roboto font-bold text-xl md:text-3xl leading-5 md:leading-8 text-left mb-6">
                      Partnership-builders
                    </h3>
                    <p class="text-parisianNight font-roboto text-base lg:text-2xl font-light mb-10">
                      We are committed to deliver the proper technology
                      solutions for your business needs and strategy. Our goal
                      is to build long-lasting bonds of trust as ideal
                      technology partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-0 min-h-[400px] w-full lg:flex">
            <div class="relative w-[50%]">
              <div
                class="absolute flex h-full w-full flex-col justify-center bg-gradient-to-r from-[#48A3C640] to-[#48A3C61A]"
                // style="--gradient-from: #48A3C61A; --gradient-to: #48A3C640;"
              >
                <div class="relative flex h-[80%] justify-center">
                  <img
                    alt="illustrations"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    src={partnershipBuilders}
                    style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                  />
                </div>
              </div>
            </div>
            <div class="w-[50%]"></div>
          </div>
        </div>
        <div class="relative">
          <div class="m-auto flex min-h-[400px] max-w-6xl flex-col justify-center">
            <div class="flex">
              <div class="w-[50%] px-6">
                <div class="mt-10 flex w-full justify-between">
                  <div class="flex w-full flex-col">
                    <h3 class="text-parisianNight font-roboto font-bold text-xl md:text-3xl leading-5 md:leading-8 text-left mb-6">
                      Minimum viable bureaucracy
                    </h3>
                    <p class="text-parisianNight font-roboto text-base lg:text-2xl font-light mb-10">
                      Our talent force is organized as autonomous teams composed
                      almost exclusively of Senior tech experts. We add value to
                      our clients with efficiency, using lightweight processes,
                      without the need for supervision overhead.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-[50%]"></div>
            </div>
          </div>
          <div class="absolute top-0 min-h-[400px] w-full lg:flex">
            <div class="w-[50%]"></div>
            <div class="relative w-[50%]">
              <div
                class="absolute flex h-full w-full flex-col justify-center bg-gradient-to-r from-[#35A18B1A] to-[#35A18B40]"
                // style="--gradient-from: #35A18B1A; --gradient-to: #35A18B40;"
              >
                <div class="relative flex h-[80%] justify-center">
                  <img
                    alt="illustrations"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    src={minimum}
                    style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="m-auto flex min-h-[400px] max-w-6xl flex-col justify-center">
            <div class="flex">
              <div class="w-[50%]"></div>
              <div class="w-[50%] px-6 pl-14">
                <div class="mt-10 flex w-full justify-between">
                  <div class="flex w-full flex-col">
                    <h3 class="text-parisianNight font-roboto font-bold text-xl md:text-3xl leading-5 md:leading-8 text-left mb-6">
                      Challenge-motivated
                    </h3>
                    <p class="text-parisianNight font-roboto text-base lg:text-2xl font-light mb-10">
                      We are driven by challenges, we enjoy playing the game on
                      hard mode. We are always ready for the next adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-0 min-h-[400px] w-full lg:flex">
            <div class="relative w-[50%]">
              <div
                class="absolute flex h-full w-full flex-col justify-center bg-gradient-to-r from-[#A259FF1A] to-[#A259FF40]"
                // style="--gradient-from: #A259FF1A; --gradient-to: #A259FF40;"
              >
                <div class="relative flex h-[80%] justify-center">
                  <img
                    alt="illustrations"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    src={challenge}
                    style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent"}}
                  />
                </div>
              </div>
            </div>
            <div class="w-[50%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailValue;
