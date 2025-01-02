export default function Remarker({ data }) {
  return (
    <>
      {data ? (
         <div class="flex flex-col flex-wrap gap-6 bg-white p-5 py-10 lg:flex-row lg:justify-center lg:py-12">
         <div class="mx-auto flex w-full max-w-6xl flex-row flex-wrap justify-center gap-x-12 gap-y-8 lg:justify-between">
           <div>
             <h2 class="pb-6 font-montserrat text-2xl font-bold leading-9 md:text-4xl bg-gradient-to-r from-primary300 to-cxPurple100 bg-clip-text text-transparent">
               {data.content1}
             </h2>
             <h2 class="font-montserrat text-2xl font-light leading-9 tracking-wider text-parisianNight-900 md:text-4xl">
               {data.content2}
             </h2>
           </div>
           <div class="relative bottom-[-10px] mt-auto w-fit rounded-full p-[2px] lg:ml-5 gradient_contact">
             <a
               class="inline-flex items-center border-b-2 border-transparent border-gradient-to-r from-primary300 to-cxPurple100 text-lg font-bold rounded-full bg-white text-parisianNight hover:text-gray-700 px-12 py-2"
               href={data.url}
             >
               {data.button}
             </a>
           </div>
         </div>
       </div>
      ) : (
        <div class="flex flex-col flex-wrap gap-6 bg-white p-5 py-10 lg:flex-row lg:justify-center lg:py-12">
          <div class="mx-auto flex w-full max-w-6xl flex-row flex-wrap justify-center gap-x-12 gap-y-8 lg:justify-between">
            <div>
              <h2 class="pb-6 font-montserrat text-2xl font-bold leading-9 md:text-4xl bg-gradient-to-r from-primary300 to-cxPurple100 bg-clip-text text-transparent">
                Just one step closer...
              </h2>
              <h2 class="font-montserrat text-2xl font-light leading-9 tracking-wider text-parisianNight-900 md:text-4xl">
                Find the best solution for your project
              </h2>
            </div>
            <div class="relative bottom-[-10px] mt-auto w-fit rounded-full p-[2px] lg:ml-5 gradient_contact">
              <a
                class="inline-flex items-center border-b-2 border-transparent border-gradient-to-r from-primary300 to-cxPurple100 text-lg font-bold rounded-full bg-white text-parisianNight hover:text-gray-700 px-12 py-2"
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
