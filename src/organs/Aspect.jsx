const Aspect = ({ data }) => {
  return (
    <div class="bg-white">
      {data ? (
        <div class="flex flex-col lg:mx-6 lg:flex-row">
          <div class="lg:hidden">
            <img
              alt="Navigating Karvi's website on a mobile phone"
              loading="lazy"
              width="840"
              height="840"
              decoding="async"
              data-nimg="1"
              class="w-full object-cover"
              style={{ color: "transparent" }}
              src={data.img}
            />
          </div>
          <div class="hidden w-1/2 lg:flex">
            <img
              alt="Navigating Karvi's website on a mobile phone"
              loading="lazy"
              width="1200"
              height="1200"
              decoding="async"
              data-nimg="1"
              class="w-full object-cover"
              style={{ color: "transparent" }}
              src={data.img}
            />
          </div>
          <div class="flex flex-col gap-6 px-5 py-6 pb-8 sm:px-8 lg:w-1/2 lg:max-w-xl lg:py-16 lg:pb-16 lg:pr-0">
            <h2 class="text-left font-montserrat text-3xl font-bold sm:text-4xl md:leading-[34px] lg:mb-12">
              {data.title}
            </h2>
            <div class="flex flex-col gap-10">
              {data.content.map((item, index) => (
                <div class="flex flex-row gap-4" key={index}>
                  <div
                    class="flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-md"
                    style={{backgroundImage: "linear-gradient(80deg, rgb(255, 99, 27) -12.43%, rgb(216, 59, 133) 96.67%, rgb(178, 20, 234) 200.66%)"}}
                  >
                    <span class="font-montserrat text-2xl font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="font-montserrat text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p class="font-roboto text-lg lg:text-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Aspect;
