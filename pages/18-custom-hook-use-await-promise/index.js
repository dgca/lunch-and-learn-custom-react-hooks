import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* We can also use async functions in useEffect to better manage async operations
* useEffect doesn't accept async functions as its argument, but you can call async functions from inside the callback
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Custom hook: useAwaitPromise
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/NWKjPJM?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
