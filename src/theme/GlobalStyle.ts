import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
  }

  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: "color 9999s ease-out,  background-color 9999s ease-out";
      transition-delay: 9999s;
  }
  
  html {
    font-size: 62.5%;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.blue100};
  }

  b {
    font-weight: ${({ theme }) => theme.medium}
  }

  body {
    color: ${({ theme }) => theme.dark};
    background: ${({ theme }) => theme.dark150};
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 1.6rem;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 1rem;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.dark200};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.blue100};
      border-radius: .5rem;
      background: ${({ theme }) => theme.blueGradient};
      border: 1px solid ${({ theme }) => theme.dark200};
    }
  }
`;

export default GlobalStyle;
