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
    const VAL = false;
    this.BUY_COUNT = await INPUT_VIEW.inputPrice();
    const publish = new Publish(this.BUY_COUNT);
    this.WINNING_LOTTO = await INPUT_VIEW.inputLotto();
    const BONUS_NUM = await INPUT_VIEW.inputBonus(this.WINNING_LOTTO);
    const ranking = publish.getRank(this.WINNING_LOTTO, BONUS_NUM);
    // console.log(ranking);
    OUTPUT_VIEW.outputRank(ranking);
    const statistics = publish.getStatistics(this.BUY_COUNT, ranking);
    OUTPUT_VIEW.outputStatistics(statistics);
  }
}

export default App;
