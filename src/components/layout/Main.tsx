import { css } from 'emotion';
import * as React from 'react';

import { BG_COLOR } from '../../constants/theme';

const containerStyles = css({
  width: '640px',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: BG_COLOR,
  minHeight: '100vh',
});

export const Main = ({ children }: { children: any}) => (
  <div className={containerStyles}>
    { children }
  </div>
);
