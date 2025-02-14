import PropTypes from 'prop-types';

export default function SubSection({ children, title, IconComponent, marginTop = 'mt-12' }) {
  return (
    <>
      <section className={marginTop}>
        <div className="flex items-center mb-4">
          <IconComponent className="size-6 mr-4" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="sm:grid sm:grid-cols-resume sm:gap-8">{children}</div>
      </section>
    </>
  );
}

SubSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  marginTop: PropTypes.string
};
