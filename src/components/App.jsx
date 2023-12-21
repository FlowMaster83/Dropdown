import { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';

import Modal from './Modal/Modal';

// export const App = () => {
//   return (
//     <>
//       {/* <Dropdown /> */}
//       {/* <Counter /> */}
//       {true && <Modal></Modal>}
//     </>
//   );
// };

class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
      </div>
    );
  }
}

export default App;

// расширяем App в зависимость от Component
// метод showModal прокидываем, как проп компоненту Header
