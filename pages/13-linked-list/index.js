import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Let's start with a basic linked list.
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
        iframe="https://codepen.io/dgca/pen/567686c4941f8fc38fb7d260884e09d4?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
