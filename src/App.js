import { Console } from '@woowacourse/mission-utils';
import { Lotto, LottoResult, MakeLotto } from './Lotto.js';
import { Inputs } from './ui/Input.js';
import CONSTANT from './constants/constant.js';

class App {
  async play() {
    try {
      const amount = await Inputs.getAmount(CONSTANT.inputs.amount);
      const makeLotto = new MakeLotto(CONSTANT.game.lottoNumbersTemp, amount);
      const myLottos = await makeLotto.makeLottos();
      const winningNumber = await Inputs.getWinningNumber(
        CONSTANT.inputs.winningNumber
      );
      const lotto = new Lotto(winningNumber);
      const bonusNumber = await Inputs.getBonusNumber(
        CONSTANT.inputs.bonusNumber
      );
      const lottoResult = new LottoResult(
        winningNumber,
        bonusNumber,
        amount,
        myLottos
      );

      await lottoResult.printResult();
    } catch (e) {
      Console.print(e);
    }
  }
}

const aa = new App();
aa.play();
export default App;
