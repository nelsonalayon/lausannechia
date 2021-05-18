import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    :root {
         --darkGray: #3C3C39;
         --yellowStrong: #D68920;
         --yellowLight: #F3DA7E;
         --lightGray: rgba(60, 60, 57, 0.1);
    }
   
    
  body {
    margin: 0;
    padding: 0;
    background: var(--lightGray);    
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
    color: var(--yellowStrong);
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
    color: var(--yellowLight);
    padding: 20px;
    font-weight:300;
  }



  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: var(--darkGray)
  }
`;
 
export default GlobalStyle;