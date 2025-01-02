const Card2 = ({ content, key }) => {
    return (
      <>
        {content ? (
          <a href={content.url} key={key}>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg">
                <img
                  alt="Karvi Automotive Marketplace"
                  _type="imageType"
                  loading="lazy"
                  width="1280"
                  height="853"
                  decoding="async"
                  data-nimg="1"
                  class="h-[192px] w-full rounded-t-lg object-cover"
                  style={{ color: "transparent" }}
                  src={content.img}
                />
                <div class="flex flex-col gap-3 px-4 py-5 lg:p-6">
                  <h3 class="font-montserrat text-xl font-bold">
                    {content.title}
                  </h3>
                  <p class="font-roboto text-lg font-light">
                    {content.desc}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ) : (
          <></>
        )}
      </>
    );
  };
  
  export default Card2;
  