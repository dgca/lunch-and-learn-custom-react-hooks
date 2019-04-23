import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
An object is iterable when it implements a \`@@iterator\` method which returns an object that conforms to the iterator protocol.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            A handrolled iterable
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/a32ac11cbc4f63baee54093ae8207fc0?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
