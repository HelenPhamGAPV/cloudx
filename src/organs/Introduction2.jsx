const Introduction2 = ({ intro }) => {
  console.log(intro);
  return (
    <div style={{ backgroundColor: "rgb(48, 60, 66)" }}>
      {intro ? (
        <div class="flex flex-col gap-10 px-5 pb-16 pt-[7.5rem] lg:flex-row lg:px-0">
          <div class="content-center lg:w-1/2 lg:pl-20">
            <div class="flex flex-col lg:float-right lg:max-w-xl">
              <div class="mb-6 flex items-center gap-4">
                {intro.cate.length > 0 &&
                  intro.cate.map((item, index) => (
                    <div
                      key={index}
                      class="leading-sm text-persianNight-100 inline-flex items-center rounded-full border border-holyGlen-100 px-3 py-1 text-xs uppercase"
                      style={{
                        color: "rgb(255, 255, 255)",
                        borderColor: "rgb(82, 104, 215)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
              </div>
              <h1 class="mb-5 font-montserrat text-3xl font-bold lg:text-4xl">
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  {intro.title}{" "}
                </span>
                <span style={{ color: "rgb(129, 140, 248)" }}>
                  {intro.mainTitle}
                </span>
              </h1>
              <p class="font-roboto text-xl text-white">
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  {intro.desc}
                </span>
              </p>
            </div>
          </div>
          <div class="flex flex-1 shrink-0 justify-center lg:w-1/2">
            <img
              alt="Screenshots from Karvi's website"
              loading="lazy"
              width="1064"
              height="1016"
              decoding="async"
              data-nimg="1"
              class="max-h-[520px] w-full max-w-lg rounded object-cover"
              style={{ color: "transparent" }}
              src={intro.img}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Introduction2;
