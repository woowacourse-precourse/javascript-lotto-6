import InputView from './InputView.js';
import Purchase from './Purchase.js';

class Game {
  purchase() {
    InputView.purchaseLotto(this.handleLottoQuantity);
  }

  handleLottoQuantity = (quantity) => {
    const AMOUNT = new Purchase(quantity).getAmount();
    console.log(AMOUNT);
  };
}

export default Game;
