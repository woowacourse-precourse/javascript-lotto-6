import Lotto from './Lotto.js';
import Validation from './Validation.js';
import { Random } from '@woowacourse/mission-utils';
import LotteryPrize from './LotteryPrize.js';
import LottoView from './LottoView.js';
import { ERROR_MESSAGE, ENTER_MESSAGE } from './constants/message.js';
import {
  LOTTO_PRICE,
  LOTTO_DIGIT,
  LOTTO_RANGE_MIN,
  LOTTO_RANGE_MAX,
} from './constants/gameinfo.js';

class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  issueLotto(price) {
    const lottoBundle = [];
    if (!Validation.isProperPurchaseAmount(price)) {
      throw new Error(ERROR_MESSAGE.purchase_amount);
    }
    const purchaseNumber = price / LOTTO_PRICE;
    while (lottoBundle.length < purchaseNumber) {
      lottoBundle.push(new Lotto(this.#makeLottoNumber()));
    }
    return [...lottoBundle];
  }

  checkLottoResult(lottoBundle) {
    const lotteryPrize = new LotteryPrize(
      lottoBundle,
      this.#winningNumbers,
      this.#bonusNumber
    );
    const lottoResult = lotteryPrize.getWinningStatistics();
    LottoView.printStatistics(lottoResult);
  }

  async setWinningNumbers() {
    const winningNumbers = await LottoView.getUserInput(
      ENTER_MESSAGE.winning_number
    );

    if (!Validation.isProperWinningNumbers(winningNumbers)) {
      throw new Error(ERROR_MESSAGE.winning_number);
    }
    this.#winningNumbers = winningNumbers.split(',').map(Number);
  }

  async setBonusNumber() {
    const bonusNumber = await LottoView.getUserInput(
      ENTER_MESSAGE.bonus_number
    );
    if (!Validation.hasProperRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.bonus_number);
    }
    if (Validation.isDuplicateBonusNumber(this.#winningNumbers, bonusNumber)) {
      throw new Error(ERROR_MESSAGE.bonus_duplicate);
    }
    this.#bonusNumber = Number(bonusNumber);
  }

  #makeLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(
      LOTTO_RANGE_MIN,
      LOTTO_RANGE_MAX,
      LOTTO_DIGIT
    );
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }
}
export default LottoMachine;
