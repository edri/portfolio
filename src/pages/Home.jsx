import { useRef } from 'react';
import NavBar from '../components/home/nav/NavBar';
import BackgroundCanvas from '../components/home/background/BackgroundCanvas';
import Section from '../components/home/sections/Section';
import HomeSection from '../components/home/sections/HomeSection';
import ResumeSection from '../components/home/sections/ResumeSection';

export default function Home() {
  const sectionsRefs = {
    home: useRef(),
    resume: useRef(),
    portfolio: useRef(),
    about: useRef(),
    contact: useRef()
  };

  return (
    <>
      <NavBar sectionsRefs={sectionsRefs} />
      <HomeSection sectionsRefs={sectionsRefs} />
      <div className="relative">
        <BackgroundCanvas />
        <Section sectionsRefs={sectionsRefs} name="about" title="About">
          <p>
            Resourceful, flexible and structured, I am a web developer used to follow specifications
            and deadlines and used to interacting with clients. For more than eight years, my work
            at{' '}
            <a href="https://heig-vd.ch/" target="_blank" rel="noreferrer">
              HEIG-VD
            </a>{' '}
            has indeed led me to collaborate with numerous companies and institutions on small and
            large-scale projects, using a consulting process and Agile methodologies.
          </p>
          <p>
            My experience includes several years working with Vue.js, as well as a few years with
            Angular and a bit of React. I also have backend experience in Java with Spring Boot and
            in JavaScript with Node. I would now like to specialise in frontend technologies, whose
            creativity and style I find very appealing.
          </p>
          <p className="m-0">
            This website was developed using{' '}
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React
            </a>
            ,{' '}
            <a href="https://threejs.org/" target="_blank" rel="noreferrer">
              Three.js
            </a>{' '}
            and{' '}
            <a
              href="https://r3f.docs.pmnd.rs/getting-started/introduction"
              target="_blank"
              rel="noreferrer">
              React Three Fiber
            </a>{' '}
            and the source code is available{' '}
            <a href="https://github.com/edri/Portfolio" target="_blank" rel="noreferrer">
              in my GitHub profile
            </a>
            . Feel free to check it out!
          </p>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="resume" title="Resume">
          <ResumeSection title="Education" marginTop={false}>
            <div>1997-2008</div>
            <div>Nursery, primary and secondary schools</div>
            <div className="text-sm">Vionnaz, Switzerland</div>
            <div>2008-2012</div>
            <div>
              <p className="m-0">
                <a href="https://eptm.ch/" target="_blank" rel="noreferrer">
                  EPTM
                </a>{' '}
                (Technical Vocational School of Sion)
              </p>
              <p className="text-sm m-0">
                <i>CFC</i> (Diploma of Vocational Education and Training) in IT
              </p>
              <p className="text-sm m-0">
                <i>Maturité professionnelle technique</i> (Federal Technical Vocational
                Baccalaureate)
              </p>
            </div>
            <div className="text-sm">Sion, Switzerland</div>
            <div>2013-2016</div>
            <div>
              <p className="m-0">
                <a href="https://heig-vd.ch/" target="_blank" rel="noreferrer">
                  HEIG-VD
                </a>{' '}
                (School of Business and Engineering Vaud)
              </p>
              <p className="text-sm m-0">Bachelor of Science in Software Engineering</p>
              <p className="text-sm m-0">Summer University Program: SJSU, San Jose, USA</p>
              <p className="text-sm m-0">
                GiTi prize awarded for Bachelor’s thesis{' '}
                <i>
                  <a href="https://github.com/edri/GeoTwit" target="_blank" rel="noreferrer">
                    Geographical correlation of topics on Twitter
                  </a>
                </i>
              </p>
            </div>
            <div className="text-sm">Yverdon-les-Bains, Switzerland</div>
          </ResumeSection>
          <ResumeSection title="Continuing Education">
            <div>2024-2025</div>
            <div>
              <a href="https://threejs-journey.com/" target="_blank" rel="noreferrer">
                Three.js Journey
              </a>{' '}
              training and related diploma; please have a look at this awesome course!
            </div>
            <div></div>
          </ResumeSection>
          <ResumeSection title="Professional Experience">
            <div>2010-2013</div>
            <div>
              <p className="m-0">
                <a href="https://synchrotech.ch/en/" target="_blank" rel="noreferrer">
                  Synchrotech SA
                </a>{' '}
                - Full-stack developer
              </p>
              <p className="text-sm m-0">
                Development and maintenance of internal and external applications in C#, PHP and
                JavaScript
              </p>
              <p className="text-sm m-0">Analysis, planning and management of customer projects</p>
              <p className="text-sm m-0">Research and analysis of new technologies</p>
            </div>
            <div className="text-sm">Internships & Employment</div>
            <div>2016-2025</div>
            <div>
              <p className="m-0">
                <a href="https://heig-vd.ch/" target="_blank" rel="noreferrer">
                  HEIG-VD
                </a>{' '}
                - R&D Associate
              </p>
              <p className="text-sm m-0">
                Development of full-stack web applications for several companies and institutions,
                including
                <br />
                <a href="https://www.abraxas.ch/fr" target="_blank" rel="noreferrer">
                  Abraxas
                </a>
                ,{' '}
                <a href="https://www.avalia.io/" target="_blank" rel="noreferrer">
                  Avalia
                </a>
                ,{' '}
                <a href="https://bhaasha.ch/" target="_blank" rel="noreferrer">
                  Bhaasha
                </a>
                ,{' '}
                <a href="https://www.ciip.ch/" target="_blank" rel="noreferrer">
                  CIIP
                </a>
                ,{' '}
                <a href="https://www.gyb.ch/" target="_blank" rel="noreferrer">
                  GYB
                </a>{' '}
                and{' '}
                <a href="https://geo-satis.com/en/" target="_blank" rel="noreferrer">
                  Geosatis
                </a>
                .
              </p>
              <p className="text-sm m-0">
                Assisting and doing odd jobs for web technology courses in the Bachelor’s programme
              </p>
            </div>
            <div className="text-sm">Employment</div>
          </ResumeSection>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="portfolio" title="Portfolio">
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
        </Section>
        <Section sectionsRefs={sectionsRefs} name="contact" title="Contact">
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
        </Section>
      </div>
      {/* TODO Miguel : footer */}
    </>
  );
}
