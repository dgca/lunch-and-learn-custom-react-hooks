import React from 'react';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Generator functions return an object which implements
            both the iterator and iterable protocols!
          </h2>
        )}
      />
      <Content
        iframe="https://codepen.io/dgca/pen/8ce6d0ca2b45d053fb59be4ce02ff177?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
