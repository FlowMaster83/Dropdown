import React from 'react';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide menu' : 'Show menu'}
        </button>

        {this.state.visible && <div>Menu</div>}
      </div>
    );
  }
}

export default Dropdown;

// объявляем состояние
// делаем тоггл через this.setState от предыдущего состояния
// рендерим разметку, в которой перерисовывается кнопка
