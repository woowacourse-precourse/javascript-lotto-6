import UserLotto from './UserLotto.js.js.js';
import Lotto from './lotto.js.js.js';
import Statistics from './statistics.js.js.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class controller {
  #inputView;
  #outputView;
  #userLotto;
  #winningLotto;
  #statistics;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#statistics = new Statistics();
  }
}
