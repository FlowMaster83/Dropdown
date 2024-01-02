import { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import Dropdown from './Dropdown/Dropdown';
import Form  from './Form/Form';

class App extends Component {
  state = {
    isShowModal: false,
  };

  // сетстейт это регистрация события, которая обновляет интерфейс асинхронно (после выполнения синх кода)
  // за один сетстейт можно обновлять сколько угодно состояний
  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div className="container">
        <Dropdown />
        <Header showModal={this.showModal} />
        <Counter />
        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
        <Form />
      </div>
    );
  }
}

export default App;
