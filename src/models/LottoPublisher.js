import { Random } from '@woowacourse/mission-utils';
import NUMBER from '../utils/constants/number.js';
import Lotto from '../Lotto.js';
import CustomError from '../errors/CustomError.js';
import LottoValidator from '../utils/validators/LottoValidator.js';

const { game } = NUMBER;
const { lotto } = game;

class LottoPublisher {
  #moneyAmount;

  setMoneyAmount(moneyAmount) {
    LottoValidator.validateMoneyAmount(moneyAmount);
    this.#moneyAmount = moneyAmount;
  }

  #generateRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      lotto.minNumber,
      lotto.maxNumber,
      lotto.length,
    );
  }

  #publishSingleLotto() {
    const lottoNumbers = this.#generateRandomLottoNumbers();
    return new Lotto(lottoNumbers);
  }

  publishLottos() {
    const count = this.#moneyAmount / game.money.unitAmount;
    return Array.from({ length: count }, () => this.#publishSingleLotto());
  }
}

export default LottoPublisher;
