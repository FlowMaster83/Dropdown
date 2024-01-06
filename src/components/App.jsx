import { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import Dropdown from './Dropdown/Dropdown';
import Form from './Form/Form';
import TodoEditor from './TodoEditor/TodoEditor';
import shortid from 'shortid';

class App extends Component {
  state = {
    isShowModal: false,
  }

  // сетстейт это регистрация события, которая обновляет интерфейс асинхронно (после выполнения синх кода)
  // за один сетстейт можно обновлять сколько угодно состояний
  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  // метод для сабмита формы
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Dropdown />
        <Header showModal={this.showModal} />
        <Counter />
        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
        {/* получение доступа к форме при её сабмите */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <TodoEditor onSubmit={this.addTodo} /> */}
      </div>
    );
  }
}

export default App;
