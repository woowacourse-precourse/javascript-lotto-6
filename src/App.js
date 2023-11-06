import { generateRandomLottoNumbers } from './utils/index.js';
import LottoConsole from './view/LottoConsole.js';
import Lotto from './Lotto.js';

class App {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async play() {
    const purchaseAmount = await LottoConsole.getPurchaseAmount();
    const amount = purchaseAmount / 1000;
    LottoConsole.printAmountOfLotto(amount);

    // 로또 생성
    for (let i = 0; i < amount; i++)
      this.#lottos.push(new Lotto(generateRandomLottoNumbers()));

    const lottoNumbers = await LottoConsole.getLottoNumbers();
    const bonusNumber = await LottoConsole.getBonusNumber();
  }
}

export default App;
