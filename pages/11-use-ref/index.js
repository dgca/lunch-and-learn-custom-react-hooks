import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Alternative to createRef for DOM node refs
* Can be used for more than just DOM nodes
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useRef
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/yLBbyLp?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
