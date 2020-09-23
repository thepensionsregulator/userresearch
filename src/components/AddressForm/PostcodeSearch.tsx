import React from 'react';
import { Flex, P, Button } from '@tpr/core';
import { FFInputText } from '@tpr/forms';

const PostcodeSearch = (props: { text?: string }) => {
  return (
    <>
      <Flex
        cfg={{
          p: 4,
          bg: 'neutral.3',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {props.text ? <P cfg={{ my: 3 }}>{props.text}</P> : <></>}
        <FFInputText
          name="postcodeSearch"
          label="Postcode"
          inputWidth={2}
          validate={(value) => {
            if (!value) return 'Enter a postcode';
          }}
        />
        <Flex cfg={{ my: 3 }}>
          <Button type="submit">Find address</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default PostcodeSearch;
