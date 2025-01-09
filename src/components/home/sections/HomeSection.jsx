import { HiChevronDown } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export default function HomeSection({ sectionsRefs }) {
  function scrollToSectionRef(sectionRef) {
    sectionRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <section
        ref={sectionsRefs['home']}
        id="home"
        className="before:bg-grey-transparent-dark before:absolute before:inset-0 before:z-0 relative h-screen text-white bg-white bg-miguel bg-contain bg-no-repeat bg-bottom font-roboto sm:bg-right-bottom lg:before:bg-grey-transparent">
        <div className="relative flex flex-col justify-center text-center h-full z-10 lg:w-8/12 xl:w-9/12">
          <h2 className="text-5xl font-thin mb-4 sm:text-6xl xl:text-7xl">Hello, I&apos;m</h2>
          <h1 className="text-5xl font-bold mb-8 sm:text-6xl xl:text-7xl">Miguel Santamaria</h1>
          <h3 className="text-2xl font-thin mb-20 sm:text-3xl xl:text-4xl">
            and this is my resume.
          </h3>
          <div className="flex items-center bg-white text-black cursor-pointer w-12 h-12 rounded-full mx-auto transition-colors duration-300 hover:bg-white hover:text-black lg:bg-dark-grey lg:text-white xl:w-16 xl:h-16">
            <HiChevronDown
              className="mx-auto size-8 xl:size-12"
              onClick={() => scrollToSectionRef(sectionsRefs['about'])}
            />
          </div>
        </div>
      </section>
    </>
  );
}

HomeSection.propTypes = {
  sectionsRefs: PropTypes.object.isRequired
};
