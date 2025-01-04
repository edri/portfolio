import PropTypes from 'prop-types';

export default function PortfolioGrid({ children }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 ">{children}</div>
    </>
  );
}

PortfolioGrid.propTypes = {
  children: PropTypes.node.isRequired
};
