import React from 'react';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    console.log('Click +++++');
    console.log(event.target);

    this.setState(prevState => {
      console.log(prevState.value);
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = event => {
    console.log('Click -----');
    console.log(event.target);

    this.setState(prevState => {
      console.log(prevState.value);
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
