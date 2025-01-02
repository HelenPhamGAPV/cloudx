import star from "../assets/star.svg";

const MarableItem = ({ number, img = "", addition = "", category }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-start">
        <p class="bg-gradient-to-r from-[#FF631B] via-[#D83B85] to-[#B214EA] bg-clip-text font-montserrat text-3xl font-medium text-primary-500 text-transparent lg:text-6xl">
          {number}
        </p>
        {addition ? (
          <p className="ml-4 bg-gradient-to-r from-[#FF631B] to-[#D83B85] bg-clip-text font-montserrat text-sm text-primary-500 text-transparent 3sm:text-xl 2sm:text-2xl lg:text-4xl">
            {addition}
          </p>
        ) : (
          <></>
        )}
        {img ? (
          <img
            className="ml-0 mt-2 w-[32px] min-w-[32px] text-cxPurple 3sm:ml-2 3sm:h-8 2sm:h-10 lg:w-[40px] lg:min-w-[40px]"
            src={img}
            alt="My Happy SVG"
          />
        ) : (
          <></>
        )}
      </div>
      <p class="text-sm max-h-[20px] w-20 font-roboto font-semibold 3sm:w-40 3sm:text-lg 2sm:w-40">
        {category}
      </p>
    </div>
  );
};
const Markable = () => {
  return (
    <section className="relative w-full bg-gray-100 bg-gradient-radial from-[#FF51000D] to-[#FF510026]">
      <div className="relative max-h-[747px]">
        <div className="max-w-1xl mx-auto h-96 3sm:h-80 1sm:h-[26rem] sm:h-[22rem] md:h-[22rem] md:max-w-2xl lg:h-[26rem] lg:max-w-3xl xl:h-80">
          <div className="mx-auto py-3 3sm:py-3 lg:py-6">
            <div className="grid grid-cols-2 place-items-center gap-10 3sm:gap-x-0 3sm:pl-5 3sm:pr-5 md:mt-0 md:gap-x-1 md:pl-5 md:pr-5 lg:grid-cols-2 lg:gap-x-48 xl:mt-5 xl:grid-cols-3 xl:pl-0 xl:pr-0">
              <MarableItem number="87" category="NPS score" />
              <MarableItem number="5" img={star} category="in Clutch reviews" />
              <MarableItem number="270" category="executed projects" />
              <MarableItem number="48" category="ongoing projects" />
              <MarableItem
                number="+12"
                category="years our experience"
              />
              <MarableItem
                number="<7"
                addition="%"
                category="annualized attrition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markable;
