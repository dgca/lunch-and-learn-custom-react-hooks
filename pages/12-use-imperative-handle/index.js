import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Interface to provide parent components with custom ref functions
* Used with \`forwardRef\`
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useImperativeHandle
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/pozPvJp?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
