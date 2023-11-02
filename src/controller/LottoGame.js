import InputView from '../view/InputView.js';

class LottoGame {
  async startGame() {
    const amount = await InputView.inputAmount();
  }
}

export default LottoGame;
