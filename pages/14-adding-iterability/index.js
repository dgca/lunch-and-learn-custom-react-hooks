import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Let's make it iterable.

This is something some popular libraries like Immutable.js make use of.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Adding functionality to custom data types
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/079f7abe80d228ccd6e6b2e0454f0f9f?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
