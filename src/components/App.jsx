import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { Layout } from './Layout';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async addMaterial(values) {
    const material = await API.addMaterial(values);
    this.setState(state => ({ materials: [...state.materials, material] }));
    console.log(material);
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm onSubmit={this.addMaterial}></MaterialEditorForm>
      </Layout>
    );
  }
}
