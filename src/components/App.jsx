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

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {this.state.isLoading && <div>LOADING</div>}
        <MaterialEditorForm onSubmit={this.addMaterial}></MaterialEditorForm>
      </Layout>
    );
  }
}
