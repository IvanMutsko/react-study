import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    tag: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitProps(this.state);

    this.reset();
  };

  reset = this.setState({
    name: '',
    tag: '',
  });

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Tag
            <input
              type="text"
              name="tag"
              value={this.state.Tag}
              onChange={this.handleChange}
            />
          </label>
          <button type="submut">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
