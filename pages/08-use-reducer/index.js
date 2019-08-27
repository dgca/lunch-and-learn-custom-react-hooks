import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Alternative to \`useState\`
* Similar pattern to Redux reducers
* Lazy initialization with init function as 3rd argument
* State update is a replacement, it's _not_ merged in
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useReducer
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/bGbWbxJ?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
