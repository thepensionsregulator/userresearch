import React from 'react';
import logo from './logo.svg';
import Styles from './App.module.scss';

function App() {
  return (
    <div className={Styles.App}>
      <header className={Styles.AppHeader}>
        <img src={logo} className={Styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={Styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className={Styles.RedBorder}>Testing GitHub actions small change</p>
      </header>
    </div>
  );
}

export default App;
