import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F2F2F2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p {
      font-size: 12px;
    //   font-family: 'Anton', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
`;
 
export default GlobalStyle;