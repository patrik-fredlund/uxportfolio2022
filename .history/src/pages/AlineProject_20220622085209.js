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
              Aline is a startup within EdTech (Educational Technology). Their
              service is an App that is a platform for more effective learning.
              <br /> In the first half of 2022 I did my internship at Aline as a
              UX-designer, as a part of the 2 year frontend development
              education at KYH in Stockholm. We had UX-design courses in the
              frontend education and I really got hooked, and decided early on
              that I wanted to proceed a career within UX. My first task at
              Aline was to do a UX analysis of thier exisitng website.
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
        <h1 className='projectTitle'>Task And Mission</h1>
        <div className='uxProjectWrapper'>
          <div className='uxProjectContainer'>
            <h1>Project brief</h1>
            <p>
              The objective with this user test is to{' '}
              <span className='bold'>identify areas of friction </span>
              that users face when they interact with the website, with focus on
              the user journey, from first impression till call to action. This
              will give us insights and clues of how to{' '}
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
            <li>
              1 of the males is a UX expert, who I interviewed to get a
              professional opinion and in-depth feedback about:
              <li className='liSmall'>
                Up to date knowledge on today’s trends
              </li>
              <li className='liSmall'>Design rules and recommendations</li>
              <li className='liSmall'>Communication best practices</li>
            </li>
            <h2>User test Questions</h2>
            <li>General questions e.g thier age, proffesion and education </li>
            <li>What is your first impression?</li>
            <li>What is Aline?</li>
            <li>How do you download the App?</li>
            <li>What do you think about the quiz?</li>
            <li>Who is this App for?</li>
            <li>Who is this website aimed at?</li>
            <li>
              Throughout the user test I let the test user speak freely in order
              to find more hidden details <br /> and then ask them why in order
              to get more deeper understanding of thier experinece.
            </li>

            <h2>User test task</h2>
            <li>Download the app</li>
            <li>Do the quiz</li>
          </div>
        </div>
        <h1>Sprints </h1>
        <div className='uxProjectWrapperSprints'>
          <div className='uxProjectContainerSprints'>
            <div className='card'>
              <h2>Sprint 1 </h2>
              <h2>Discover Aline</h2>
              <h3>Set up the environment</h3>

              <li>Notion - for documentation</li>

              <h3>Research Aline</h3>
              <li>Interview Stakeholder</li>
              <li>Interview mareketing strategist Employees</li>
              <li>Analyse the App</li>
              <li>Analyse the website</li>
              <li>Read documentation, USP, marketing strategy</li>
            </div>
            <div className='card'>
              <h2>Sprint 2 </h2>
              <h2>Discover the user</h2>

              <h3>Create a user test</h3>
              <li>Write interview-questions and tasks </li>
              <h3>Conduct user tests</h3>
              <li>5 user interviews</li>
              <li>1 expert interview</li>
              <h3>Data collection</h3>
              <li>collect the data generated by the user tests</li>
            </div>
            <div className='card'>
              <h2>Sprint 3 </h2>
              <h2>Define Feedback</h2>
              <h3>research the feedback</h3>
              <li>Analyse the data</li>
              <li>Prioritize the data</li>
              <li>Generate potential solution ideas</li>
            </div>
            <div className='card'>
              <h2>Sprint 4 </h2>
              <h2>Design</h2>

              <h3>Build presentation</h3>
              <li>Build a google slide presentation</li>
              <li>Present the analysis and recomendations for the team </li>

              <h3>Impliment new Insights</h3>

              <li>Apply the recomendations to the existing website</li>
            </div>
          </div>
        </div>
        <h1 className='projectTitle'>Discover</h1>
        <hr />
        <p className='subHeader'>Part 1 - Research Aline</p>
        <p className='ingressParagraph'>
          The first part of the research was for me to learn more about Aline,
          their concept and vision, to get a better understanding of what they
          needed to communicate and to who. <br /> I talked to the stakeholder,
          marketing strategist and employees and read the companies
          documentation in order to learn more about thier brand, marketing
          plan, USP and what they wanted to say. With my new knowledge and
          insights I started to create a user test for the website.
        </p>
        <div className='uxProjectWrapperYellow'>
          <div className='uxProjectContainer'>
            <p className='posItText'>
              Some of the feedback from the stakeholder (COO) was that the
              website needed a clearer message and to be more simple in its
              approach. Afer testing the website myself I agreed with her. I
              felt a user test would be a effective way to get valuble insight
              from the target group.
            </p>
          </div>
        </div>
        <div className='competitorsContainer'>
          <p className='subHeader'>Part 1.2 - user test</p>
          <h2 className='projectTitle'>The User Test</h2>
          <p className='MiddleIngressParagraph'>
            I decided to use the{' '}
            <span className='bold'>lab usability testing method</span> and do a
            live user test interview, to get a deeper understanding of the users
            pains and gains when they interacted with the website.
          </p>
        </div>
        <div className='competitorsContainer'>
          <p className='subHeader'>Part 2 - Define the feedback</p>
          <h2 className='projectTitle'>Define</h2>
          <p className='MiddleIngressParagraph'>
            After the user tests I collected and orginized all the feedbaack
            from the users to find specific areas of improvemnts. This way I can
            structure the findings into categories so it's easier and more
            effective
          </p>
        </div>
        <h1>Define the insights </h1>
        <p className='MiddleIngressParagraph'>
          I will divide the feedback into 4 main categories where the users find
          their pain points:
        </p>
        <div className='uxProjectWrapperSprints'>
          <div className='uxProjectContainerSprints'>
            <div className='card'>
              <h2>1. Structure</h2>

              <h3>Page layout and parts.</h3>
              <h4>User pains with the structure:</h4>

              <li>No navigation menu. </li>

              <li>Some pages are hard to find.</li>
              <li>No primary point of entry.</li>
              <li>No primary call to action</li>
            </div>
            <div className='card'>
              <h2>2. Content </h2>
              <h3>Features.</h3>
              <h4>User pains with the Content:</h4>
              <li>Repetitive features and repetitive text. </li>
              <li>Iconography inconsistent.</li>
              <li>Unnecessary content that blurs the overall message.</li>

              <li>No good visuals of the UI.</li>
            </div>
            <div className='card'>
              <h2>3. Descriptions </h2>
              <h3>Explanations and Language.</h3>
              <h4>User pains with the descriptions:</h4>
              <h3>The language.</h3>
              <p>
                Too much academic lingo, slogans and fancy words. Hard to
                understand if you’re not an expert on the subject.
              </p>
            </div>
            <div className='card'>
              <h2>4. Message </h2>
              <h3>Delivery of the concept.</h3>
              <h4>User pains with the message:</h4>
              <p>
                Just like with the descriptions, the delivery of the concept
                falls short. What is it(really)? Why should you use it? How does
                it work?
              </p>
            </div>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
