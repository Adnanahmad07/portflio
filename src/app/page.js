import Hero from "./components/homecomp/Hero";
import Homeabout from "./components/homecomp/Homeabout";
import Gellery from "./components/homecomp/Gellery.jsx";
import Circle from "./components/homecomp/Circle.jsx";
import Education from "./components/homecomp/Education.jsx";
import Faqs from "./components/homecomp/Faqs.jsx";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Homeabout />
      <Gellery />
      <div className="w-full bg-white dark:bg-black  py-16 ">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
            CIRCLE
          </h2>
          <p
            className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-[1rem]"
          >
            People I collaborate and grow with
          </p>
        </div>
        <Circle />



      </div>
      <Education />





      <div className="text-center  mt-[3rem]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
          CIRCLE
        </h2>
        <p
          className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-[1rem]"
        >
          People I collaborate and grow with
        </p>
      </div>
      <Faqs />


    </div>
  );
}


