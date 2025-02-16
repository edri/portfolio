import PropTypes from 'prop-types';

export default function Skill({ IconComponent, text, link }) {
  return (
    <>
      <div className="group mr-10 mt-4 mb-8">
        <a
          className="relative flex flex-col items-center"
          href={link}
          target="_blank"
          rel="noreferrer">
          <div className="bg-white text-black rounded-full p-4 transition-colors duration-300 group-hover:bg-beige">
            <IconComponent class="size-8" />
          </div>
          <div className="absolute -bottom-8 w-max text-white text-center font-bold mt-2 transition-colors duration-300 group-hover:text-beige">
            {text}
          </div>
        </a>
      </div>
    </>
  );
}

Skill.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
