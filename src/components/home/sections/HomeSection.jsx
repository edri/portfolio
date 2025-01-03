import { ChevronDownIcon } from '@heroicons/react/24/solid';
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
        className="before:bg-grey-transparent before:absolute before:inset-0 before:z-0 relative h-screen text-white bg-white bg-miguel bg-contain bg-no-repeat bg-right-bottom font-roboto">
        <div className="relative flex flex-col justify-center text-center h-full z-10 w-8/12 xl:w-9/12">
          <h2 className="text-6xl font-thin mb-4 xl:text-7xl">Hello, I&apos;m</h2>
          <h1 className="text-6xl font-bold mb-8 xl:text-7xl">Miguel Santamaria</h1>
          <h3 className="text-3xl font-thin mb-20 xl:text-4xl">and this is my resume.</h3>
          <div className="flex items-center bg-dark-grey cursor-pointer w-12 h-12 rounded-full mx-auto transition-colors duration-300 hover:bg-white hover:text-black xl:w-16 xl:h-16">
            <ChevronDownIcon
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
