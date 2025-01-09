import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-between text-white bg-dark-grey px-4 py-6 sm:flex-row sm:items-start sm:py-8 md:px-12 lg:px-16 xl:px-52">
        <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-start">
          <span className="sm:mr-2">This website is made with ❤️</span>
          <span>by Miguel Santamaria</span>
        </div>
        <div className="flex mt-6 sm:m-0">
          <a
            className="text-white hover:text-beige"
            href="https://www.linkedin.com/in/migsantamaria/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="size-6 mr-6" />
          </a>
          <a
            className="text-white hover:text-beige"
            href="https://github.com/edri/"
            target="_blank"
            rel="noreferrer">
            <FaGithub className="size-6" />
          </a>
        </div>
      </footer>
    </>
  );
}
