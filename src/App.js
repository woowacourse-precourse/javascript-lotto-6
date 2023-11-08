import Input from './view/input.js';
import Lotto from './Lotto.js';
import Output from './view/output.js';

class App {
  async play() {
    const amount = await Input.amountToBuy();
    const lottos = Lotto.createLottos(amount);

    Output.purchasedLottoNumbers(lottos);
    const winningLotto = await Input.winningNumbers();
    await Input.bonusNumber(winningLotto);

    const statistics = winningLotto.getStatistics(lottos);
    Output.winningStatistics(statistics);
  }
}

export default App;
