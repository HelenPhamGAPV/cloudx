const HorizontalList = ({ project }) => {
  return (
    <>
      {project ? (
        <div
          class="px-5 py-10 pb-8 pt-6 sm:px-8 lg:pb-12 lg:pt-10"
          style={{ backgroundColor: "rgb(246, 246, 246)" }}
        >
          <h2
            class="text-blue-500f mb-8 text-center font-montserrat text-2xl font-bold leading-5 md:text-3xl md:leading-[34px]"
            style={{ color: "rgb(48, 60, 66)" }}
          >
            {project.title}
          </h2>
          <div class="flex flex-wrap content-center items-center justify-center gap-4 self-stretch">
            {project.content.length > 0 &&
              project.content.map((item, index) => (
                <div
                  class="leading-sm text-persianNight-100 mx-2 inline-flex items-center rounded-full border border-holyGlen-100 px-3 py-1 text-xs uppercase"
                  style={{
                    color: "rgb(92, 116, 231)",
                    borderColor: "rgb(190, 199, 244)",
                  }}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HorizontalList;
