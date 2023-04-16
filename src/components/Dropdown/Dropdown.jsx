import React from 'react';
import { DropdownElement, DropdownMenu } from './Dropdown.styled';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     console.log('SHOW');
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     console.log('HIDE');
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <DropdownElement>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'HIDE' : 'SHOW'}
        </button>

        {/* <button type="button" onClick={this.show}>
          Show
        </button>

        <button type="button" onClick={this.hide}>
          Hide
        </button> */}
        {this.state.visible && <DropdownMenu>Drop MENU</DropdownMenu>}
      </DropdownElement>
    );
  }
}

export default Dropdown;
