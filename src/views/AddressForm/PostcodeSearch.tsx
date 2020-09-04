import React from 'react';
import { Flex, P, Button } from '@tpr/core';
import { Form, FFInputText } from '@tpr/forms';

const PostcodeSearch = (props: any) => {
  const FIELD_NAME = 'postCode';

  return (
    <div>
      <Form
        onSubmit={() => console.log('submitting')}
        initialValues={{ [FIELD_NAME]: props.postcode || 'CM11 0AA' }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex
              cfg={{
                p: 4,
                bg: 'neutral.3',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <P cfg={{ my: 3 }}>Enter the postcode of the trustee's address</P>
              <FFInputText
                name={FIELD_NAME}
                label="Postcode"
                inputWidth={2}
                validate={(value) => {
                  if (!value) return 'Enter a postcode';
                }}
                value
              />
              <Flex cfg={{ my: 3 }}>
                <Button
                  onClick={() => {
                    props.nextStep();
                  }}
                >
                  Find address
                </Button>
              </Flex>
            </Flex>
          </form>
        )}
      </Form>
    </div>
  );
};

export default PostcodeSearch;
