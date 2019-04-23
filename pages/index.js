import React from 'react';
import Wrapper from '../templates/Wrapper/Wrapper.react';
import Content from '../templates/Content/Content.react';

function Home() {
  return (
    <Wrapper>
      <Content
        title={(
          <div>
            <h1 className="title">
              Iterables and (async) generator functions
            </h1>
            <p className="subtitle">A practical walkthrough</p>
            <p className="byline">By: Dan Cortes</p>
            <style jsx>
              {`
                .title {
                  margin-bottom: 0.5em;
                }
                .subtitle {
                  font-size: 30px;
                  font-style: italic;
                  margin-bottom: 0.75em;
                }
                .byline {
                  font-size: 20px;
                }
              `}
            </style>
          </div>
        )}
      />
    </Wrapper>
  );
}

export default Home;
