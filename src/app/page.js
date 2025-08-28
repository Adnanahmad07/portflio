import Hero from "./components/homecomp/Hero";
import Homeabout from "./components/homecomp/Homeabout";
import Gellery from "./components/homecomp/Gellery.jsx";
import Circle from "./components/homecomp/Circle.jsx";
import Education from "./components/homecomp/Education.jsx";
import Faqs from "./components/homecomp/Faqs.jsx";
import Testimonia from "./components/homecomp/Testimonia.jsx";
import Contact from "./components/homecomp/Contact.jsx";
import Copywrite from "./components/homecomp/Copywrite.jsx";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Homeabout />
      <Gellery />

      {/* Circle Section */}
      <div className="w-full bg-white dark:bg-black py-16">
        <div className="text-center mb-10">
          {/* Desktop Heading */}
          <h2 className="hidden sm:block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
            CIRCLE
          </h2>
          {/* Mobile Heading */}
          <h2 className="block sm:hidden text-2xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
            CIRCLE
          </h2>

          {/* Desktop Subheading */}
          <p className="hidden sm:block mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-[1rem]">
            People I collaborate and grow with
          </p>
          {/* Mobile Subheading */}
          <p className="block sm:hidden mt-2 text-sm text-gray-600 dark:text-gray-300 tracking-widest">
            My collaborators
          </p>
        </div>
        <Circle />
      </div>

      <Education />

      {/* Circle Section Again */}
      <div className="text-center mt-[3rem]">
        {/* Desktop Heading */}
        <h2 className="hidden sm:block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
          CIRCLE
        </h2>
        {/* Mobile Heading */}
        <h2 className="block sm:hidden text-2xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
          CIRCLE
        </h2>

        {/* Desktop Subheading */}
        <p className="hidden sm:block mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-[1rem]">
          People I collaborate and grow with
        </p>
        {/* Mobile Subheading */}
        <p className="block sm:hidden mt-2 text-sm text-gray-600 dark:text-gray-300 tracking-widest">
          MY COLLABORATORS
        </p>
      </div>

      <Faqs />
      <Testimonia />
      <Contact />
      <Copywrite />
    </div>
  );
}
