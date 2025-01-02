import moment from "moment";

import watch from "../assets/watch.svg";
import person from "../assets/person.svg";
import calendar from "../assets/calendar.svg";

const FeaturedForm = ({ title, backgroundImage, data }) => {

  return (
    <>
      {data ? (
        <div class="mx-auto">
          <div class="flex w-full justify-center sm:justify-start">
            <h2 class="relative w-auto max-w-fit border-b-2 border-b-color6 px-6 pb-2 pt-1 text-center font-montserrat text-2xl font-bold text-parisianNight after:absolute after:bottom-[-1px] after:left-[24px] after:w-[calc(100%-48px)] after:border-b-2 after:border-b-color6 after:content-[''] md:pb-4 md:pl-0 md:pr-[72px] md:pt-2 md:text-[40px] md:leading-[48px] after:md:left-0 after:md:w-[calc(100%-72px)]">
              {title}
            </h2>
          </div>
          <div class="my-12 flex w-full flex-col">
            <img
              alt=""
              data-nimg="1"
              loading="lazy"
              width="1160"
              height="475"
              decoding="async"
              class="aspect-square max-h-[320px] w-full rounded-lg bg-gray-100 object-cover"
              sizes="100vw"
              style={{ color: "transparent", width: "100%", height: "auto" }}
              src={backgroundImage}
            />
          </div>
          {data.map((item, index) => (
            <div class="flex flex-col justify-center" key={index}>
              <h2 class="mb-2 font-montserrat text-2xl font-semibold leading-10 text-black lg:text-4xl">
                {item.title}
              </h2>
              <div class="mt-6 flex flex-col justify-between gap-y-4 md:flex-row">
                <div class="relative flex items-center gap-x-2">
                  <img src={person} className="mr-1 h-5 w-5 orange-color" />
                  <div class="flex flex-row font-roboto text-lg font-light leading-6 text-parisianNight-500">
                    <p class="font-semibold">{item.author}</p>
                    <p class="size ml-2">{item.position}</p>
                  </div>
                </div>
                <div class="ml-0 flex items-center gap-x-4 text-parisianNight-500 md:ml-auto">
                  <div class="flex flex-row items-center">
                    <img src={calendar} className="mr-1 h-5 w-5 orange-color" />
                    <time class="ml-2 font-light">
                      {moment(item.time).format("DD/MM/YYYY")}
                    </time>
                  </div>
                  <div class="flex flex-row items-center">
                    <img src={watch} className="mr-1 h-5 w-5 orange-color" />
                    <span class="ml-2 font-light">{item.readingTime}</span>
                  </div>
                </div>
              </div>
              <div>
                <p class="mt-5 font-roboto text-xl font-light leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
              <div class="my-4 flex flex-row justify-end">
                <a
                  class="min-w-max rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:text-primary-800 hover:ring-primary-800"
                  href={`/blog/${item.id}`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FeaturedForm;
