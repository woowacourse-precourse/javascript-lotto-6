import InputView from '../views/InputView.js';

class GameController {
  async startGame() {
    const price = await InputView.inputPrices();
    console.log(price);
  }
}

export default GameController;
