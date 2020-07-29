import React from 'react';
import { AppWidth, DocWidth } from '@tpr/core';
import { Header, Footer, Highlight, BetaHeader } from '@tpr/layout';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/Home';
import Typography from './views/Typography';
import About from './views/About';
import InitialQuestions from './views/InitialQuestions';
import WoundUpConfirmation from './views/WoundUpConfirmation';
import SchemeWoundUp from './views/SchemeWoundUp';
import SchemeStatusAndMembership from './views/SchemeStatusAndMembership';
import ElectronicComsConsent from './views/ElectronicComsConsent';
import SchemeNameAndAddress from './views/SchemeNameAndAddress';
import IndividualTrusteeStepOne from './views/AddIndividualTrustee/IndividualTrusteeStepOne';
import Trustees from './views/Trustees';
import AddTrustee from './views/AddTrustee';
import IndividualTrusteeStepTwo from './views/AddIndividualTrustee/IndividualTrusteeStepTwo';
import IndividualTrusteeStepThree from './views/AddIndividualTrustee/IndividualTrusteeStepThree';
import IndividualTrusteeStepFour from './views/AddIndividualTrustee/IndividualTrusteeStepFour';

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

      <DocWidth>
        <AppWidth>
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
            <Route
              path="/initial-questions/scheme-wound-up/wound-up-confirmation"
              component={() => <WoundUpConfirmation />}
            />
            <Route
              exact
              path="/scheme-status-and-membership"
              component={() => <SchemeStatusAndMembership />}
            />
            <Route
              exact
              path="/consent-to-electronic-communication"
              component={() => <ElectronicComsConsent />}
            />
            <Route
              exact
              path="/scheme-name-and-address"
              component={() => <SchemeNameAndAddress />}
            />
            <Route exact path="/trustees" component={() => <Trustees />} />
            <Route
              exact
              path="/trustees/add-trustee"
              component={() => <AddTrustee />}
            />
            <Route
              exact
              path="/trustees/add-trustee/add-individual-step-1"
              component={() => <IndividualTrusteeStepOne />}
            />
            <Route
              exact
              path="/trustees/add-trustee/add-individual-step-2"
              component={() => <IndividualTrusteeStepTwo />}
            />
            <Route
              exact
              path="/trustees/add-trustee/add-individual-step-3"
              component={() => <IndividualTrusteeStepThree />}
            />
            <Route
              exact
              path="/trustees/add-trustee/add-individual-step-4"
              component={() => <IndividualTrusteeStepFour />}
            />
          </Switch>
        </AppWidth>
      </DocWidth>

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
