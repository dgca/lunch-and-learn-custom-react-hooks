import React from 'react';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            So what the heck are generator functions?
          </h2>
        )}
      />
    </Wrapper>
  );
}

export default Slide;
