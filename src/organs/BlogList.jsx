import moment from "moment";
import watch from "../assets/watch.svg";
import person from "../assets/person.svg";
import calendar from "../assets/calendar.svg";

export default function BlogList({ className, children, data, onClick, ...rest }) {
  return (
    <article class="relative isolate flex flex-col gap-8 lg:flex-row" onClick={onClick}>
      <div class="flex w-full max-w-full flex-col lg:max-w-sm">
        <img
          alt="The power of UX/UI in today's market"
          loading="lazy"
          width="1440"
          height="469"
          decoding="async"
          data-nimg="1"
          className="aspect-square max-h-[320px] w-full rounded-lg bg-gray-100 object-cover"
          style={{ color: "transparent" }}
          src={data.img}
        />
      </div>
      <div class="flex flex-1 flex-col">
        <div class="group relative flex flex-1 flex-col">
          <h3 class="mt-2 font-montserrat text-2xl font-semibold leading-10 text-black lg:text-4xl">
            {data.title}
          </h3>
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
          <div>
            <p class="mt-5 font-roboto text-xl font-light leading-8 text-gray-600">
                {data.desc}
            </p>
          </div>
        </div>
        <div class="my-2 flex justify-end">
          <a
            class="min-w-max rounded-full px-5 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:text-primary-800 hover:ring-primary-800"
            href="/blog/the-power-of-ux-ui-in-todays-market"
          >
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}