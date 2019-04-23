import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
  Cause you can definitely do this in a million ways, but this may be the coolest™ way to do it.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Have you ever needed to increment a number by one?!?
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/6eb26170af21e5e992f68737582e11ba?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
