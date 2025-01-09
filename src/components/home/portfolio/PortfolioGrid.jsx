import PropTypes from 'prop-types';

export default function PortfolioGrid({ children }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{children}</div>
    </>
  );
}

PortfolioGrid.propTypes = {
  children: PropTypes.node.isRequired
};
