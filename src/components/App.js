import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Volunteer from './Volunteer';
import Languages from './Languages';
import Interests from './Interests';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const projectData = props.jsonObj.projects;
  const volunteerData = props.jsonObj.volunteer;
  const skillsData = props.jsonObj.skills;
  const languagesData = props.jsonObj.languages;
  const educationData = props.jsonObj.education;
  const interestsData = props.jsonObj.interests;

  return (
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner card">
                  <Profile profileData={profileData} />
                </div>
              </aside>
              <main className="col-md-8">
                  <About aboutData={aboutData} />
                  <Work workData={workData} />
                  <Projects projectData={projectData} />
                  <Volunteer volunteerData={volunteerData} />
                  <Skills skillsData={skillsData} />
                  <Languages languagesData={languagesData} />
                  <Education educationData={educationData} />
                  <Interests interestsData={interestsData} />
              </main>
            </div>
          </div>
    );
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired,
};

export default App;
