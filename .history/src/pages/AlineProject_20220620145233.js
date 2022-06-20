import React from 'react';

//styles
import { Wrapper } from '../styles/GlobalStyles';
import { UxProject } from '../styles/UxProjectStyles';

export const AlineProject = () => {
  return (
    <Wrapper>
      <UxProject>
        <div className='headerWrapper'>
          <div className='headerProjectContainer'>
            <a href='./Work2'>Back</a>

            <h1 className='headerTitle'>UX Analysis of Aline Website</h1>

            <p className='explainerText'>
              Aline is a startup within Educational Technology. Their service is
              an App that is a platform for more effective learning. In the
              first half of 2022 I did my intership at Aline as a UX-designer,
              as a part of the 2 year frontend development education at KYH in
              Stockholm. We had UX-design courses in the frontend education and
              I really got hooked, and decided early on that I wanted to proceed
              a career within UX. My first task at Aline was to do a UX analysis
              of thier exisitng website.
              {/* The value the app gives users is that they learn more effectively
              to reach their goals faster. Users are professionals in their
              professions but want to develop further (upskill or reskill). Some
              of the functions in the app are, for example, to browse content
              within a specific area, add new content, set their learning goals
              and follow their development to achieve these goals. */}
            </p>
          </div>
        </div>
        <img
          className='alineWebsite'
          src={require('../Images/aline_web.png')}
          alt='image of the Aline webpage'
        />
      </UxProject>
      <UxProject>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <p>
              The objective with this user test is to{' '}
              <span className='bold'>identify areas of friction </span>
              that users face when they interact with the website, with focus on
              the main user journey, from first impression till call to action.
              This will give us insights and clues of how to{' '}
              <span className='bold'>make the website more user-friendly.</span>
            </p>
            <h1>Purpose of the website</h1>
            <li>Deliver the ethos of Aline</li>
            <li>Explain the what, how and why of the App</li>
            <li>Inspire the user to download the app </li>

            <h1>Research Goals</h1>
            <li>
              Identify areas of friction to improve the overall flow of the site
            </li>

            <li>Make it easier to download the App from the site</li>
            <li>Find out if the user gets the message of Aline</li>
            {/*  <li>
              What are the pain points people experience on Aline websites
            </li> */}
          </div>
        </div>
        {/*      <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Research Goals</h1>
            <li>
              Identify areas of friction to improve the overall flow of the site
            </li>

            <li>Make it easier to download the App from the site</li>
            <li>Find out if the user gets the message of Aline</li>
            <li>
              What are the pain points people experience on Aline websites
            </li>
          </div>
        </div> */}
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Interviews / who are the users?</h1>

            <p>
              For curious current and future professionals, who are looking for
              a learning platform and knowledge network, that provides a
              personalized learning experience.
            </p>
            <h1>User test task</h1>

            <li>Download the app</li>
            <li>Do the quiz</li>
            <h1>User test Questions</h1>
            <li>What is Aline?</li>
            <li>Do the quiz</li>
          </div>
        </div>
        {/*       <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>User test task</h1>

            <li>Download the app</li>
            <li>Do the quiz</li>
            <h1>User test Questions</h1>
            <li>What is Aline?</li>
            <li>Do the quiz</li>
          </div>
        </div> */}
        <div className='uxProjectWrapperMethods'>
          <div className='uxProjectContainer'>
            <h1>Methods </h1>
            <h3>For this task I have used the following methods:</h3>
            <h3>Scrum</h3>
            <p>
              I have used the scrum method for the work process and worked in
              sprints. I created a backlog and divided it up in a scrum board in
              Trello, in order to keep the project organized and structured in
              the best way possible.
            </p>
            <h3>Double Diamond Method</h3>
            <p>
              For the UX analysis I have used the double Diamond method, to
              discover, define, develop and deploy the app in an strucured and
              effective way, to reach the best possible endproduct.
            </p>
            <h1>Tools</h1>

            <p>
              <h3>User test</h3>I have done user tests with the lab usability
              testing method where I acted as moderator and interviewed 6 users,
              in order to obtain live feedback. I gave them tasks, asked
              questions and collected there pains and gains when interacting
              with the website.
            </p>

            <h3>Ideation</h3>
          </div>
        </div>
        <h1>Sprints </h1>
        <div className='uxProjectWrapperSprints'>
          <div className='uxProjectContainerSprints'>
            <div className='card'>
              <h2>Sprint 1 - Week 1</h2>
              <h2>Discover</h2>
              <h3>Set up the environment</h3>

              <li>Trello - scrum board</li>
              <li>Write backlog</li>
              <li>Figma sketches</li>

              <h3>Explore ideas Workshop</h3>
              <li>Research existing ideas</li>
              <li>Define choosen idea</li>
              <li>Research features for the App</li>
              <li>Find the USP</li>
              <h3>Research user and competiotion</h3>
              <li>Target group analysis</li>
              <li>Competitor analysis</li>
            </div>
            <div className='card'>
              <h2>Sprint 2 - Week 2</h2>
              <h2>Define</h2>

              <h3>Define the research and insights</h3>
              <li>Target group </li>
              <li>Competition </li>
              <li>Features </li>
              <li>Prioritize the features for an MVP prototype </li>
            </div>
            <div className='card'>
              <h2>Sprint 3 - Week 3</h2>
              <h2>Design</h2>

              <h3>Design</h3>
              <li>Lo-fi scetches </li>
              <li>Wireframes </li>
              <li>Main user flow </li>
              <li>Name workshop </li>
              <li>Create logo </li>
              <li>Choose fonts and colors </li>
            </div>
            <div className='card'>
              <h2>Sprint 4 - Week 4</h2>
              <h2>Deploy</h2>

              <h3>Create Prototype</h3>

              <li>Create clickable prototype </li>
            </div>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
