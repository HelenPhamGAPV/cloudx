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
const Description = ({ desc, theme }) => {
  return (
    <section
      className={`w-full bg-${themeList[`${theme}`].bg} text-${
        themeList[`${theme}`].text
      }`}
    >
      {desc ? (
        <div class="m-auto flex max-w-6xl flex-col justify-center items-center py-10 px-6">
          <div class="w-full">
            <h2 class="text-parisianNight font-montserrat font-bold w-auto max-w-fit text-center text-2xl md:text-4xl md:leading-10 pt-1 pb-2 md:pt-2 md:pb-4 relative border-b-2 border-color6 after:content-[''] after:absolute after:bottom-[-1px] after:border-b-2 after:border-color6 pr-6 after:left-0 after:w-[calc(100%-24px)] paddingLeft paddingRight ::after">
              {desc.header}
            </h2>
            <div class="mt-8 w-full lg:mt-16 lg:flex lg:justify-between">
              <div class="flex w-full flex-col">
                <h3 class="text-parisianNight font-roboto font-bold text-xl md:text-3xl leading-5 md:leading-8 text-left mb-4 lg:mb-10">
                  {desc.subheader}
                </h3>
                {desc.paragraph.map((item, index) => (
                  <p
                    key={index}
                    class="text-parisianNight font-roboto text-base lg:text-2xl font-light mb-4 lg:mb-10"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div class="mx-auto grid w-full grid-flow-row grid-cols-5 gap-x-4 gap-y-6 2sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[22px]">
            {desc.addition.length > 0 &&
              desc.addition.map((item, index) => (
                <div
                  key={index}
                  class="flex flex-row items-center justify-start text-parisianNight"
                >
                  <img
                    src={item.img}
                    className="mr-2 h-9 w-9 ListItems_ListItemIcon__JEBXv"
                  />
                  <h3 class="text-left font-roboto text-lg font-light leading-5 2sm:block md:text-[28px] md:leading-[34px]">
                    {item.name}
                  </h3>
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

export default Description;
