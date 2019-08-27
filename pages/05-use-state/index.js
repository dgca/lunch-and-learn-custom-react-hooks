import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* State management hook
* Returns \`[value, setValue]\`
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useState
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/YzKVKqQ?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
