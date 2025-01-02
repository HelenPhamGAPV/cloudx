import moment from "moment";
import watch from "../assets/watch.svg";
import person from "../assets/person.svg";
import calendar from "../assets/calendar.svg";

export default function BlogContent({ data, children }) {
  return (
    <div class="bg-white px-6 pb-24 lg:px-8">
      <div class="mx-auto max-w-5xl text-base leading-7 text-gray-700">
        <div class="mt-16">
          <div class="mt-6 flex flex-col justify-between gap-y-4 md:flex-row">
            <div class="relative flex items-center gap-x-2">
              <img src={person} className="mr-1 h-5 w-5 orange-color" />
              <div class="flex flex-row font-roboto text-lg font-light leading-6 text-parisianNight-500">
                <p class="font-semibold">{data.author}</p>
                <p class="size ml-2">{data.position}</p>
              </div>
            </div>
            <div class="ml-0 flex items-center gap-x-4 text-parisianNight-500 md:ml-auto">
              <div class="flex flex-row items-center">
                <img src={calendar} className="mr-1 h-5 w-5 orange-color" />
                <time class="ml-2 font-light">
                  {moment(data.time).format("DD/MM/YYYY")}
                </time>
              </div>
              <div class="flex flex-row items-center">
                <img src={watch} className="mr-1 h-5 w-5 orange-color" />
                <span class="ml-2 font-light">{data.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 flex flex-col gap-8">
          <p class="w-full font-roboto text-base font-light lg:text-2xl">
            {data.content.opening}
          </p>
          {data.content.middle.map((item, index) => {
            return (
              <>
                <p class="w-full font-roboto text-base font-light lg:text-2xl"></p>
                <h3 class="font-montserrat text-xl text-parisianNight md:text-3xl font-bold">
                  {item.header}
                </h3>
                {item.content.map((p, index) => (
                  <p
                    key={index}
                    class="w-full font-roboto text-base font-light lg:text-2xl"
                  >
                    {p}
                  </p>
                ))}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
