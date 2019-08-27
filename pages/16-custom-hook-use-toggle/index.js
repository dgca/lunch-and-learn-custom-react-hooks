import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* We can make a custom hook with just one built-in hook
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Custom hook: useToggle
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/qBWmEME?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
