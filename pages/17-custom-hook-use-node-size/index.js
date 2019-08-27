import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Or we can combine hooks to make more powerful custom hooks
* Oh, and about [useDebugValue](https://codepen.io/dgca/debug/GRKmgYm?editors=0011s)
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Custom hook: useNodeSize
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/GRKmgYm?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
