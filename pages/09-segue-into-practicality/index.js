import React from 'react';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            What can we do with this knowledge?
          </h2>
        )}
      />
    </Wrapper>
  );
}

export default Slide;
