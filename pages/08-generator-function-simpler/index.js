import React from 'react';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            A simpler generator function that returns some critters.
          </h2>
        )}
      />
      <Content
        iframe="https://codepen.io/dgca/pen/26db6c0a019281ceda36d0e1c3930157?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
