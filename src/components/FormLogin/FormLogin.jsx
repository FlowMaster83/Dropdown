import { Component } from 'react';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: 'male',
  };

  // метод для инпутов
  // деструктуризируем event.target
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  // метод для сабмита
  // не деструктуризируем event, потому что сбрасываем нативное поведение через preventDefault();
  handleSubmit = event => {
    event.preventDefault();

    // // очистка формы (возврат стейта, если нет других данных)
    // this.props.createUser(this.state);

    // если в стейте, кроме email и password, есть ещё данные
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });

    // очистка формы (возврат стейта, если нет других данных)
    this.setState({
      email: '',
      password: '',
    });

    this.props.closeModal();
  };

  // метод для чекбокса
  handleCheck = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  // метод для радио
  handleRadio = ({ target: { value } }) => {
    this.setState({
      gender: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Inputs */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.isChecked}
            onChange={this.handleCheck}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree
          </label>
        </div>

        {/* Radios */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={this.state.gender === 'male'}
            onChange={this.handleRadio}
            value="male"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.gender === 'female'}
            onChange={this.handleRadio}
            value="female"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>

        {/* Submit */}
        <button
          disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormLogin;

// обращение к компоненту
// компонент обновляется и записывает в форму
