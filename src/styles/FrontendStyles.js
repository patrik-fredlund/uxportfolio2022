import styled from 'styled-components';

/* Project cards */

export const FrontensProjectsWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;

  .projectImg {
    width: auto;
    height: 200px;
    //border: 10px solid red;
  }

  .diabloImg {
    //margin-top: 60px;
    height: 220px;
    width: auto;
    margin-right: 50px;
    margin-top: 100px;
  }

  @media screen and (max-width: 900px) {
    .diabloImg {
      //border: 10px solid red;
      //height: 1700px;
      display: flex;
      height: auto;
      width: 400px;
      //margin-right: 50px;
      margin-top: 0;
      margin-bottom: 30px;
      margin-right: 0;
    }
  }
  .unscriptedImg {
    //margin-top: 60px;
    height: 240px;
    width: auto;
    margin-right: 50px;
    margin-top: 100px;
  }

  @media screen and (max-width: 900px) {
    .unscriptedImg {
      //border: 10px solid red;
      //height: 1700px;
      display: flex;
      height: auto;
      width: 400px;
      //margin-right: 50px;
      margin-top: 0;
      margin-bottom: 30px;
      margin-right: 0;
    }
  }

  .frontendProjectsContainer {
    border: 1px solid lightgrey;
    display: flex;
    max-width: 900px;
    height: 500px;

    padding: 20px;
    margin: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.6s ease-in-out;

    &:hover {
      transition: all 0.6s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

      background: #e3fae4;
      padding: 15px;
      //margin-top: 10px;
      width: 900px;
      height: 500px;

      /* color: #00ccff; */
    }
  }

  @media screen and (max-width: 900px) {
    .frontendProjectsContainer {
      //border: 5px solid pink;
      //height: 1700px;
      display: flex;
      align-items: center;
      //flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin: 0;

      &:hover {
        transition: all 0.6s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        //background: white;
        //background: #e3fae4;
        background: #e3fae4;
        padding: 15px;
        //margin-top: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }

  .frontendCard {
    //border: 1px solid green;
    display: flex;
    flex-direction: column;
    //align-items: center;
    text-align: left;
    //background-color: green;
    margin: 30px;
    width: 100%;

    h1 {
      margin-bottom: 10px;
      margin-top: 20px;
    }

    p {
      //color: red;
      margin-top: 10px;
      line-height: 30px;
      font-weight: 200;
      max-width: 400px;
    }

    a {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .frontendCard {
      //border: 1px solid green;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      //align-items: center;

      //background-color: green;
      //margin: 30px;
      width: 100%;
    }
  }

  .frontendProjectInfo {
    //border: 1px solid pink;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    //background-color: #e4f1eb;
    //transition: all 0.4s ease-in-out;
    position: relative;
    min-height: 200px;
    background-image: linear-gradient(
      to right,
      hsl(111, 100%, 90%),
      hsl(179, 100%, 30%)
    );
    z-index: 1;

    &:hover {
      //transition: all 0.4s ease-in-out;

      //background: white;
      //background: #4c4c4c;
      //background: #ecfff7;

      //background: #cbf2cd;
      //background: #cce1cd;
      /* color: #00ccff; */
    }
  }

  .frontendProjectInfo::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      hsl(111, 100%, 90%),
      hsl(179, 100%, 30%)
    );
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
  }

  .frontendProjectInfo:hover::before {
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    .frontendProjectInfo {
      //border: 5px solid pink;
      //height: 1700px;
      display: flex;
      //flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }

  .freshkeeper {
    //border: 1px solid red;
    width: auto;
    height: 450px;
    //box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }

  &:hover {
  }
`;

//------------Fetch all github repos------------//

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    justify-content: center;
    margin-left: -10px;
    font-size: 0.8em;
    width: 300px;
  }
`;

export const ProjectsStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 700px;

  @media screen and (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    color: green;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.5px solid grey;

  padding: 5px 5px;
  margin-bottom: 20px;
  font-weight: 100;
  margin-left: 10px;

  p {
    color: black;
    margin-left: 10px;
    margin-bottom: 15px;
    font-weight: 300;
  }

  h3 {
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  a {
    color: black;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  a:hover {
    color: grey;
    margin-left: 10px;
  }
`;
