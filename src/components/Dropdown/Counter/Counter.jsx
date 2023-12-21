import { Component } from 'react';

// let total = 0;

// const Counter = () => {
//   function handleClick(event) {
//     total += 1;
//     console.log(total);
//   }
//   return (
//     <div>
//       <p>{total}</p>
//       <div>
//         <button type="button" onClick={handleClick}>
//           +
//         </button>
//         <button type="button" onClick={handleClick}>
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;

// console.log(event); объект SyntheticBaseEvent - созданный реактом, который запускает функцию и сразу её очищает
// всплытие присутствует, как в JS
// ререндер total будет происходить, если В КОМПОНЕНТ должен прийти новый проп или измениться стейт - для этого нужен классовый Компонент

// создаём класс и наследуем его из реактового класса Component
// создаем обязательный метод render(), внутри которого делаем return()

/* 

под капотом:
создаём constructor, внутри которого super() - чтобы работал Component
ключевое слово this, который содержит объект state = {}
 
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  * в реакте всё упрощено, по этому можно писать только state={}, который надо будет изменять
*/

// {this.state.value} - контекст класса.состояние.ключ объекта state
// создаём методы класса
// присваиваем вызов функции handleClick на кнопки, как проп (через контекст this)
// this.state.value не будет работать внутри функции, так как функция handleClick должна быть стрелочная
// this создаёт контекст в момент создания стрелочной функции (при обычной декл функции - во время вызова)

/* 

для изменния стейта используется метод setState который принимает: 
- объект (новый стейт), если предыдщий стейт не нужен
- коллбек (перезапись предыдущего стейта), если нужен предыдущий стейт:

контекст.сетСтейт(предыдущий стейт => return {ключ: предыдущий стейт + 1})
this.setState(prevState            => return {value: prevState.value +1}})

*/

class Counter extends Component {
  state = {
    value: 0,
  };

  handleClickIncrement = event => {
    // this.setState({ value: 1 });
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleClickDecrement = event => {
    // this.setState({ value: 1 });
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <div>
          <button type="button" onClick={this.handleClickIncrement}>
            +
          </button>
          <button type="button" onClick={this.handleClickDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
