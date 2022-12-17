import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }


  .w-auto {
    flex: 1;
  }

  .w-60 {
    flex: 0 1 60px;
    max-width: 60px;
  }

  .w-241 {
    flex: 0 1 241px;
    max-width: 241px;
  }

  .w-348 {
    flex: 0 1 348px;
    max-width: 348px;
  }

  .w-full {
    flex-wrap: wrap;
    display: flex;
    gap: 12px;
    flex: 0 1 100%;
    max-width: 100%;
  }

  @media all and (max-width: 940px) {
    .w-auto, .w-60 , .w-241, .w-348, .w-full {
        flex: 1 0 100%;
        max-width: initial;
    }
  }
`
