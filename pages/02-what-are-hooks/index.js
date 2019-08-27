import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* A new pattern for using existing React functionality in functional components.
  * E.g. \`useState\`, \`useContext\`
* A way to encapsulate reusable component logic.
  * Custom hooks
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            What are hooks?
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
    </Wrapper>
  );
}

export default Slide;
