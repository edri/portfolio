import PropTypes from 'prop-types';

export default function Skill({ IconComponent, text, link }) {
  return (
    <>
      <li className="group inline-block mr-8 mb-4">
        <a className="flex flex-col items-center" href={link} target="_blank" rel="noreferrer">
          <div className="bg-white text-black rounded-full p-4 transition-colors duration-300 group-hover:bg-beige">
            <IconComponent class="size-8" />
          </div>
          <div className="text-white text-center font-bold mt-2 transition-colors duration-300 group-hover:text-beige">
            {text}
          </div>
        </a>
      </li>
    </>
  );
}

Skill.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
