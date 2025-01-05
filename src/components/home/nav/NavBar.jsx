import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

export default function Navbar({ sectionsRefs }) {
  const [scrolled, setScrolled] = useState(false);
  const navClasses = `fixed flex items-center h-24 w-full p-8 z-20 border-b transition-colors duration-300 ${scrolled ? 'bg-dark-grey border-black' : 'bg-transparent border-transparent'}`;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={navClasses}>
        <div className="text-white text-center w-8/12 xl:w-9/12">
          <ul className="uppercase">
            <NavItem id="home" text="Home" sectionRef={sectionsRefs['home']} hasMargin={false} />
            <NavItem id="about" text="About" sectionRef={sectionsRefs['about']} />
            <NavItem id="resume" text="Resume" sectionRef={sectionsRefs['resume']} />
            <NavItem id="portfolio" text="Portfolio" sectionRef={sectionsRefs['portfolio']} />
            <NavItem id="contact" text="Contact" sectionRef={sectionsRefs['contact']} />
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  sectionsRefs: PropTypes.object.isRequired
};
