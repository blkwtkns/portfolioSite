import React from 'react';

const About = props => {
  return (
    <section className="about card">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
      <div>
        {
          props.aboutData.map((item, i) => {
            return <p key={i}>{ item }</p>;
          })
        }
      </div>
    </section>
  );
};

export default About;
