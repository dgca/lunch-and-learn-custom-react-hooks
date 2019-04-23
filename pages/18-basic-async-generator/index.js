import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
From an async generator function, we can yield an awaited result.

We can then use a for await...of loop to get our async data.

Let's count again 🧛‍♀️!
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            {'async function*() {yield await ...}'}
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/794ce881faddb11d038dde6a60d3a0bf?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
