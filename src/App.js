import Lotto from './model/Lotto.js';
import InputView from './view/inputView.js';
import OutputView from './view/outputView.js';

class App {
  #inputView;
  #outputView;
  #coin;

  async play() {
    this.#initialize();
    this.buyLotto(this.#inputView, this.#outputView);
    this.getWinningNumber();
    this.printWinningResult();
  }

  #initialize() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async buyLotto(inputView, outputView) {
    this.#coin = await inputView.inputCash();
    // console.log('로또 구매하는 로직');
  }

  async getWinningNumber() {
    // console.log('당첨번호 입력로직');
  }

  printWinningResult() {
    // console.log('당첨결과 출력');
  }
}

export default App;
