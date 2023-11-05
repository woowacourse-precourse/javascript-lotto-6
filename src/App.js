import LottoClasses from './game/Lotto.js';
import { Inputs } from './ui/Input.js';
import { Result } from './game/Result.js';

class App {
  async play() {
    const amount = await Inputs.getAmount(`구입금액을 입력해 주세요.`);
    const lotto = new LottoClasses.Lotto(amount);
    const myLottos = lotto.makeLottos();
    const winningNumber =
      await Inputs.getWinningNumber(`당첨 번호를 입력해 주세요.`);
    const bonusNumber = await Inputs.getBonusNumber(
      `보너스 번호를 입력해 주세요.`,
      winningNumber
    );

    const lottoResult = new LottoClasses.LottoResult(
      amount,
      winningNumber,
      bonusNumber,
      myLottos
    );
    const isFitLotto = await lottoResult.isFit();

    const results = new Result(amount, isFitLotto);
    results.printResult();
  }
}
const aa = new App();
aa.play();

export default App;
