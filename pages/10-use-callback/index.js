import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Functionally the same as:

\`\`\`
const cb = useMemo(
  () => () => {...}, [...args]
);
\`\`\`
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useCallback
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/vYBmYmb?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
