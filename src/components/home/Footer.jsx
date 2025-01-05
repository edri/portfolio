import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="flex justify-between text-white bg-dark-grey px-52 py-8">
        <div>This website is made with ❤️ by Miguel Santamaria</div>
        <div className="flex">
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
