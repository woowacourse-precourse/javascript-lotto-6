import { Console } from '@woowacourse/mission-utils';
import { PlayLotto, LottoResult } from './game/PlayLotto.js';
import { Inputs } from './ui/Input.js';
import { Lotto } from './Lotto.js';

class App {
  async play() {
    try {
      const amount = await Inputs.getAmount(`구입금액을 입력해 주세요.`);
      const lotto = new PlayLotto(amount);
      const myLottos = await lotto.makeLottos();
      const winningNumber =
        await Inputs.getWinningNumber(`당첨 번호를 입력해 주세요.`);
      const bonusNumber = await Inputs.getBonusNumber(
        `보너스 번호를 입력해 주세요.`,
        winningNumber
      );

      const lottoResult = new LottoResult(
        amount,
        winningNumber,
        bonusNumber,
        myLottos
      );
      const isFitLotto = await lottoResult.isFit();

      await lottoResult.printResult();
    } catch (e) {
      Console.print(e);
    }
  }
}

export default App;
