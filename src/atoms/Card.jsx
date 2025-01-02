const Card = ({content, key}) => {
  return (
    <div key={key} class="flex justify-center">
      <div class="relative flex h-[300px] max-w-lg flex-col rounded-2xl bg-white shadow-lg lg:w-[352px]">
        <div class="absolute left-5 top-[-25px] flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-gradient-to-r from-primary300 to-cxPurple100">
          <img src={content.img} className="h-8 w-8 icon-white-color"/>
        </div>
        <h1 class="mt-6 p-5 font-montserrat text-xl font-bold text-parisianNight lg:mt-5">
          {content.name}
        </h1>
        <div class="flex-1 overflow-y-auto">
          <p class="px-5 font-roboto text-lg font-light text-parisianNight">
            {content.desc}
          </p>
        </div>
        <div class="bottom-0 flex h-[72px] w-full items-center rounded-b-2xl bg-gray-100">
          <a
            class="pl-8 font-roboto text-base font-bold text-primary"
            href={content.url}
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
