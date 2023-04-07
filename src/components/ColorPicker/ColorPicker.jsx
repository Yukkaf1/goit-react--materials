import PropTypes from 'prop-types';
import {
  ColorPickerTitle,
  ColorSection,
  Wrapper,
  ColorList,
  ColorButton,
  ColorItem,
  ColorLabel,
} from './ColorPicker.stzled';
import { Component } from 'react';

export class ColorPicker extends Component {
  static defaultProps = {};

  state = {
    activeColorIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeColorIdx: index });
  };

  render() {
    const { activeColorIdx } = this.state;

    return (
      <Wrapper>
        <ColorPickerTitle>{this.props.title}</ColorPickerTitle>
        <p>Color: {activeColorIdx}</p>
        <ColorSection>
          {this.props.colors.map(({ color, label }, index) => {
            return (
              <ColorButton
                key={label}
                style={{ background: color }}
                onClick={() => this.setActiveIdx(index)}
              ></ColorButton>
            );
          })}
        </ColorSection>
      </Wrapper>
    );
  }
}

ColorPicker.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
