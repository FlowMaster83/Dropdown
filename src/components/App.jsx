import { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import Dropdown from './Dropdown/Dropdown';
import Form from './Form/Form';
import FormLogin from './FormLogin/FormLogin';
import { nanoid } from 'nanoid';
import { RecipeForm } from './RecipeForm/RecipeForm';

class App extends Component {
  state = {
    isShowModal: false,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

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
    // console.log(data);
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  render() {
    return (
      <>
        <Dropdown />
        <Header showModal={this.showModal} />
        <Counter />
        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )}
        {/* получение доступа к форме при её сабмите */}
        <Form onSubmit={this.formSubmitHandler} />
        <RecipeForm onSubmit={this.addRecipe} />
      </>
    );
  }
}

export default App;
