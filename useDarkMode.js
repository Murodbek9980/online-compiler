// import { useEffect, useState } from 'react';

// export const useDarkMode = () => {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       window.localStorage.setItem('theme', 'dark')
//       setTheme('dark')
//     } else {
//       window.localStorage.setItem('theme', 'light')
//       setTheme('light')
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme');
//     localTheme && setTheme(localTheme);
//   }, []);

//   return [theme, toggleTheme]
// };

const { createGlobalStyle, ThemeProvider } = styled;
const { useState, useEffect } = React;

// display: flex;
//     flex-direction: column;s
//     align-items: center;
//     justify-content: center;
//     height: 100vh;

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  small {
    display: block;
  }

  button {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

const lightTheme = {
  body: '#e2e2e2',
  text: '#363537',
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)' };


const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)' };


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return /*#__PURE__*/(
    React.createElement(ToggleContainer, { lightTheme: isLight, onClick: toggleTheme }, /*#__PURE__*/
    React.createElement("img", { src: "https://image.flaticon.com/icons/svg/1164/1164954.svg", width: "224", height: "224", alt: "Sun free icon", title: "Sun free icon" }), /*#__PURE__*/
    React.createElement("img", { src: "https://image.flaticon.com/icons/svg/2033/2033921.svg", width: "224", height: "224", alt: "Moon free icon", title: "Moon free icon" })));


};

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 4rem;
  height: 2rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 1rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  });

  return [theme, toggleTheme];
};

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return /*#__PURE__*/(
    React.createElement(ThemeProvider, { theme: themeMode }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(GlobalStyles, null), /*#__PURE__*/
    React.createElement(Toggle, { theme: theme, toggleTheme: toggleTheme }), /*#__PURE__*/
    React.createElement("h1", null,), /*#__PURE__*/
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("span", null,), /*#__PURE__*/
    React.createElement("small", null,), /*#__PURE__*/
    React.createElement("small", null, /*#__PURE__*/)))));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));