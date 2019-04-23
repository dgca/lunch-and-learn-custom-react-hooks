import React from 'react';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
> JS devs of reddit, what JS info do you have a hard time wrapping your head around?

> Generator functions and iterators

* Top post on the thread
* Overwhelming agreement
* Infrequently used
* Extremely powerful
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            Why iterables and generator functions?
          </h2>
        )}
      >
        <ReactMarkdown source={content} />
      </Content>
    </Wrapper>
  );
}

export default Slide;
