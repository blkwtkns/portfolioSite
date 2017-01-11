import React from 'react';
import WorkItem from './Workitem';

const Work = props => {

    const getWorkExperience = props.workData.map((val, index) => {
      return <WorkItem key={index} workItemData={val}/>;
    })

    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work</h2>
        {getWorkExperience}
      </section>
    );
};

export default Work;
