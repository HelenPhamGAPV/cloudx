import img from "../assets/genaiDetail.png";

const DescForm2 = ({ desc }) => {
  return (
    <section
      class="w-full px-7 py-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12"
      style={{backgroundColor: "rgb(246, 246, 246)"}}
    >
      {desc ? (
        <div class="m-auto flex max-w-6xl flex-col gap-6 lg:gap-10 xl:px-6">
          <div class="flex justify-start">
            <h2
              class="text-parisianNight font-montserrat font-bold w-auto max-w-fit text-center text-2xl md:text-4xl md:leading-10 pt-1 pb-2 md:pt-2 md:pb-4 relative border-b-2 border-color6 after:content-[''] after:absolute after:bottom-[-1px] after:border-b-2 after:border-color6 pr-6 after:left-0 after:w-[calc(100%-24px)] paddingLeft paddingRight ::after"
              style={{color: "rgb(48, 60, 66)"}}
            >
              {desc.header}
            </h2>
          </div>
          <h3 class="font-montserrat text-xl text-parisianNight md:text-3xl font-bold">
            {desc.subheader}
          </h3>
          <div class="flex w-full flex-row gap-6 sm:gap-8 lg:gap-12 flex-wrap">
            <div
              class="flex flex-col justify-center flex-grow flex-shrink"
              style={{flexBasis: "550px"}}
            >
              <div class="flex flex-col gap-6 lg:gap-10">
                {desc.paragraph.map((item, index) => (
                  <p
                    key={index}
                    class="w-full font-roboto text-base font-light lg:text-2xl"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div
              class="flex flex-col justify-start flex-grow flex-shrink ml-auto mr-auto"
              style={{flexBasis: "363px"}}
            >
              <div class="flex flex-col gap-6 lg:gap-10">
                <figure>
                  <img
                    alt="Talk to Enterprise: a use case of Generative AI Agents"
                    loading="lazy"
                    width="1132"
                    height="919"
                    decoding="async"
                    data-nimg="1"
                    class="w-full rounded-xl bg-gray-50"
                    style={{color: "transparent"}}
                    src={desc.img}
                  />
                  <figcaption class="mt-2 flex gap-x-2 text-sm leading-6 text-gray-500">
                    {desc.caption.img ? <img className="mt-0.5 h-5 w-5 flex-none text-gray-300" src={desc.caption.img} /> : <></>}
                    {desc.caption.content}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default DescForm2;
