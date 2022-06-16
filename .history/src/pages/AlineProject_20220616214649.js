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
              that I wanted to proceed a career in UX
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
    </Wrapper>
  );
};
