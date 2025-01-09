import {
  HiAcademicCap,
  HiArrowPathRoundedSquare,
  HiBriefcase,
  HiComputerDesktop,
  HiMusicalNote
} from 'react-icons/hi2';

import { useRef } from 'react';
import NavBar from '../components/home/nav/NavBar';
import BackgroundCanvas from '../components/home/background/BackgroundCanvas';
import Section from '../components/home/sections/Section';
import HomeSection from '../components/home/sections/HomeSection';
import ResumeSection from '../components/home/sections/ResumeSection';
import PortfolioGrid from '../components/home/portfolio/PortfolioGrid';
import PortfolioCard from '../components/home/portfolio/PortfolioCard';
import Footer from '../components/home/Footer';
import ContactForm from '../components/home/form/ContactForm';

export default function Home() {
  const sectionsRefs = {
    home: useRef(),
    resume: useRef(),
    portfolio: useRef(),
    about: useRef(),
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
            {/* TODO Miguel : héberger le site Halloween */}
            <PortfolioCard
              date="2024"
              title="Halloween 👻"
              link="https://edri.github.io/"
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
            {/* TODO Miguel: héberger l'app sur mon site et changer le lien */}
            <PortfolioCard
              date="2023"
              title="Quiz-Anatomie (in progress...)"
              link="https://github.com/edri/quiz-anatomie"
              keywords="#vueJs #frontend #anatomy #fun">
              This little personal project lets you revise your anatomy using a quiz inspired by the
              quiz formula available on geoguessr.com. A bone and/or muscle diagram is displayed
              with different points to be named at random. The idea was to combine fun with
              learning! However, the UI is pretty basic and development of the application is on
              hold due to lack of time. Maybe one day I&apos;ll get back into it!
            </PortfolioCard>
            {/* TODO Miguel: mettre images de l'app dans le readme du repo */}
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
        <Section sectionsRefs={sectionsRefs} name="resume" title="Resume">
          <ResumeSection title="Education" IconComponent={HiAcademicCap} marginTop={false}>
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
          </ResumeSection>
          <ResumeSection title="Continuing Education" IconComponent={HiArrowPathRoundedSquare}>
            <div className="mt-6 sm:m-0">2024-2025</div>
            <div>
              <a href="https://threejs-journey.com/" target="_blank" rel="noreferrer">
                Three.js Journey
              </a>{' '}
              training and related diploma; please have a look at this awesome course!
            </div>
            <div></div>
          </ResumeSection>
          <ResumeSection title="Professional Experience" IconComponent={HiBriefcase}>
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
          </ResumeSection>
          {/* TODO Miguel : icônes de technologies */}
          <ResumeSection title="Computer Skills" IconComponent={HiComputerDesktop}>
            <div></div>
            <div>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  <strong>Languages</strong>: JavaScript, Java, Scala, PHP, C++, C#
                </li>
                <li className="mb-2">
                  <strong>Web Development</strong>: frontend (Vue.js, Angular, React, Tailwind,
                  Bootstrap, Three.js, D3, ...) and backend (Node.js, Spring Boot, REST APIs, ...)
                  technologies
                </li>
                <li className="mb-2">
                  <strong>Databases</strong>: MySQL, SQL Server, Oracle, MongoDB
                </li>
                <li className="mb-2">
                  <strong>Operating systems</strong>: macOS, Linux, Windows
                </li>
                <li>
                  <strong>Miscellaneous</strong>: Git, LaTeX, Markdown, Docker, Kubernetes,
                  Atlassian JIRA / BitBucket, Photoshop, Office
                </li>
              </ul>
            </div>
            <div></div>
          </ResumeSection>
          <ResumeSection title="Hobbies" IconComponent={HiMusicalNote}>
            <div>Music, writing, photography, art, sport & travels</div>
          </ResumeSection>
        </Section>
        <Section sectionsRefs={sectionsRefs} name="contact" title="Contact">
          <ContactForm />
        </Section>
      </div>
      <Footer />
    </>
  );
}
