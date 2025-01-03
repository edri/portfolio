import PropTypes from 'prop-types';

export default function Section({ children, title, marginTop = true }) {
  return (
    <>
      <section className={marginTop && 'mt-12'}>
        <h2 className="text-2xl font-bold mt-12 mb-4">{title}</h2>
        <div className="grid grid-cols-resume gap-8">{children}</div>
      </section>
    </>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  marginTop: PropTypes.bool
};
