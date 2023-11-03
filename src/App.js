import { Console, Random } from '@woowacourse/mission-utils';
import * as utils from './LottoUtils.js';
class App {
  async play() {
    const AMOUNT = await utils.multipleInputAmount();
    const LOTTO_COUNT = utils.getLottoCount(AMOUNT);
    const LOTTOS = utils.getLottos(LOTTO_COUNT);
    utils.printLottos(LOTTOS);
    const WINNING_NUMBERS = await utils.inputWinningNumbers();
    console.log(WINNING_NUMBERS);
    //const WINNING_NUMBERS = utils.getWinningNumbers(winningNumbers);
    const BONUS_NUMBER = await utils.inputBonusNumber();
    const RESULT = utils.getResult(LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    utils.printResult(RESULT);
    const RATEOFRETURNS = utils.getRateOfReturn(AMOUNT, RESULT);
    utils.printRateOfReturn(RATEOFRETURNS);
  }
}

export default App;
