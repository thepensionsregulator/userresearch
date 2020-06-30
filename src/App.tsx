import React from 'react';
import ThemeProvider from '@tpr/theming';
import { Header, Footer, Highlight } from '@tpr/layout';

function App() {
  return (
    <ThemeProvider>
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
      <Footer
        logoUrl="https://www.thepensionsregulator.gov.uk/-/media/thepensionsregulator/images/logo/tpr-logo-footer.ashx"
        onLinkClickHandler={(url) => console.log(`navigate to ${url}`)}
        links={[
          { title: 'Website help', url: 'link-1' },
          { title: 'Cymraeg', url: 'link-2' },
          { title: 'Site map', url: 'link-3' },
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
