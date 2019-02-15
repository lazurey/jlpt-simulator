import { css } from 'emotion';
import * as React from 'react';

const containerStyles = css({
  padding: '40px 3.2%',
});

export const PageContainer = ({ children }: { children: any}) => (
  <div className={containerStyles}>
    { children }
  </div>
);
