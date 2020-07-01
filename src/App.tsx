import React from 'react';
import { Header, Footer, Highlight } from '@tpr/layout';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import Typography from './views/Typography';
import About from './views/About';

function App() {
  return (
    <div>
      <Header
        logoUrl={
          'https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-header.ashx'
        }
        title={'User Research'}
        onClickSchemeOptions={() => {
          console.log('Scheme Options clicked');
        }}
        onClickLogout={() => {
          console.log('Logout clicked');
        }}
      />
      <Highlight name={'Scheme Name'} psr={'012161'} />
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/typography" component={() => <Typography />} />
        <Route path="/about" component={() => <About />} />
      </Switch>
      <Footer
        logoUrl="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
        onLinkClickHandler={(url) => console.log(`navigate to ${url}`)}
        links={[
          { title: 'Website help', url: 'link-1' },
          { title: 'Cymraeg', url: 'link-2' },
          { title: 'Site map', url: 'link-3' },
        ]}
      />
    </div>
  );
}

export default App;
