import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    :root {
         --darkGray: 3C3C39;
    }
   
    
  body {
    margin: 0;
    padding: 0;
    background: #F2F2F2;
    // background-color: #var(--darkGray);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h1 {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 88px;
  }

  h2 {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 88px;
  }

  h3 {
    font-family: Anton;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 44px;
  }

  h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }

  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }



  p {
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 22px;
  }
`;
 
export default GlobalStyle;