import PropTypes from 'prop-types';

export default function ResumeSection({ children, title, IconComponent, marginTop = true }) {
  return (
    <>
      <section className={marginTop ? 'mt-12' : ''}>
        <div className="flex items-center mt-12 mb-4">
          <IconComponent className="size-6 mr-4" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="grid grid-cols-resume gap-8">{children}</div>
      </section>
    </>
  );
}

ResumeSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  marginTop: PropTypes.bool
};
