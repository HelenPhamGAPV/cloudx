const HorizontalList2 = ({ project, style }) => {
  return (
    <>
      {project ? (
        <div style={{ backgroundColor: "rgb(87, 113, 231)" }}>
          {style === "small" ? (
            <div class="mx-auto max-w-2xl px-5 pb-8 pt-6 sm:pb-8 sm:pt-6 lg:max-w-6xl lg:py-10 lg:pb-12 lg:pt-10">
              <h2
                class="mb-8 text-center font-montserrat text-2xl font-bold leading-5 md:text-[28px] md:leading-[34px] lg:text-3xl"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                {project.title}
              </h2>
              <div class="flex flex-wrap justify-center gap-4 self-stretch text-center lg:justify-between">
                {project.content.map((item, index) => (
                  <div class="flex items-center gap-3">
                    <img
                      src={item.img}
                      className="w-10 min-w-10 text-primary-500"
                      style={{ color: "rgb(255, 255, 255)" }}
                    />
                    <div
                      class="font-roboto text-xl font-semibold"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div class="mx-auto max-w-7xl px-5 pb-8 pt-6 lg:px-8 lg:py-10">
              <h2
                class="mb-6 text-center font-montserrat text-3xl font-bold lg:mb-10 lg:text-3xl"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                {project.title}
              </h2>
              <div class="flex flex-col flex-wrap items-center justify-center gap-5 self-stretch lg:flex-row lg:gap-7">
                {project.content.map((item, index) => (
                  <div class="flex flex-col items-center gap-2 lg:flex-grow" key={index}>
                    <div
                      class="font-montserrat text-5xl font-bold"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      {item.static}
                    </div>
                    <div
                      class="font-roboto text-xl"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HorizontalList2;
