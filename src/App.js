import Input from './view/input.js';
import Lotto from './Lotto.js';
import Output from './view/output.js';

class App {
  async play() {
    const amount = await Input.amountToBuy();
    const lottos = await Lotto.createLottos(amount);
    Output.purchasedLottoNumbers(lottos);
    const winningLotto = await Input.winningNumbers();
  }
}

export default App;
