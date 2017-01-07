import React from 'react';

const Interests = props => {
    const getInterests = props.interestsData[0].keywords.map((item, index) => {
      return (<li key={index}><span className="label label-default">{item}</span></li>)
    });

  	return (
  	  <section className="interests">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-heart"></i> Interests</h2>
        <ul className="interests-list list-inline">{getInterests}</ul>
      </section>
  	)
};

export default Interests;
