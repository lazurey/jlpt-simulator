import { css } from 'emotion';
import * as React from 'react';

const containerStyles = css({
  width: '640px',
  maxWidth: '100%',
  margin: '0 auto',
});

export const Main = ({ children }: { children: any}) => (
  <div className={containerStyles}>
    { children }
  </div>
);
