import PropTypes from 'prop-types';

export default function Navitem({ id, text, sectionRef, hasMargin = true }) {
  const classes = `inline ${hasMargin && 'ml-16'}`;

  function scrollToSectionRef(event) {
    event.preventDefault();

    sectionRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });

    history.pushState(null, '', `#${id}`);
  }

  return (
    <>
      <li className={classes}>
        <a className="text-white" href={`#${id}`} onClick={(event) => scrollToSectionRef(event)}>
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
  hasMargin: PropTypes.bool
};
