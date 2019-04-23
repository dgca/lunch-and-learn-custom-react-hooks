import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
### The iterator protocol

An object is an \`iterator\` when it implements a \`next()\` method which returns an object with at least one of the following properties:

1. \`done\`
  * If \`true\`, the iterator is past the end of the iterated sequence. I.e. it's done iterating.
2. \`value\`
  * The current value returned by the iterator.

---

### The iterable protocol

An object is iterable when it implements a \`@@iterator\` method which returns an object that conforms to the iterator protocol.

`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Iteration protocols
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
    </Wrapper>
  );
}

export default Slide;
