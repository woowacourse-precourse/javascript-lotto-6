import { Console } from '@woowacourse/mission-utils';
import INPUT_VIEW from './View/inputView.js';
import Publish from './Publish.js';
import Lotto from './Lotto.js';
import OUTPUT_VIEW from './View/outputView.js';

class App {
  constructor() {
    this.BUY_COUNT = 0;
    this.MY_NUMBER = null;
    this.RANK_RESULT = [];
  }

  async play() {
    this.BUY_COUNT = await INPUT_VIEW.inputPrice();
    const publish = new Publish(this.BUY_COUNT);
    this.MY_NUMBER = await INPUT_VIEW.inputLotto();
    const winningLotto = new Lotto(this.MY_NUMBER).getNumbers();
    const BONUS_NUM = await INPUT_VIEW.inputBonus();
    const ranking = publish.getRank(winningLotto, BONUS_NUM);
    // console.log(ranking);
    OUTPUT_VIEW.outputRank(ranking);
  }
}

export default App;
