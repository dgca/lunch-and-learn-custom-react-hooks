import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
An object is an \`iterator\` when it implements a next() method which returns an object with at least one of the following properties:

1. \`done\`
  * If \`true\`, the iterator is past the end of the iterated sequence. I.e. it's done iterating.
2. \`value\`
  * The current value returned by the iterator.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            A handrolled iterator
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/8b9d8f7ca88bf594e792d0682ea170b0?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
