// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
  // render() {
    // return (
      // <div className="App">
        // <div className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          // <h2>Welcome to React</h2>
        // </div>
        // <p className="App-intro">
          // To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      // </div>
    // );
  // }
// }

// export default App;

import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  // console.log(profileData)
  return (
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                </div>
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />
                  <Work workData={workData} />
                  <Skills skillsData={skillsData} />
                  <Education educationData={educationData} />
                </div>
              </main>
            </div>
          </div>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;
