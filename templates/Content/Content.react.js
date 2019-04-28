import React from 'react';
import classnames from 'classnames';
import './content.scss';

function Content({
  title,
  children,
  iframe
}) {
  return (
    <div
      className={classnames('content', {
        'content--centered': !children
      })}
    >
      {title && (
        <div className="content__title">
          {title}
        </div>
      )}
      {children && (
        <div className="content__children">
          {children}
        </div>
      )}
      {iframe && (
        <iframe
          src={iframe}
          title="CodePen"
          className="content__iframe"
          onLoad={(e) => {
            e.target.blur();
          }}
        />
      )}
    </div>
  );
}

export default Content;
