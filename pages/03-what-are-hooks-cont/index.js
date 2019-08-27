import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Only work in functional components
* Must be called in the same order
* Should be called at the top level (not in conditionals, loops, etc)
* Custom hooks must start with the word 'use'
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            What are hooks (cont)?
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
    </Wrapper>
  );
}

export default Slide;
