import React from 'react';
import { Sidebar } from '@tpr/layout';
import { useLocation, useHistory, matchPath } from 'react-router-dom';

const UserResearchSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Sidebar
      history={history}
      location={location}
      title={'Scheme return home'}
      matchPath={matchPath}
      sections={[
        {
          title: 'Scheme details',
          order: 1,
          links: [
            {
              name: 'Scheme name and address',
              completed: true,
              path: 'scheme-name-and-address',
            },
            {
              name: 'Scheme status and membership',
              completed: false,
              path: 'scheme-status-and-membership',
            },
            {
              name: 'Consent to electronic communication',
              completed: false,
              path: 'consent-to-electronic-communication',
            },
          ],
        },
        {
          title: 'Role',
          order: 2,
          links: [
            {
              name: 'Trustee details',
              completed: false,
              path: 'trustees',
            },
            {
              name: 'Employer details',
              completed: false,
              path: 'employer-details',
            },
            {
              name: 'Service provider details',
              completed: false,
              path: 'service-provider-details',
            },
            {
              name: 'Named contact details',
              completed: false,
              path: 'named-contact-details',
            },
          ],
        },
        {
          title: 'Finish Up',
          order: 3,
          links: [
            {
              name: 'Review and submit',
              completed: false,
              path: 'review-and-submit',
            },
          ],
        },
      ]}
    />
  );
};

export default UserResearchSidebar;
