import React from 'react';
import { Component } from 'react';
import { Container, Button } from './Dropdown.styled';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  // изменение состояния от предыдущего
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <Container>
        {this.state.visible && <Container>Menu</Container>}

        <Button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide menu' : 'Show menu'}
        </Button>
      </Container>
    );
  }
}

export default Dropdown;

// объявляем состояние
// делаем тоггл через this.setState от предыдущего состояния
// рендерим разметку, в которой перерисовывается кнопка
