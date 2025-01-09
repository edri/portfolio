import PropTypes from 'prop-types';

export default function Navitem({ id, text, sectionRef, closeMenu, hasMargin = true }) {
  const classes = `mt-4 sm:inline ${hasMargin ? 'sm:ml-16' : 'sm:m-0'}`;

  function scrollToSectionRef(event) {
    event.preventDefault();

    closeMenu();

    sectionRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });

    history.pushState(null, '', `#${id}`);
  }

  return (
    <>
      <li className={classes}>
        <a
          className="text-black sm:text-white"
          href={`#${id}`}
          onClick={(event) => scrollToSectionRef(event)}>
          {text}
        </a>
      </li>
    </>
  );
}

Navitem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sectionRef: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired,
  hasMargin: PropTypes.bool
};
