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
              Aline is a startup within , ie Educational Technology. Their
              service is an App that is a platform for more effective learning.
              In the first half of 2022 I did my intership at Aline as a
              UX-designer, as a part of the 2 year frontend developemnt
              education at KYH in Stockholm. We had UX-design courses in the
              frontend education and I really got hooked, and decided early on
              that I wanted to proceed a career within UX.
              {/* The value the app gives users is that they learn more effectively
              to reach their goals faster. Users are professionals in their
              professions but want to develop further (upskill or reskill). Some
              of the functions in the app are, for example, to browse content
              within a specific area, add new content, set their learning goals
              and follow their development to achieve these goals. */}
            </p>
          </div>
        </div>
      </UxProject>
      <UxProject>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <h3>Sustainable food consumption</h3>
            <p>
              More and more people are beginning to realize the importance of
              developing more sustainable services and functions that do not
              deplete ecosystem resources.{' '}
              <span className='bold'>
                Identify a problem with food consumption
              </span>{' '}
              that you want to explore further and that you would like to solve
              in some way.
            </p>
            <h3>Assignment description</h3>
            <p>
              <span className='bold'>
                Develop a solution proposal in the form of a clickable
                prototype.
              </span>{' '}
              The proposal must be rooted in business goals and user needs of
              the main target group. The prototype will primarily be used on
              mobile phones. The prototype should cover the main flow from start
              to finish.
            </p>
          </div>
        </div>
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
              <h3>target group analysis</h3>I have done a target group analysis
              in the form of interviews and an survey. I will present this is a{' '}
              <span className='bold'>value propostition canvas.</span>
            </p>
            <p>
              <h3>competitor analysis</h3>I have done a competitor analysis
              which will be presented in a pains and gains list for the users
            </p>
            <h3>Ideation</h3>
            <p>
              I'we had workshops where I ideate the ideas of the app such as
              possible features, name and concepts.
            </p>
            <h3>Wireframing</h3>
            <p>
              I have created wireframe and user flow of the app and the user
              journey.
            </p>

            <h3>Prototyping</h3>
            <p>
              {' '}
              In Figma I first created a lo-fi prototype to get a sence of the
              whole, then iterated and created a working prototype of the main
              user flow.
            </p>
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
