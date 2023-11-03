import { Console, Random } from '@woowacourse/mission-utils';
import * as utils from './LottoUtils.js';
class App {
  async play() {
    const AMOUNT = await utils.multiInputAmount();
    const LOTTO_COUNT = utils.getLottoCount(AMOUNT);
    const LOTTOS = utils.getLottos(LOTTO_COUNT);
    utils.printLottos(LOTTOS);
    const WINNING_NUMBERS = await utils.multiInputWiningNumbers();
    const BONUS_NUMBER = await utils.multiInputBonusNumber(WINNING_NUMBERS);
    const RESULT = utils.getResult(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    utils.printResult(RESULT);
    const RATEOFRETURNS = utils.getRateOfReturn(AMOUNT, RESULT);
    utils.printRateOfReturn(RATEOFRETURNS);
  }
}

export default App;
