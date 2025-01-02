const themeList = {
  dark: {
    bg: "black500",
    text: "white",
  },
  white: {
    bg: "white",
    text: "black500",
  },
  gray: {
    bg: "gray100",
    text: "black500",
  },
};

const Solution = ({ data, theme }) => {
  return (
    <section
      class={`w-full px-7 py-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12 bg-${
        themeList[`${theme}`].bg
      } text-${themeList[`${theme}`].text}`}
      //   style="background-color: rgb(19, 26, 34);"
    >
      {data ? (
        <div class="m-auto flex max-w-6xl flex-col gap-6 lg:gap-10 xl:px-6">
          <div class="flex justify-center">
            <h2
              class="text-parisianNight font-montserrat font-bold w-auto max-w-fit text-center text-2xl md:text-4xl md:leading-10 pt-1 pb-2 md:pt-2 md:pb-4 relative border-b-2 border-b-color6 after:content-[''] after:absolute after:bottom-[-1px] after:border-b-2 after:border-b-color6 px-6 after:left-[24px] after:w-[calc(100%-48px)] paddingLeft ::after"
              //   style="color: rgb(255, 255, 255);"
            >
              {data.header}
            </h2>
          </div>
          <p class="w-full font-roboto text-base font-light lg:text-2xl">
            <span>{data.desc}</span>
          </p>
          <div class="mx-auto grid w-full grid-flow-row grid-cols-1 gap-5 md:gap-10 lg:grid-cols-3">
            {data.content.length > 0 &&
              data.content.map((item, index) => (
                <div
                  class="justify-top mx-auto flex flex-col rounded-lg bg-white p-6 shadow-md"
                  _key={index}
                  style={{color: "#000"}}
                >
                  <div class="mb-4 flex flex-row items-center justify-start">
                    <img
                      src={item.img}
                      className="ml-1 mr-2.5 mt-1 w-7 min-w-5 orange-color 2sm:w-8 lg:min-w-6"
                    />
                    <h5 class="font-montserrat text-[18px] font-bold leading-6 md:text-[21px]">
                      {item.title}
                    </h5>
                  </div>
                  <div class="text-left">
                    <p class="font-roboto text-lg font-light leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Solution;
