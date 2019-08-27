import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Wrapper from '../../templates/Wrapper/Wrapper.react';
import Content from '../../templates/Content/Content.react';

const content = `
  * <span class='fab fa-github'></span> [@dgca](https://github.com/dgca)
  * <span class='fab fa-codepen'></span> [@dgca](https://codepen.io/dgca/)
  * <span class='fab fa-twitter'></span> [@dan\\_cortes\\_](https://twitter.com/dan_cortes_)
`;

function Slide() {
  return (
    <Wrapper>
      <Content
        title={(
          <h2>
            whoami
          </h2>
        )}
      >
        <ReactMarkdown
          source={content}
          escapeHtml={false}
        />
      </Content>
    </Wrapper>
  );
}

export default Slide;
