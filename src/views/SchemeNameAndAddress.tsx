import React from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, H4, Flex, Link as TPRLink, Button } from '@tpr/core';

import UserResearchSidebar from '../components/UserResearchSidebar';
import { Link } from 'react-router-dom';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { Form, FieldProps, renderFields, FFSelect } from '@tpr/forms';

const SchemeNameAndAddress = () => {
  const fields: FieldProps[][] = [
    [{ type: 'text', name: 'schemeName', inputWidth: 5 }],
    [
      {
        type: 'select',
        name: 'selectAddress',
        placeholder: 'Please select your address from the dropdown menu...',
        options: [{ label: 'Your search criteria has no match', value: 0 }],
        inputWidth: 6,
      },
    ],
  ];

  const onSubmit = () => console.log('Form submit');
  return (
    <div className={Styles.root}>
      <UserResearchSidebar />
      <div className={Styles.main}>
        <Link to="/">
          <ArrowLink
            onClick={() => {}}
            pointsTo="left"
            iconSide="left"
            cfg={{ mt: 3 }}
          />
        </Link>
        <H1 cfg={{ mt: 6, mb: 2 }}>Scheme name and address</H1>
        <Hr cfg={{ mt: 6, mb: 8 }} />
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form>
              <Flex cfg={{ flexDirection: 'column', mb: 3 }}>
                <P cfg={{ mb: 4 }}>
                  These are the scheme details currently held by the regulator.
                  Correct any details as necessary.
                </P>
                <H4 cfg={{ mb: 1 }}>Scheme Name</H4>
                <P cfg={{ mb: 2 }}>
                  This should be the full name of the pension scheme as written
                  in the latest trust deed or any other subsequent amending
                  document. We advise you not to include any scheme reference
                  numbers as part of the scheme name. There is a space to add
                  these details in the section relating to insurance company
                  information.
                </P>
                {renderFields(fields[0])}
              </Flex>
              <Flex cfg={{ mb: 4, flexDirection: 'column' }}>
                <H4 cfg={{ mb: 1 }}>Scheme correspondence address</H4>
                <P cfg={{ mb: 4 }}>
                  We'll use this address when we need to get in touch with the
                  scheme trustee
                </P>
                <Flex cfg={{ mb: 4, p: 3, bg: 'neutral.1' }}>
                  <P cfg={{ mr: 2 }}>
                    The Pensions Regulator, Napier House, Trafalgar Place,
                    BRIGHTON, BN1 4DW
                  </P>
                  <TPRLink
                    onClick={() => (
                      <div>
                        <FFSelect name="postCode" />
                        <Button type="button">Find Address</Button>
                      </div>
                    )}
                  >
                    Change
                  </TPRLink>
                </Flex>
                <H4 cfg={{ mb: 1 }}>Select Address</H4>
                {renderFields(fields[1])}
              </Flex>
              <Hr cfg={{ mb: 8 }} />
              <ArrowButton
                type="submit"
                pointsTo="right"
                iconSide="right"
                title="Save and Continue"
              />
            </form>
          )}
        </Form>
        <div className={Styles.backToTop}>
          <ArrowLink
            iconSide="left"
            pointsTo="up"
            onClick={() => console.log('clicked')}
            cfg={{ mr: 3 }}
            title="Back to top"
          />
        </div>
      </div>
    </div>
  );
};

export default SchemeNameAndAddress;
