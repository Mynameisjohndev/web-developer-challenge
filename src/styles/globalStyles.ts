import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    
    --gray-1000: #2B2B2B;
    --gray-900: #343434;
    --gray-800: #313131;
    --gray-700: #515151;
    --gray-600: #494949;
    --gray-550: #4E4E4E;
    --gray-500: #5F5F5F;
    --gray-400: #838383;
    --gray-20: #565656;
    --gray-10: #5B5B5B;
    --gray: #888888;
    --white: #FFFFFF;
    --green-600: #71BB00;
    --orange-300: #AD4F26;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--gray-800);
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea,button{
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
    color: var(--gray-10);
  }
  p{
    font-weight: 300;
    color: var(--gray-10);
  }

  button{
    cursor: pointer;
  }
 

`;
