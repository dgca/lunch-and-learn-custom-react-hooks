import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Displays a label for for custom hooks in React DevTools
* 2nd argument can be passed to format the value when inspected
* We'll see this in action in a bit
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useDebugValue
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
    </Wrapper>
  );
}

export default Slide;
