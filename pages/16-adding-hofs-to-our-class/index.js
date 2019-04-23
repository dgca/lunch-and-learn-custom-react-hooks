import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Since we can spread our iterable data type into an array, we can easily borrow Array's higher-order functions!
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
        iframe="https://codepen.io/dgca/pen/5dad0fca3d29578955a1565e0ee299e5?editors=0012"
      />
    </Wrapper>
  );
}

export default Slide;
