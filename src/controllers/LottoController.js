import Lotto from '../models/Lotto';
import LottoMachine from '../models/LottoMachine';
import LottoOutcome from '../models/LottoOutcome';
import LottoView from '../views/LottoView';
import { LOTTO_OUTCOMES } from '../constants';

class LottoController {
  #prizeMoney = LOTTO_OUTCOMES;

  #lottoOutcome = new LottoOutcome(this.#prizeMoney);

  #view = new LottoView();

  async #getValidPrice() {
    while (true) {
      const price = await this.#view.readPrice();
      if (!Number.isNaN(price) && price % 1000 === 0) {
        return price;
      }
      this.#view.displayError('[ERROR] 유효하지 않은 금액입니다.');
    }
  }

  async #readWinningNumbers() {
    const input = await this.#view.readWinningNumbers();
    const numbers = input.split(',').map(Number);
    return new Lotto(numbers);
  }
}

export default LottoController;
