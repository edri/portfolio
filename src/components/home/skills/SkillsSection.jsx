import {
  FaAngular,
  FaBitbucket,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFileWord,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJira,
  FaLinux,
  FaMarkdown,
  FaMicrosoft,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
  FaServer,
  FaVuejs,
  FaWindows
} from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import {
  SiAdobephotoshop,
  SiD3Dotjs,
  SiJavascript,
  SiKubernetes,
  SiLatex,
  SiMacos,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { RiImageEditFill } from 'react-icons/ri';
import { TbDeviceImacCog } from 'react-icons/tb';
import { MdMiscellaneousServices } from 'react-icons/md';
import Skill from './Skill';
import SkillsSubsection from './SkillsSubsection';

export default function SkillsSection() {
  return (
    <>
      <SkillsSubsection title="Languages" IconComponent={FaCode} marginTop="mt-8">
        <Skill
          IconComponent={SiJavascript}
          text="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill
          IconComponent={SiTypescript}
          text="TypeScript"
          link="https://www.typescriptlang.org/"
        />
        <Skill IconComponent={FaJava} text="Java" link="https://www.java.com/en/" />
        <Skill IconComponent={FaPhp} text="PHP" link="https://www.php.net/" />
      </SkillsSubsection>
      <SkillsSubsection title="Frontend" IconComponent={RiImageEditFill} marginTop="mt-8">
        <Skill
          IconComponent={FaHtml5}
          text="HTML"
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <Skill
          IconComponent={FaCss3Alt}
          text="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <Skill IconComponent={FaSass} text="Sass" link="https://sass-lang.com/" />
        <Skill IconComponent={FaVuejs} text="Vue.js" link="https://vuejs.org/" />
        <Skill IconComponent={FaAngular} text="Angular" link="https://angular.dev/" />
        <Skill IconComponent={FaReact} text="React" link="https://react.dev/" />
        <Skill IconComponent={SiTailwindcss} text="TailwindCSS" link="https://tailwindcss.com/" />
        <Skill IconComponent={FaBootstrap} text="Bootstrap" link="https://getbootstrap.com/" />
        <Skill IconComponent={TbBrandThreejs} text="Three.js" link="https://threejs.org/" />
        <Skill IconComponent={SiD3Dotjs} text="D3.js" link="https://d3js.org/" />
      </SkillsSubsection>
      <SkillsSubsection title="Backend" IconComponent={FaServer} marginTop="mt-8">
        <Skill IconComponent={FaNodeJs} text="Node.js" link="https://nodejs.org/en" />
        <Skill
          IconComponent={SiSpringboot}
          text="Spring Boot"
          link="https://spring.io/projects/spring-boot"
        />
      </SkillsSubsection>
      <SkillsSubsection title="Database" IconComponent={FaDatabase} marginTop="mt-8">
        <Skill IconComponent={SiMysql} text="MySQL" link="https://www.mysql.com/" />
        <Skill
          IconComponent={FaMicrosoft}
          text="SQL Server"
          link="https://www.microsoft.com/en-gb/sql-server/"
        />
        <Skill
          IconComponent={SiOracle}
          text="Oracle SQL"
          link="https://www.oracle.com/database/sqldeveloper/"
        />
        <Skill IconComponent={SiMongodb} text="MongoDB" link="https://www.mongodb.com/" />
      </SkillsSubsection>
      <SkillsSubsection title="Operating Systems" IconComponent={TbDeviceImacCog} marginTop="mt-8">
        <Skill IconComponent={SiMacos} text="macOS" link="https://www.apple.com/macos/" />
        <Skill IconComponent={FaLinux} text="Linux" link="https://www.linux.org/" />
        <Skill
          IconComponent={FaWindows}
          text="Windows"
          link="https://www.microsoft.com/en-gb/windows/"
        />
      </SkillsSubsection>
      <SkillsSubsection
        title="Miscellaneous"
        IconComponent={MdMiscellaneousServices}
        marginTop="mt-8">
        <Skill IconComponent={FaGitAlt} text="Git" link="https://git-scm.com/" />
        <Skill IconComponent={FaGithub} text="Github" link="https://github.com/" />
        <Skill IconComponent={FaBitbucket} text="Bitbucket" link="https://bitbucket.org/" />
        <Skill
          IconComponent={FaJira}
          text="Jira"
          link="https://www.atlassian.com/en/software/jira/"
        />
        <Skill IconComponent={FaDocker} text="Docker" link="https://hub.docker.com/" />
        <Skill IconComponent={SiKubernetes} text="Kubernetes" link="https://kubernetes.io/" />
        <Skill IconComponent={SiLatex} text="LaTeX" link="https://www.latex-project.org/" />
        <Skill IconComponent={FaMarkdown} text="Markdown" link="https://www.markdownguide.org/" />
        <Skill
          IconComponent={FaFileWord}
          text="MS Office"
          link="https://www.microsoft.com/en-gb/microsoft-365/"
        />
        <Skill
          IconComponent={SiAdobephotoshop}
          text="Photoshop"
          link="https://www.adobe.com/products/photoshop.html"
          hasMarginBottom={false}
        />
      </SkillsSubsection>
    </>
  );
}
