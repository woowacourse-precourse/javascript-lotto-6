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
    this.PUBLISH_LOTTO = null;
    this.WINNING_LOTTO = null;
    this.BONUS_NUM = 0;
  }

  async play() {
    // this.settingMoney();
    this.BUY_COUNT = await INPUT_VIEW.inputPrice();
    this.PUBLISH_LOTTO = new Publish(this.BUY_COUNT);
    this.WINNING_LOTTO = await INPUT_VIEW.inputLotto();
    this.BONUS_NUM = await INPUT_VIEW.inputBonus(this.WINNING_LOTTO);
    const ranking = this.PUBLISH_LOTTO.getRank(
      this.WINNING_LOTTO,
      this.BONUS_NUM,
    );
    OUTPUT_VIEW.outputRank(ranking);
    const statistics = this.PUBLISH_LOTTO.getStatistics(
      this.BUY_COUNT,
      ranking,
    );
    OUTPUT_VIEW.outputStatistics(statistics);
  }
}

export default App;
