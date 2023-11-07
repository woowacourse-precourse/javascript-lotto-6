import Lotto from '../Lotto.js';
import { generateNumbers } from '../util/generateNumbers.js';

export default class LottoGame {
  async buyLottos(money) {
    const attempts = money / 1000;
    const lottos = [];

    for (let i = 0; i < attempts; i++) {
      const randomNumbers = await generateNumbers();
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    return lottos;
  }
}
