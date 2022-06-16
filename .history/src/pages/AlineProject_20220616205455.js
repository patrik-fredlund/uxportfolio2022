import React from 'react';

export const AlineProject = () => {
  return (
    <Wrapper>
      <UxProject>
        <div className='headerWrapper'>
          <div className='headerProjectContainer'>
            <a href='./Work2'>Back</a>

            <h1 className='headerTitle'>Freshkeeper</h1>
            <p className='explainerText'>
              Freshkeeper is an App that{' '}
              <span className='bold'>
                helps you keep track on your food items and their expiration
                date.{' '}
              </span>{' '}
              This was a school assignement with focus on the ux process, from
              research and discovery to definition and final prototype.
            </p>
          </div>
        </div>
      </UxProject>
    </Wrapper>
  );
};
