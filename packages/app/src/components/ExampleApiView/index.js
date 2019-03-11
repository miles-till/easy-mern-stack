import React, { Component } from 'react';
import ExampleApi from 'apis/ExampleApi';

class ExampleApiView extends Component {
  state = {
    examples: []
  };

  createExample = async () => {
    try {
      const example = (await ExampleApi.create()).data;
      this.setState({ examples: [...this.state.examples, example] });
    } catch (error) {
      console.error('Failed to reroll example.', error);
    }
  }

  rerollExample = async (id) => {
    try {
      const reroll = (await ExampleApi.reroll(id)).data.roll;
      const examples = this.state.examples.map(e => e._id === id ? { _id: e._id, roll: reroll} : e);
      this.setState({ examples: [...examples] });
    } catch (error) {
      console.error('Failed to reroll example.', error);
    }
  }

  deleteExample = async (id) => {
    try {
      await ExampleApi.delete(id);
      this.setState({ examples: [...this.state.examples.filter(e => e._id !== id)] });
    } catch (error) {
      console.error('Failed to delete example.', error);
    }
  }

  componentDidMount = async() => {
    try {
      this.setState({ examples: [...(await ExampleApi.getAll()).data.examples] });
    } catch (error) {
      console.error('Failed to get all examples.', error);
    }
  }

  render() {
    const renderExamples = this.state.examples.map(e => 
      <li key={e._id} example={e}>
        <span>Roll: {e.roll}</span>
        <button onClick={() => this.rerollExample(e._id)}>Reroll</button>
        <button onClick={() => this.deleteExample(e._id)}>Delete</button>
      </li>
    );

    return (
      <section>
        <button onClick={() => this.createExample()}>Create</button>
        <ul>
          {renderExamples}
        </ul>
      </section>
    );
  }
}

export default ExampleApiView;
