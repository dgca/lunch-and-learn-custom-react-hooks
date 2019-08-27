import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
* Identical signature to useEffect
* Fires synchronously as soon as the DOM is done updating
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            useLayoutEffect
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
      <Content
        iframe="https://codepen.io/dgca/pres/ExYmaEz?editors=0011"
      />
    </Wrapper>
  );
}

export default Slide;
