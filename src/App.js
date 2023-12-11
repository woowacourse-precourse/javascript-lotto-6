import Lotto from './Lotto.js';
import Statistics from './Statistics.js';
import WinningLotto from './WinningLotto.js';
import Money from './Money.js';

class App {
  async play() {
    const lottos = [];
    const money = new Money();
    await money.inputMoney();
    money.printNumberOfLotto();

    for (let i = 0; i < money.getNumberOfLotto(); i += 1) {
      const lotto = new Lotto(Lotto.createLottoNumbers());
      lotto.printNumbers();
      lottos.push(lotto.getNumbers());
    }
    const winningLotto = new WinningLotto();
    await winningLotto.inputWinningNumbers();
    await winningLotto.inputBonusNumber();
    const statistics = new Statistics(winningLotto.getWinningLottoInfo(), lottos);
    statistics.printStatistics();
  }
}

export default App;
