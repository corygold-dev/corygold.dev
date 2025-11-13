import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h4>/about_me</h4>
      <div className="profile-picture">
        <img src="/images/profile-photo.png" alt="profile" />
      </div>
      <div id="about-me-code">
        <header id="about-me-header">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.log('}
            {<span id="console-log">Cory.homeBase</span>}
            {')'}
          </p>
          <p className="about-me-response">{<span>"Chattanooga, TN"</span>}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.log('}
            {<span id="console-log">Cory.bio</span>}
            {')'}
          </p>
          <p className="about-me-response">
            {
              <>
                <span id="bio">
                  "Cory Gold is a software engineer at SAIC, working on
                  mission-critical web applications for USTRANSCOM using React,
                  Next.js, and modern analytics tooling. Outside his full-time
                  role, he builds and co-founds products like FocusFit (a focus
                  timer with built-in micro-workouts) and RSVP Social (a
                  nightlife/event discovery and ticketing platform), taking on
                  full-stack architecture, dev tooling, and mobile development
                  with React Native and Expo."
                </span>
                <span className="bio">
                  "He’s detail-oriented, entrepreneurial, and deeply focused on
                  building clean, high-quality systems. Cory’s background spans
                  EMS, firefighting, personal training, and sales — which shows
                  up in his practical approach to product design and
                  problem-solving. He lives in Chattanooga with his wife,
                  daughter, and a very active household of dogs and a cat. When
                  he’s not coding, he’s staying active, writing music, or
                  working toward a simpler, more intentional life."
                </span>
              </>
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.log('}
            {<span id="console-log">Cory.interests</span>}
            {')'}
          </p>
          <p className="about-me-response">
            [{<span>"minimalist design"</span>}, {<span>"writing music"</span>},{' '}
            {<span>"cooking"</span>}, {<span>"horror novels"</span>},
            {<span>"organic gardening"</span>}]
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.log('}
            {<span id="console-log">Cory.education</span>}
            {')'}
          </p>
          <p className="about-me-response">
            [{<span>"B.A. Liberal Studies - Pennwest California"</span>},{' '}
            {
              <span>
                "Software Engineering Certificate - Fullstack Academy"
              </span>
            }
            ]
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.dir('}
            {<span id="console-log">Cory.skills</span>}
            {')'}
          </p>
          <p className="about-me-array">frontEnd: Array(5)</p>
          <ul>
            <li className="array-item">1: {<span>"React"</span>}</li>
            <li className="array-item">2: {<span>"React Native"</span>}</li>
            <li className="array-item">0: {<span>"TypeScript"</span>}</li>
            <li className="array-item">0: {<span>"JavaScript"</span>}</li>
          </ul>
          <p className="about-me-array">backEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"Node.js"</span>}</li>
            <li className="array-item">1: {<span>"Express.js"</span>}</li>
            <li className="array-item">2: {<span>"GraphQL"</span>}</li>
            <li className="array-item">2: {<span>"PostgreSQL"</span>}</li>
            <li className="array-item">2: {<span>"GraphQL"</span>}</li>
          </ul>
          <p className="about-me-array">other: Array(4)</p>
          <ul>
            <li className="array-item">1: {<span>"Git"</span>}</li>
            <li className="array-item">2: {<span>"NPM"</span>}</li>
            <li className="array-item">2: {<span>"Agile Workflow"</span>}</li>
            <li className="array-item">
              2: {<span>"RESTful API Design"</span>}
            </li>
          </ul>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> console.log('}
            {<span id="console-log">Cory.nextAdventure</span>}
            {')'}
          </p>
          <p className="about-me-response">{<span>undefined</span>}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {'> '}
            <Typewriter
              className="about-me-response"
              words={['']}
              cursor
              cursorStyle="_"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
