import React from 'react';
import { Header, Footer, Highlight, BetaHeader } from '@tpr/layout';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/Home';
import Typography from './views/Typography';
import About from './views/About';
import InitialQuestions from './views/InitialQuestions';
import SchemeWoundUp from './views/SchemeWoundUp';

function App() {
  return (
    <div>
      <BetaHeader text="This is a new service - your feedback will help us improve it." />
      <Header
        logoUrl={
          'https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-header.ashx'
        }
        title={'Scheme Return'}
        onClickSchemeOptions={() => {
          console.log('Scheme Options clicked');
        }}
        onClickLogout={() => {
          console.log('Logout clicked');
        }}
      />
      <Highlight name={'Scheme Name: The Best Pension Scheme'} psr={'012161'} />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/typography" component={() => <Typography />} />
        <Route path="/about" component={() => <About />} />
        <Route
          exact
          path="/initial-questions"
          component={() => <InitialQuestions />}
        />
        <Route
          exact
          path="/initial-questions/scheme-wound-up"
          component={() => <SchemeWoundUp />}
        />
      </Switch>
      <Footer
        logoUrl="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
        onLinkClickHandler={(url) => console.log(`navigate to ${url}`)}
        links={[
          {
            title: 'Accessibility',
            url:
              'https://www.thepensionsregulator.gov.uk/en/website-policies/accessibility-statement',
          },
          {
            title: 'Contact Us',
            url: 'https://www.thepensionsregulator.gov.uk/en/contact-us',
          },
          {
            title: 'Website Policies',
            url: 'https://www.thepensionsregulator.gov.uk/en/website-policies',
          },
        ]}
      />
    </div>
  );
}

export default App;
