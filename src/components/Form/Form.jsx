import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  // генерация создания
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  // много обработчиков
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  // паттерн одного обработчика
  handleChange = event => {
    const { name, value } = event.currentTarget;

    // вычисляемые значения в методе
    this.setState({
      [name]: value,
    });
  };

  // сабмит формы (отдельный метод)
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  // сброс формы (очистка стейта)
  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    return (
      <div>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              name="name"
              type="text"
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={this.tagInputId}>
            Nickname
            <input
              name="tag"
              type="text"
              id={this.tagInputId}
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Form;

// паттерн - Контролируемый элемент
// каждый элемент формы хранится в стейте
// при каждом вводе в инпут, необходимо вызвать метод, который обновляет стейт
// переренд инпут

// 1. разметка инпута
// 2. положить в стейт поле со значением
// 3. метод
// 4. привязка метода к инпуту

// OnChange = onFocus + onBlur
// npm shortid для создания уникальных id
