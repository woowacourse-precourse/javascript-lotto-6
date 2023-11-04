import InputView from './InputView.js';

class Game {
  purchase() {
    InputView.purchaseLotto(this.handleLottoQuantity);
  }

  //   handleLottoQuantity = (quantity) => {
  //     console.log(quantity);
  //   };
}

export default Game;
