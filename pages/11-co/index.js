import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Before async/await was widely supported and we were bad at transpiling, there was \`co\`!

_&#42; This \`async\` is not the titular example..._
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Async*/await-like functionality before the spec was adopted
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/1137cfd5520b1f92634879b538015262?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
