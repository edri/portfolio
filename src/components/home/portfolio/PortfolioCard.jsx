import { HiCalendarDays } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export default function PortfolioCard({ children, date, title, link, keywords }) {
  return (
    <>
      <a className="text-white" href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-col justify-center rounded-lg bg-dark-grey shadow h-full p-8">
          <div className="flex items-center text-sm mb-2">
            <HiCalendarDays className="size-4 mr-2" />
            {date}
          </div>
          <h2 className="text-2xl text-beige mb-4">{title}</h2>
          <div>{children}</div>
          <div className="text-sm text-[#aaa] italic mt-6">{keywords}</div>
        </div>
      </a>
    </>
  );
}

PortfolioCard.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired
};
