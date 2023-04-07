import { Component } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Tabs } from './Tabs/Tabs';
import data from '../data/data.json';

export class App extends Component {
  state = {};

  render() {
    const colorPickerOptions = [
      { label: 'red', color: '#F44336' },
      { label: 'green', color: '#4CAF50' },
      { label: 'blue', color: '#2196F3' },
      { label: 'grey', color: '#607D8B' },
      { label: 'pink', color: '#3F5185' },
    ];

    return (
      <>
        <Tabs items={data} />

        {/* <ColorPicker title="Color Picker" colors={colorPickerOptions} /> */}
      </>
    );
  }
}
