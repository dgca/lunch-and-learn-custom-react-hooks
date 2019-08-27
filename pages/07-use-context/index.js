import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Simple way to get a context's value
* Provider must be higher up in the tree
* Arg is the _context_, not the provider or consumer
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useContext
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/pozPzLz?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
