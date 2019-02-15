import { css } from 'emotion';
import { default as React } from 'react';

import { BG_COLOR } from '../../constants/theme';

const titleStyles = css({
  height: '40px',
  width: '90%',
  backgroundColor: BG_COLOR,
  opacity: 0.8,
  margin: '20px auto',
});

const itemStyles = css({
  height: '40px',
  width: '90%',
  border: `1px solid ${BG_COLOR}`,
  margin: '10px auto',
});

const containerStyles = css({
  marginTop: '60px',
});

export const Skeleton = () => {
  return (<div className={containerStyles}>
    <div className={titleStyles} />
    <div className={itemStyles} />
    <div className={itemStyles} />
    <div className={itemStyles} />
    <div className={itemStyles} />
  </div>);
};
