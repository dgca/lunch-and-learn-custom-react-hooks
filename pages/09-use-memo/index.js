import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Memoizes most recent value based on dependencies array
* Useful for optimizing performance of expensive functions
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useMemo
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/wvwdwRZ?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
