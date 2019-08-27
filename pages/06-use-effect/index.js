import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* \`componentDidRender\`
* 2nd arg is array of deps
* Return callback function if cleanup is needed
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useEffect
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/NWKjKrO?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
