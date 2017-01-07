import React from 'react';
import moment from 'moment';

const ProjectItem = props => {
    const getProjectDates = () => {
        const startdate = moment(props.projectItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.projectItemData.endDate !== '') {
          enddate = moment(props.projectItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const projectSummaries = props.projectItemData.summary.map((item, index) => {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="projectItem">
          <h3>{props.projectItemData.position}, <a href={props.projectItemData.website}><span>{props.projectItemData.name}</span></a></h3>
          <p className="projectDates">{getProjectDates()}</p>
          <ul>{projectSummaries}</ul>
        </div>
    )
};

export default ProjectItem;
