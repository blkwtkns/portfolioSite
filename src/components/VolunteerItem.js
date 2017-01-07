import React from 'react';
import moment from 'moment';

const VolunteerItem = props => {
    const getVolunteerDates = () => {
        const startdate = moment(props.volunteerItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.volunteerItemData.endDate !== '') {
          enddate = moment(props.volunteerItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const volunteerSummaries = props.volunteerItemData.summary.map((item, index) => {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="volunteerItem">
          <h3>{props.volunteerItemData.position}, <span>{props.volunteerItemData.organization}</span></h3>
          <p className="volunteerDates">{getVolunteerDates()}</p>
          <ul>{volunteerSummaries}</ul>
        </div>
    )
};

export default VolunteerItem;
