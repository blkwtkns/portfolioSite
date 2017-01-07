import React from 'react';
import ProjectItem from './ProjectItem';

const Project = props => {

    const projectExperience = props.projectData.map((val, index) => {
      return <ProjectItem key={index} projectItemData={val}/>;
    })

    return (
      <section className="projects">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-flask"></i> Projects</h2>
        {projectExperience}
      </section>
    );
};

export default Project;
