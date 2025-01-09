import { IoMdMenu } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

export default function Navbar({ sectionsRefs }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navClasses = `fixed flex flex-col items-start text-base bg-white text-black min-h-16 w-full p-4 z-20 border-b transition-colors duration-300 sm:flex-row sm:items-center sm:text-sm sm:text-white sm:p-8 xl:text-base xl:h-24 ${scrolled ? 'sm:bg-dark-grey sm:border-black' : 'sm:bg-transparent sm:border-transparent'}`;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={navClasses}>
        <IoMdMenu className="size-8 cursor-pointer sm:hidden" onClick={toggleMenu} />
        <div
          className={`sm:text-center sm:w-8/12 xl:w-9/12 ${isMenuOpen ? '' : 'hidden sm:block'}`}>
          <ul className="uppercase">
            <NavItem
              id="home"
              text="Home"
              sectionRef={sectionsRefs['home']}
              closeMenu={closeMenu}
              hasMargin={false}
            />
            <NavItem
              id="about"
              text="About"
              sectionRef={sectionsRefs['about']}
              closeMenu={closeMenu}
            />
            <NavItem
              id="portfolio"
              text="Portfolio"
              sectionRef={sectionsRefs['portfolio']}
              closeMenu={closeMenu}
            />
            <NavItem
              id="resume"
              text="Resume"
              sectionRef={sectionsRefs['resume']}
              closeMenu={closeMenu}
            />
            <NavItem
              id="contact"
              text="Contact"
              sectionRef={sectionsRefs['contact']}
              closeMenu={closeMenu}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  sectionsRefs: PropTypes.object.isRequired
};
