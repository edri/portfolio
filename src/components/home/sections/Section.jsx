import PropTypes from 'prop-types';
import Line from '../Line';

export default function Section({ children, sectionsRefs, name, title }) {
  return (
    <>
      <section
        ref={sectionsRefs[name]}
        id={name}
        className="relative scroll-mt-16 text-white px-4 py-8 z-10 md:px-8 lg:px-12 xl:scroll-mt-24 xl:px-48 xl:py-12">
        <h1 className="text-3xl font-bold mb-1.5">{title}</h1>
        <Line />
        <div className="sm:text-justify">{children}</div>
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
