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
    Validation.isProperPurchaseAmount(price);
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
    let winningNumbers;
    while (true) {
      try {
        winningNumbers = await LottoView.getUserInput(
          ENTER_MESSAGE.winning_number
        );
        Validation.isProperWinningNumbers(winningNumbers);
        break;
      } catch (error) {
        LottoView.printMessage(error.message);
      }
    }
    this.#winningNumbers = winningNumbers.split(',').map(Number);
  }

  async setBonusNumber() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await LottoView.getUserInput(ENTER_MESSAGE.bonus_number);
        Validation.isProperBonusNumber(this.#winningNumbers, bonusNumber);
        break;
      } catch (error) {
        LottoView.printMessage(error.message);
      }
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
