import Image from 'next/image';
import Link from 'next/link';
import "../../css/work.css";

const projects = [
  {
    title: 'Ecomerce Website',
    description: 'See project',
    link: '/portfolio',
    image: '/project1.png',
  },
  {
    title: 'Landing page ',
    description: 'See project',
    link: '/wohoo',
    image: '/project2.png',
  },
  {
    title: 'Portfolio website ',
    description: 'See project',
    link: '/pagee',
    image: '/portfolio.png',
  },
  {
    title: 'Javascript and Typescript 45 questions ',
    description: 'See project',
    link: '/keikoko',
    image: '/project4.png',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section">
      <div className="container">
        <h2 id="projects-title">Some of my favorite projects.</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="card-title">{project.title}</h3>
              <Link href={project.link} className="card-link">
                {project.description} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
