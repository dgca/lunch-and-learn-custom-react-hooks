import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Something interesting happens when our data types are iterable.
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Adding functionality to custom data types
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pen/6ea9e3d505ea847f7957349c17569ce0?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
