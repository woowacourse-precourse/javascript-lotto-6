import { Console } from '@woowacourse/mission-utils';
import { Lotto, LottoResult } from './Lotto.js';
import { Inputs } from './ui/Input.js';
import CONSTANT from './constants/constant.js';

class App {
  async play() {
    try {
      const amount = await Inputs.getAmount(CONSTANT.inputs.amount);
      const lotto = new Lotto(amount);
      const myLottos = await lotto.makeLottos();
      const winningNumber = await Inputs.getWinningNumber(
        CONSTANT.inputs.winningNumber
      );
      const bonusNumber = await Inputs.getBonusNumber(
        CONSTANT.inputs.bonusNumber,
        winningNumber
      );

      const lottoResult = new LottoResult(
        amount,
        winningNumber,
        bonusNumber,
        myLottos
      );

      await lottoResult.printResult();
    } catch (e) {
      Console.print(e);
    }
  }
}

export default App;
