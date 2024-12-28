import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Line from '../components/common/Line';
import NavBar from '../components/common/Nav/NavBar';
import { useRef } from 'react';

export default function Home() {
  const sectionsRefs = {
    home: useRef(),
    resume: useRef(),
    portfolio: useRef(),
    about: useRef(),
    contact: useRef()
  };

  function scrollToSectionRef(sectionRef) {
    sectionRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <>
      <NavBar sectionsRefs={sectionsRefs} />
      <section
        ref={sectionsRefs['home']}
        id="home"
        className="before:bg-grey-transparent before:absolute before:inset-0 before:z-0 relative h-screen text-white bg-white bg-miguel bg-contain bg-no-repeat bg-right-bottom font-roboto">
        <div className="relative flex flex-col justify-center text-center h-full z-10 w-8/12 xl:w-9/12">
          <h2 className="text-6xl font-thin mb-4 xl:text-7xl">Hello, I&apos;m</h2>
          <h1 className="text-6xl font-bold mb-8 xl:text-7xl">Miguel Santamaria</h1>
          <h3 className="text-3xl font-thin mb-20 xl:text-4xl">and this is my resume.</h3>
          <div className="flex items-center bg-dark-grey cursor-pointer w-12 h-12 rounded-full mx-auto transition-colors duration-300 hover:bg-dark-brown xl:w-16 xl:h-16">
            <ChevronDownIcon
              className="mx-auto size-8 xl:size-12"
              onClick={() => scrollToSectionRef(sectionsRefs['resume'])}
            />
          </div>
        </div>
      </section>
      {/* TODO Miguel : refactor */}
      <section
        ref={sectionsRefs['resume']}
        id="resume"
        className="scroll-mt-24 text-white px-48 py-12">
        <h1 className="text-3xl font-bold mb-1.5">Resume</h1>
        <Line />
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus non augue sed
            porttitor. Curabitur eu vulputate sapien, ac varius mi. Aliquam sed turpis eu justo
            porttitor dapibus et a massa. Fusce rhoncus, dolor gravida sollicitudin laoreet, velit
            orci molestie felis, eget egestas sem quam quis massa. Duis consectetur, lorem vel
            hendrerit semper, turpis leo dictum dui, nec efficitur dolor tortor vitae elit. In vel
            sagittis quam, nec laoreet neque. Morbi elementum tempor tempor.
          </p>
          <p>
            Nulla vitae lectus vitae eros fringilla mollis. Quisque diam arcu, maximus facilisis
            justo vehicula, semper semper erat. Maecenas id ipsum vel ex ornare porta. Cras eleifend
            quis magna ut elementum. Nam sollicitudin tortor vitae magna consectetur iaculis. Proin
            condimentum lectus in augue blandit, tincidunt pharetra odio efficitur. Quisque in diam
            eget ante congue malesuada non ac metus. Mauris accumsan nunc diam, ac volutpat nisi
            sagittis sit amet. Vivamus ultrices quam dolor, ac mollis sem commodo ut. Nam tempor
            urna feugiat est scelerisque condimentum. Nam suscipit est orci, sed ornare velit
            venenatis eget. Suspendisse quis nulla malesuada, sollicitudin nulla ac, feugiat ipsum.
          </p>
          <p>
            Nam pharetra ex non turpis aliquet finibus. Nullam velit massa, eleifend at fermentum
            ac, ullamcorper et enim. Vivamus luctus ut orci at ullamcorper. Nulla eget purus
            venenatis, dapibus eros ut, finibus sapien. Phasellus ipsum lectus, vulputate id ornare
            non, imperdiet vitae arcu. Duis malesuada, ante eu gravida porttitor, est sapien luctus
            leo, nec euismod lacus nulla nec elit. Sed convallis nulla a sapien fermentum, in semper
            mauris rhoncus. Duis in cursus ante. Vestibulum tristique tempor tempus.
          </p>
          <p>
            Donec auctor elementum ipsum id pharetra. Etiam dictum purus dapibus laoreet pretium.
            Cras a lorem sed justo accumsan posuere ac et nibh. In vehicula quam in felis finibus,
            et ullamcorper turpis posuere. Nullam at mi enim. Etiam arcu turpis, porta sodales lorem
            eget, euismod tristique est. Etiam viverra risus sit amet lacinia molestie. Nam
            imperdiet semper viverra. Sed turpis nulla, aliquet in metus ut, ornare bibendum eros.
          </p>
          <p>
            Sed vel volutpat ligula, eu ultrices purus. Nam neque mi, eleifend sed fermentum sed,
            volutpat vitae urna. Cras ut nulla sit amet sem feugiat eleifend condimentum non orci.
            Sed aliquet suscipit nisl quis auctor. Sed sed faucibus lorem. Maecenas eleifend id elit
            at commodo. Vestibulum iaculis ipsum quis nulla dapibus, a mattis mauris gravida. Nulla
            eget felis elementum, iaculis massa nec, faucibus odio.
          </p>
        </div>
      </section>
      <section
        ref={sectionsRefs['portfolio']}
        id="portfolio"
        className="scroll-mt-24 text-white px-48 py-12">
        <h1 className="text-3xl font-bold mb-1.5">Portfolio</h1>
        <Line />
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus non augue sed
            porttitor. Curabitur eu vulputate sapien, ac varius mi. Aliquam sed turpis eu justo
            porttitor dapibus et a massa. Fusce rhoncus, dolor gravida sollicitudin laoreet, velit
            orci molestie felis, eget egestas sem quam quis massa. Duis consectetur, lorem vel
            hendrerit semper, turpis leo dictum dui, nec efficitur dolor tortor vitae elit. In vel
            sagittis quam, nec laoreet neque. Morbi elementum tempor tempor.
          </p>
          <p>
            Nulla vitae lectus vitae eros fringilla mollis. Quisque diam arcu, maximus facilisis
            justo vehicula, semper semper erat. Maecenas id ipsum vel ex ornare porta. Cras eleifend
            quis magna ut elementum. Nam sollicitudin tortor vitae magna consectetur iaculis. Proin
            condimentum lectus in augue blandit, tincidunt pharetra odio efficitur. Quisque in diam
            eget ante congue malesuada non ac metus. Mauris accumsan nunc diam, ac volutpat nisi
            sagittis sit amet. Vivamus ultrices quam dolor, ac mollis sem commodo ut. Nam tempor
            urna feugiat est scelerisque condimentum. Nam suscipit est orci, sed ornare velit
            venenatis eget. Suspendisse quis nulla malesuada, sollicitudin nulla ac, feugiat ipsum.
          </p>
          <p>
            Nam pharetra ex non turpis aliquet finibus. Nullam velit massa, eleifend at fermentum
            ac, ullamcorper et enim. Vivamus luctus ut orci at ullamcorper. Nulla eget purus
            venenatis, dapibus eros ut, finibus sapien. Phasellus ipsum lectus, vulputate id ornare
            non, imperdiet vitae arcu. Duis malesuada, ante eu gravida porttitor, est sapien luctus
            leo, nec euismod lacus nulla nec elit. Sed convallis nulla a sapien fermentum, in semper
            mauris rhoncus. Duis in cursus ante. Vestibulum tristique tempor tempus.
          </p>
          <p>
            Donec auctor elementum ipsum id pharetra. Etiam dictum purus dapibus laoreet pretium.
            Cras a lorem sed justo accumsan posuere ac et nibh. In vehicula quam in felis finibus,
            et ullamcorper turpis posuere. Nullam at mi enim. Etiam arcu turpis, porta sodales lorem
            eget, euismod tristique est. Etiam viverra risus sit amet lacinia molestie. Nam
            imperdiet semper viverra. Sed turpis nulla, aliquet in metus ut, ornare bibendum eros.
          </p>
          <p>
            Sed vel volutpat ligula, eu ultrices purus. Nam neque mi, eleifend sed fermentum sed,
            volutpat vitae urna. Cras ut nulla sit amet sem feugiat eleifend condimentum non orci.
            Sed aliquet suscipit nisl quis auctor. Sed sed faucibus lorem. Maecenas eleifend id elit
            at commodo. Vestibulum iaculis ipsum quis nulla dapibus, a mattis mauris gravida. Nulla
            eget felis elementum, iaculis massa nec, faucibus odio.
          </p>
        </div>
      </section>
      <section
        ref={sectionsRefs['about']}
        id="about"
        className="scroll-mt-24 text-white px-48 py-12">
        <h1 className="text-3xl font-bold mb-1.5">About</h1>
        <Line />
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus non augue sed
            porttitor. Curabitur eu vulputate sapien, ac varius mi. Aliquam sed turpis eu justo
            porttitor dapibus et a massa. Fusce rhoncus, dolor gravida sollicitudin laoreet, velit
            orci molestie felis, eget egestas sem quam quis massa. Duis consectetur, lorem vel
            hendrerit semper, turpis leo dictum dui, nec efficitur dolor tortor vitae elit. In vel
            sagittis quam, nec laoreet neque. Morbi elementum tempor tempor.
          </p>
          <p>
            Nulla vitae lectus vitae eros fringilla mollis. Quisque diam arcu, maximus facilisis
            justo vehicula, semper semper erat. Maecenas id ipsum vel ex ornare porta. Cras eleifend
            quis magna ut elementum. Nam sollicitudin tortor vitae magna consectetur iaculis. Proin
            condimentum lectus in augue blandit, tincidunt pharetra odio efficitur. Quisque in diam
            eget ante congue malesuada non ac metus. Mauris accumsan nunc diam, ac volutpat nisi
            sagittis sit amet. Vivamus ultrices quam dolor, ac mollis sem commodo ut. Nam tempor
            urna feugiat est scelerisque condimentum. Nam suscipit est orci, sed ornare velit
            venenatis eget. Suspendisse quis nulla malesuada, sollicitudin nulla ac, feugiat ipsum.
          </p>
          <p>
            Nam pharetra ex non turpis aliquet finibus. Nullam velit massa, eleifend at fermentum
            ac, ullamcorper et enim. Vivamus luctus ut orci at ullamcorper. Nulla eget purus
            venenatis, dapibus eros ut, finibus sapien. Phasellus ipsum lectus, vulputate id ornare
            non, imperdiet vitae arcu. Duis malesuada, ante eu gravida porttitor, est sapien luctus
            leo, nec euismod lacus nulla nec elit. Sed convallis nulla a sapien fermentum, in semper
            mauris rhoncus. Duis in cursus ante. Vestibulum tristique tempor tempus.
          </p>
          <p>
            Donec auctor elementum ipsum id pharetra. Etiam dictum purus dapibus laoreet pretium.
            Cras a lorem sed justo accumsan posuere ac et nibh. In vehicula quam in felis finibus,
            et ullamcorper turpis posuere. Nullam at mi enim. Etiam arcu turpis, porta sodales lorem
            eget, euismod tristique est. Etiam viverra risus sit amet lacinia molestie. Nam
            imperdiet semper viverra. Sed turpis nulla, aliquet in metus ut, ornare bibendum eros.
          </p>
          <p>
            Sed vel volutpat ligula, eu ultrices purus. Nam neque mi, eleifend sed fermentum sed,
            volutpat vitae urna. Cras ut nulla sit amet sem feugiat eleifend condimentum non orci.
            Sed aliquet suscipit nisl quis auctor. Sed sed faucibus lorem. Maecenas eleifend id elit
            at commodo. Vestibulum iaculis ipsum quis nulla dapibus, a mattis mauris gravida. Nulla
            eget felis elementum, iaculis massa nec, faucibus odio.
          </p>
        </div>
      </section>
      <section
        ref={sectionsRefs['contact']}
        id="contact"
        className="scroll-mt-24 text-white px-48 py-12">
        <h1 className="text-3xl font-bold mb-1.5">Contact</h1>
        <Line />
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus non augue sed
            porttitor. Curabitur eu vulputate sapien, ac varius mi. Aliquam sed turpis eu justo
            porttitor dapibus et a massa. Fusce rhoncus, dolor gravida sollicitudin laoreet, velit
            orci molestie felis, eget egestas sem quam quis massa. Duis consectetur, lorem vel
            hendrerit semper, turpis leo dictum dui, nec efficitur dolor tortor vitae elit. In vel
            sagittis quam, nec laoreet neque. Morbi elementum tempor tempor.
          </p>
          <p>
            Nulla vitae lectus vitae eros fringilla mollis. Quisque diam arcu, maximus facilisis
            justo vehicula, semper semper erat. Maecenas id ipsum vel ex ornare porta. Cras eleifend
            quis magna ut elementum. Nam sollicitudin tortor vitae magna consectetur iaculis. Proin
            condimentum lectus in augue blandit, tincidunt pharetra odio efficitur. Quisque in diam
            eget ante congue malesuada non ac metus. Mauris accumsan nunc diam, ac volutpat nisi
            sagittis sit amet. Vivamus ultrices quam dolor, ac mollis sem commodo ut. Nam tempor
            urna feugiat est scelerisque condimentum. Nam suscipit est orci, sed ornare velit
            venenatis eget. Suspendisse quis nulla malesuada, sollicitudin nulla ac, feugiat ipsum.
          </p>
          <p>
            Nam pharetra ex non turpis aliquet finibus. Nullam velit massa, eleifend at fermentum
            ac, ullamcorper et enim. Vivamus luctus ut orci at ullamcorper. Nulla eget purus
            venenatis, dapibus eros ut, finibus sapien. Phasellus ipsum lectus, vulputate id ornare
            non, imperdiet vitae arcu. Duis malesuada, ante eu gravida porttitor, est sapien luctus
            leo, nec euismod lacus nulla nec elit. Sed convallis nulla a sapien fermentum, in semper
            mauris rhoncus. Duis in cursus ante. Vestibulum tristique tempor tempus.
          </p>
          <p>
            Donec auctor elementum ipsum id pharetra. Etiam dictum purus dapibus laoreet pretium.
            Cras a lorem sed justo accumsan posuere ac et nibh. In vehicula quam in felis finibus,
            et ullamcorper turpis posuere. Nullam at mi enim. Etiam arcu turpis, porta sodales lorem
            eget, euismod tristique est. Etiam viverra risus sit amet lacinia molestie. Nam
            imperdiet semper viverra. Sed turpis nulla, aliquet in metus ut, ornare bibendum eros.
          </p>
          <p>
            Sed vel volutpat ligula, eu ultrices purus. Nam neque mi, eleifend sed fermentum sed,
            volutpat vitae urna. Cras ut nulla sit amet sem feugiat eleifend condimentum non orci.
            Sed aliquet suscipit nisl quis auctor. Sed sed faucibus lorem. Maecenas eleifend id elit
            at commodo. Vestibulum iaculis ipsum quis nulla dapibus, a mattis mauris gravida. Nulla
            eget felis elementum, iaculis massa nec, faucibus odio.
          </p>
        </div>
      </section>
      {/* TODO Miguel : footer */}
    </>
  );
}
