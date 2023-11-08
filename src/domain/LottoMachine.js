import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';
import WinngingLotto from './WinningLotto';
import Result from './Result';
import { LOTTO } from '../utils/constants/constants';
import { lottoPriceValidator } from '../utils/validators/LottoPriceValidator';

class LottoMachine {
  #lottos;
  #winningLotto;
  #result;

  constructor() {
    this.#lottos = [];
    this.#winningLotto = null;
    this.#result = new Result();
  }

  buyLottos(priceInput) {
    const price = Number(priceInput);
    lottoPriceValidator(price);

    const lottoCount = price / LOTTO.price;
    this.#setLottos(lottoCount);
  }

  #setLottos(lottoCount) {
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.minNumber,
        LOTTO.maxNumber,
        LOTTO.numberLength,
      );
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  setWinningLotto(numbers, bonusNumber) {
    this.#winningLotto = new WinngingLotto(numbers, bonusNumber);
  }

  getLottos() {
    return this.#lottos;
  }

  getProfitRate() {
    this.#result.calculateResult(this.#lottos, this.#winningLotto);
    return this.#result.getProfitRate(this.#lottos.length);
  }

  getResult() {
    return this.#result.getResult();
  }
}

export default LottoMachine;
