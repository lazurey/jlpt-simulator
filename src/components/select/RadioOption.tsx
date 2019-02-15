import { css, cx } from 'emotion';
import { Component, default as React } from 'react';
import { BG_COLOR, ERROR_COLOR_RGB, PRIMARY_COLOR_RGB } from '../../constants/theme';

interface IRadioOptionComp {
  value: string;
  displayText: string;
  clz?: string;
  groupName: string;
  selectedValue?: string;
  onChange?: (args: any) => void;
}

const optionStyles = css({
  border: `1px solid ${BG_COLOR}`,
  padding: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '10px',
  borderRadius: '3px',
  cursor: 'pointer',
  ' input': {
    width: '30px',
  },
  '&:hover': {
    backgroundColor: `rgba(${PRIMARY_COLOR_RGB}, 0.06)`,
  },
  '&.bg-correct': {
    backgroundColor: `rgba(${PRIMARY_COLOR_RGB}, 0.3)`,
  },
  '&.bg-wrong': {
    backgroundColor: `rgba(${ERROR_COLOR_RGB}, 0.3)`,
  },
});

const checkedStyles = css({
  backgroundColor: `rgba(${PRIMARY_COLOR_RGB}, 0.1)`,
});

export class RadioOption extends Component<IRadioOptionComp, any> {
  onClick = () => {
    const { onChange, value } = this.props;
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  }

  render() {
    const { value, displayText, groupName, selectedValue, clz } = this.props;
    const checked = (selectedValue === value);
    return (<div className={cx(optionStyles, { [checkedStyles] : checked }, `bg-${clz}`)} onClick={this.onClick}>
      <input
        type='radio' name={groupName}
        checked={checked}
        value={value} onChange={this.onClick} />
      <label>{displayText}</label>
    </div>);
  }
}
