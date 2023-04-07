import PropTypes from 'prop-types';
import { Component } from 'react';

export class Tabs extends Component {
  static defaultProps = {};

  state = {
    activeTabIdx: 0,
  };

  // редко применяем - чтоб не перерендер делать или PureComponent

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveIdx = index => {
    this.setState({ activeTabIdx: index });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.text}</p>
        </div>
      </>
    );
  }
}
