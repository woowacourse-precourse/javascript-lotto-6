import InputView from './InputView.js';
import LottoMachine from './LottoMachine.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const inputMoney = await InputView.readMoney();
    const lottoMachine = new LottoMachine(inputMoney);
    const winningNumbers = lottoMachine.generateWinningNumbers();
    await lottoMachine.printWinningNumbers();
    const inputNumbers = await InputView.readLottoNumbers();
    const inputBonus = await InputView.readBonusNumber(inputNumbers);
    const lotto = new Lotto(inputNumbers);
    lotto.calculateEarningsRate(winningNumbers, inputNumbers, inputBonus);
  }
}

export default App;
