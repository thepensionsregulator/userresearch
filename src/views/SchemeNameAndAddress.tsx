import React, { useState, useContext } from 'react';
import Styles from './Layout.module.scss';
import { H1, Hr, P, H4, Flex, Link as TPRLink, Button } from '@tpr/core';
import UserResearchSidebar from '../components/UserResearchSidebar';
import { Link, useHistory } from 'react-router-dom';
import { ArrowLink, ArrowButton } from '@tpr/layout';
import { Form, FieldProps, renderFields } from '@tpr/forms';
import ScrollToTop from '../components/ScrollToTop';
import StateContext from '../StateContext';

const SchemeNameAndAddress = () => {
  const appState = useContext(StateContext);
  const history = useHistory();
  const [findAddress, setFindAddress] = useState(false);

  const formFields: FieldProps[][] = [
    [
      {
        type: 'text',
        name: 'schemeName',
        inputWidth: 5,
        label: 'Scheme name',
        validate: (value) => {
          if (!value) {
            return 'Scheme name required';
          }
        },
        hint:
          'This should be the full name of the pension scheme as written in the latest trust deed or any other subsequent amending document. We advise you not to include any scheme reference numbers as part of the scheme name. There is a space to add these details in the section relating to insurance company information.',
      },
    ],
    [
      {
        type: 'select',
        name: 'selectAddress',
        label: 'Scheme correspondence address',
        placeholder: 'Please select your address from the dropdown menu...',
        options: [{ label: 'Your search criteria has no match', value: 0 }],
        inputWidth: 6,
      },
    ],
    [
      {
        type: 'text',
        name: 'postCode',
        label: 'Postcode',
        error: 'Please enter a postcode',
        inputWidth: 8,
        cfg: { mb: 3 },
      },
    ],
  ];

  const [fields, setFields] = useState(formFields);

  const onSubmit = (values: any) => {
    appState.setSchemeName(values.schemeName);
    history.push('/scheme-status-and-membership');
  };

  const AddressLookup = () => {
    fields[1][0].options![0].label =
      'The Pensions Regulator, Napier House, Trafalgar Place, BRIGHTON, BN1 4DW';
    setFields({ ...fields });
    setFindAddress(false);
  };

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
        <Form
          onSubmit={onSubmit}
          initialValues={{
            schemeName: appState.schemeName,
            postCode: 'BN1 4DW',
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Flex cfg={{ flexDirection: 'column', mb: 3 }}>
                <P cfg={{ mb: 4 }}>
                  These are the scheme details currently held by the regulator.
                  Correct any details as necessary.
                </P>
                {renderFields(fields[0])}
              </Flex>
              <Flex cfg={{ mb: 4, flexDirection: 'column' }}>
                <H4 cfg={{ mb: 1 }}>Scheme correspondence address</H4>
                <P cfg={{ mb: 4 }}>
                  We'll use this address when we need to get in touch with the
                  scheme trustee
                </P>
                <Flex
                  cfg={{
                    mb: 4,
                    p: 3,
                    bg: 'neutral.3',
                    flexDirection: 'row',
                  }}
                >
                  {findAddress ? (
                    <Flex
                      cfg={{
                        flexDirection: 'column',
                      }}
                    >
                      {renderFields(fields[2])}
                      <Button type="button" onClick={() => AddressLookup()}>
                        Find address
                      </Button>
                    </Flex>
                  ) : (
                    <Flex>
                      <P cfg={{ mr: 2 }}>
                        The Pensions Regulator, Napier House, Trafalgar Place,
                        BRIGHTON, BN1 4DW
                      </P>
                      <TPRLink
                        onClick={() => {
                          setFindAddress(true);
                        }}
                      >
                        Change
                      </TPRLink>
                    </Flex>
                  )}
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
        <ScrollToTop />
      </div>
    </div>
  );
};

export default SchemeNameAndAddress;
