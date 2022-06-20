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
        <div className='uxProjectWrapperMethods'>
          <div className='uxProjectContainer'>
            <h1>Methods and Tools </h1>

            <h3>Double Diamond Method</h3>
            <p>
              For the UX analysis I have used the double Diamond method, to
              discover, define, develop and deploy the insights from the user
              tests, in order to make the website more user friendly.
            </p>

            <p>
              <h3>User test</h3>I have done remote user tests with the{' '}
              <span className='bold'>lab usability testing method</span> where I
              acted as moderator and interviewed 6 users, in order to obtain
              live feedback. I gave them tasks, asked questions and collected
              there pains and gains when interacting with the website.
            </p>
          </div>
        </div>
        <div className='uxProjectWrapperInter'>
          <div className='uxProjectContainer'>
            <h1>Interviews </h1>
            <h2>The users</h2>

            <p>
              Curious current and future professionals, who are looking for a
              learning platform and knowledge network, that provides a
              personalized learning experience.
            </p>
            <h2>Participants</h2>
            <li>6 interviews</li>
            <li>3 males and 3 females</li>
            <li>from 20 to 43 years old</li>
            <li>1 of the males is a UX expert to get a professional opinion</li>
            <h2>User test Questions</h2>
            <li>What is your first impression?</li>
            <li>What is Aline?</li>
            <li>How do you download the App?</li>
            <li>What do you think about the quiz?</li>
            <li>Who is this App for?</li>
            <li>Who is this website aimed at?</li>
            <li>
              Thru out the user test I let the test user speak freely in order
              to find more hidden details <br /> and then ask them why in order
              to get more deeper understanding of thier experinece.
            </li>

            <h2>User test task</h2>
            <li>Download the app</li>
            <li>Do the quiz</li>
          </div>
        </div>
        <h1 className='projectTitle'>Discover</h1>
        <hr />
        <p className='subHeader'>Part 1 - Explore Ideas</p>
        <p className='ingressParagraph'>
          The first part of the discovery research was to choose a problem to
          solve with food consumption. I decided to focus on{' '}
          <span className='bold'>food waste </span> because according to the
          Swedish National Food Administration:
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              Approximately 19 kilos of edible food are thrown in the rubbish
              and 26 kilos of food and drink are poured into the bin. The
              figures apply per person and year.{' '}
              <span className='bold'>
                Much of the food is thrown away because it is not eaten in time.
              </span>
            </p>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
