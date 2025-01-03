import PropTypes from 'prop-types';
import Line from '../Line';

export default function Section({ children, sectionsRefs, name, title }) {
  return (
    <>
      <section
        ref={sectionsRefs[name]}
        id={name}
        className="relative scroll-mt-24 text-white px-48 py-12 z-10">
        <h1 className="text-3xl font-bold mb-1.5">{title}</h1>
        <Line />
        <div className="text-justify">{children}</div>
      </section>
    </>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sectionsRefs: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
