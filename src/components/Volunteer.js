import React from 'react';
import VolunteerItem from './VolunteerItem';

const Volunteer = props => {

    const volunteerExperience = props.volunteerData.map((val, index) => {
      return <VolunteerItem key={index} volunteerItemData={val}/>;
    })

    return (
      <section className="volunteer">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-universal-access"></i> Volunteer</h2>
        {volunteerExperience}
      </section>
    );
};

export default Volunteer;
