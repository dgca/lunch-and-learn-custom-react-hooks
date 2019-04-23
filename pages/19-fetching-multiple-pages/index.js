import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
You can use this to, for example, combine multiple API responses into one.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Merging API responses
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/4a5b446cfaff7d2e68fb2b631a0b9c2e?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
