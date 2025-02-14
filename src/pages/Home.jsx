import {
  HiAcademicCap,
  HiArrowPathRoundedSquare,
  HiBriefcase,
  HiMusicalNote
} from 'react-icons/hi2';
import { useRef } from 'react';
import NavBar from '../components/home/nav/NavBar';
import BackgroundCanvas from '../components/home/background/BackgroundCanvas';
import Section from '../components/home/sections/Section';
import HomeSection from '../components/home/sections/HomeSection';
import SubSection from '../components/home/sections/SubSection';
import PortfolioGrid from '../components/home/portfolio/PortfolioGrid';
import PortfolioCard from '../components/home/portfolio/PortfolioCard';
import Footer from '../components/home/footer/Footer';
import ContactForm from '../components/home/form/ContactForm';
import SkillsSection from '../components/home/sections/SkillsSection';

const isMobileOrTablet = (() => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      // eslint-disable-next-line no-useless-escape
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check || window.innerWidth <= 768;
})();

export default function Home() {
  const sectionsRefs = {
    home: useRef(),
    about: useRef(),
    portfolio: useRef(),
    skills: useRef(),
    resume: useRef(),
    contact: useRef()
  };

  function goToUrl(url, event) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank').focus();
  }

  return (
    <>
      <NavBar sectionsRefs={sectionsRefs} />
      <HomeSection sectionsRefs={sectionsRefs} />
      <div className="relative">
        {!isMobileOrTablet && <BackgroundCanvas />}
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
            and I did the UX / UI design all by myself without any template.
            <br />
            The source code is available{' '}
            <a href="https://github.com/edri/Portfolio" target="_blank" rel="noreferrer">
              in my GitHub profile
            </a>
            . Feel free to check it out!
          </p>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="portfolio" title="Portfolio">
          <PortfolioGrid>
            <PortfolioCard
              date="2018-present"
              title="Portail CIIP"
              link="https://portail.ciip.ch/"
              keywords="#VueJs #SpringBoot #frontend #backend #education #teamWork #CIIP">
              This application is a portal for several sub-applications used by one of our main
              customers at HEIG-VD: the CIIP. It manages the various study plans, teaching resources
              and digital resources for schools in French-speaking Switzerland, and has an advanced
              authentication system. We developed the site from scratch, both on the backend and the
              frontend. Feel free to browse the &quot;<i>PER</i>&quot; and &quot;
              <i>Ressources Numériques</i>&quot; applications that do not require authentication.
            </PortfolioCard>
            <PortfolioCard
              date="2024"
              title="Halloween 👻"
              link="https://halloween.msantamaria.ch/"
              keywords="#threeJs #javaScript #frontend #imagination #spooky">
              <p>
                I developed this 3D site during a roadtrip in the USA for one of my friends to
                organise her Halloween party and invite people as appropriate. The haunted house in
                the first phase was heavily inspired by a Three.js Journey course, while the second
                phase comes from my imagination.
              </p>
              <button
                className="text-beige"
                onClick={(event) => {
                  goToUrl('https://github.com/edri/halloween', event);
                }}>
                Github repository
              </button>
            </PortfolioCard>
            <PortfolioCard
              date="2023"
              title="Quiz-Anatomie (in progress...)"
              link="https://quiz-anatomie.msantamaria.ch"
              keywords="#vueJs #frontend #anatomy #fun">
              <p>
                This little personal project lets you revise your anatomy using a quiz inspired by
                the quiz formula available on geoguessr.com. A bone and/or muscle diagram is
                displayed with different points to be named at random. The idea was to combine fun
                with learning! However, the UI is pretty basic and development of the application is
                on hold due to lack of time. Maybe one day I&apos;ll get back into it!
              </p>
              <button
                className="text-beige"
                onClick={(event) => {
                  goToUrl('https://github.com/edri/quiz-anatomie', event);
                }}>
                Github repository
              </button>
            </PortfolioCard>
            <PortfolioCard
              date="2016"
              title="GeoTwit"
              link="https://github.com/edri/GeoTwit"
              keywords="#javaScript #express #scala #twitterX #frontend #backend #bachelorThesis">
              This was my Bachelor&apos;s thesis. This application was connected to the API of X
              (formerly Twitter) and allowed you to search for one or more keywords and display in
              real time on a map the different Tweets related to these subjects and posted by people
              all over the world. It was also possible to access a technical panel containing a
              number of graphs for analysing the data. Unfortunately, it is no longer running, as
              the social network&apos;s API has changed considerably since then. However, images and
              code are available on my GitHub repository, which you can access by clicking on this
              card.
            </PortfolioCard>
            <PortfolioCard
              date="2015-2016"
              title="Swipe.Me"
              link="https://github.com/edri/Swipe.Me"
              keywords="#javaScript #angularJS #node #express #instagram #frontend #backend #tinderLike">
              This rather avant-garde application was a Tinder-like that allowed you to swipe left
              (dislike) or right (like) on Instagram posts based on a keyword search. Unfortunately,
              it too is no longer running, for the same reason as GeoTwit. However, images and code
              are also available on my GitHub repository, which you can access by clicking on this
              card.
            </PortfolioCard>
            <PortfolioCard
              date="2015-2016"
              title="VDE-Gallo"
              link="https://vdegallo.com/en/"
              keywords="#php #wordpress #frontend #backend #vdeGallo #music">
              This music application is a site specialising in the recording, production and
              distribution of records, cassettes, CDs and dematerialised items. I successfully
              developed this site during my studies in coordination with a private client to earn
              some pocket money.
            </PortfolioCard>
          </PortfolioGrid>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="skills" title="Skills">
          <SkillsSection />
        </Section>
        <Section sectionsRefs={sectionsRefs} name="resume" title="Resume">
          <SubSection title="Education" IconComponent={HiAcademicCap} marginTop="mt-0">
            <div className="mt-6 sm:m-0">1997-2008</div>
            <div>Nursery, primary and secondary schools</div>
            <div className="text-sm">Vionnaz, Switzerland</div>
            <div className="mt-6 sm:m-0">2008-2012</div>
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
            <div className="mt-6 sm:m-0">2013-2016</div>
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
                GiTi prize and maximum score awarded for Bachelor’s thesis{' '}
                <i>
                  <a href="https://github.com/edri/GeoTwit" target="_blank" rel="noreferrer">
                    Geographical correlation of topics on Twitter
                  </a>
                </i>
              </p>
            </div>
            <div className="text-sm">Yverdon-les-Bains, Switzerland</div>
          </SubSection>
          <SubSection title="Continuing Education" IconComponent={HiArrowPathRoundedSquare}>
            <div className="mt-6 sm:m-0">2024-2025</div>
            <div>
              <a href="https://threejs-journey.com/" target="_blank" rel="noreferrer">
                Three.js Journey
              </a>{' '}
              training and related diploma; please have a look at this awesome course!
            </div>
            <div></div>
          </SubSection>
          <SubSection title="Professional Experience" IconComponent={HiBriefcase}>
            <div className="mt-6 sm:m-0">2010-2013</div>
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
            <div className="mt-6 sm:m-0">2016-present</div>
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
          </SubSection>
          <SubSection title="Hobbies" IconComponent={HiMusicalNote}>
            <div>Music, writing, photography, art, sport & travels</div>
          </SubSection>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="contact" title="Contact">
          <ContactForm />
        </Section>
      </div>
      <Footer />
    </>
  );
}
