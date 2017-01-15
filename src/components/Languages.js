import React from 'react';

const Languages = props => {
    const getLanguages = props.languagesData.map((item, index) => {
      return (<li key={index}>{item.language}, {item.fluency}</li>)
    });

  	return (
  	  <section className="languages card">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-language"></i> Languages</h2>
        <ul>{getLanguages}</ul>
      </section>
  	)
};

export default Languages;
