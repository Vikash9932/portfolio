import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';

import projectsFilter from '../public/assets/projectsFilter';
import projectsList from '../public/assets/projectsList';

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [filter, setFilter] = useState('All');

  const handleFilter = (filterVal) => {
    setFilter(filterVal);
    if (filterVal === 'All') {
      setProjects(projectsList);
    } else {
      let tempList = projectsList.filter((item) =>
        item.techStack.includes(filterVal)
      );
      setProjects(tempList);
    }
  };

  return (
    <div className='projects'>
      <div className='projects--heading'>Projects</div>
      <div className='projects__list'>
        <div className='projects__list--filterHeader'>
          {projectsFilter.map((item) => (
            <div
              key={item}
              className='projects__list__filterHeader--item'
              value={filter}
              onClick={(e) => handleFilter(e.target.innerText)}
              style={{
                backgroundColor: filter === item ? 'rgb(101, 205, 170)' : '',
              }}>
              {item}
            </div>
          ))}
        </div>
        <div className='projects__list--filterHeader1'>
          <select
            className='projects__list__filterHeader1--item'
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}>
            {projectsFilter.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='projects__list--content'>
          {projects.map((project) => (
            <div className='projects__list__content--item' key={project.id}>
              <Image
                src={project.image}
                alt=''
                className='projects__list__content__item--image'
              />
              <div className='projects__list__content__item--links'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={project.githubLink}
                  className='projects__list__content__item__links--git'>
                  <AiFillGithub size={30} />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={project.deployLink}
                  className='projects__list__content__item__links--deploy'>
                  <BiLinkExternal size={30} />
                </a>
              </div>
              <div className='projects__list__content__item--name'>
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
