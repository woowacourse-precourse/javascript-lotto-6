import { Console } from '@woowacourse/mission-utils';
import { Input } from './domain/Input.js';
import Output from './domain/Output.js';
import GenerateLotto from './domain/GenerateLotto.js';
import isWinningLotto from './domain/CheckLotto.js';
import ROI from './domain/CalculateROI.js';
import Lotto from './domain/Lotto.js';

class App {
  async play() {
    const lotto = new Input();
    const print = new Output();
    const amount = await lotto.getAmount();
    new Lotto(amount);
    const ticketCount = amount / 1000;
    const lottoNumbers = GenerateLotto(ticketCount);
    print.printLotto(ticketCount, lottoNumbers);
    const winningLotto = await lotto.getWinningNumber();
    new Lotto(winningLotto);
    const bonusNumber = await lotto.getBonusNumber();
    new Lotto(bonusNumber);
    const winningNumber = isWinningLotto(
      winningLotto,
      bonusNumber,
      lottoNumbers
    );
    const roi = ROI(amount, winningNumber);
    print.printResult(winningNumber, roi);
  }
}
export default App;
