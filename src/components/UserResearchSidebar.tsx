import React, { useContext } from 'react';
import { Sidebar } from '@tpr/layout';
import { useLocation, useHistory, matchPath } from 'react-router-dom';
import SidebarContext from './SidebarContext';

const UserResearchSidebar = () => {
  const history = useHistory();
  const location = useLocation();

  const { state } = useContext(SidebarContext);

  return (
    <Sidebar
      history={history}
      location={location}
      title={'Scheme return home'}
      titlePath={'/'}
      matchPath={matchPath}
      sections={[
        {
          title: 'Scheme details',
          order: 1,
          links: [
            {
              name: 'Scheme name and address',
              completed: state[0],
              path: '/scheme-name-and-address',
            },
            {
              name: 'Scheme status and membership',
              completed: state[1],
              path: '/scheme-status-and-membership',
            },
            {
              name: 'Consent to electronic communication',
              completed: state[2],
              path: '/consent-to-electronic-communication',
            },
          ],
        },
        {
          title: 'Role',
          order: 2,
          links: [
            {
              name: 'Trustee details',
              completed: state[3],
              path: '/trustees',
            },
            {
              name: 'Employer details',
              completed: state[4],
              path: '/employer-details',
            },
            {
              name: 'Service provider details',
              completed: state[5],
              path: '/service-provider-details',
            },
            {
              name: 'Named contact details',
              completed: state[6],
              path: '/named-contact-details',
            },
          ],
        },
        {
          title: 'Finish Up',
          order: 3,
          links: [
            {
              name: 'Review and submit',
              completed: state[7],
              path: '/review-and-submit',
            },
          ],
        },
      ]}
    />
  );
};

export default UserResearchSidebar;
