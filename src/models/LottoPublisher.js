import { Random } from '@woowacourse/mission-utils';
import NUMBER from '../utils/constants/number';
import Lotto from '../Lotto';
import LottoValidator from '../utils/validators/LottoValidator';

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
