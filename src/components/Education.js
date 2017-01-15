import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map((item, index) => {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>Studied: {startdate} - {enddate}</p>
  				  <p>Distinctions: {item.distinctions}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education card">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
