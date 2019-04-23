import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
Since generator functions make it easy to implement both the iterator and\n
iterable protocols, it's easy for us to make custom data types iterable.
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
    </Wrapper>
  );
}

export default Slide;
