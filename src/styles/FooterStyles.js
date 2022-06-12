import styled from 'styled-components';

export const FooterStyles = styled.nav`
  .footerLinks {
    padding: 20px;
    text-align: center;
  }
  .footerLinks a {
    padding: 20px;
    text-decoration: none;
    color: black;
  }
  .footerLinks a:hover {
    transition: all 0.2s ease-in-out;
    color: darkgrey;
  }

  .visit {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    .visit {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  .footerContainer {
    display: flex;
    justify-content: center;
    padding: 20px;
    bottom: 0;
    width: 100%;
    font-size: 14px;
    z-index: 2;
    background-color: #daedbd;
    margin-top: auto;
  }

  @media screen and (max-width: 480px) {
    .footerContainer {
      font-size: 12px;
    }
  }
`;
