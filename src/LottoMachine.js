import Lotto from './Lotto.js';
import Validation from './Validation.js';
import { Random } from '@woowacourse/mission-utils';
import LotteryPrize from './LotteryPrize.js';
import LottoView from './LottoView.js';

const LOTTO_PRICE = 1000;
const LOTTO_MAX_COUNT = 6;
const LOTTO_RANGE_MIN = 1;
const LOTTO_RANGE_MAX = 45;

const MESSAGE_WINNING_NUMBER = '\n당첨 번호를 입력해 주세요.\n';
const MESSAGE_BONUM_NUMBER = '\n보너스 번호를 입력해 주세요.\n';

class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  issueLotto(price) {
    const lottoBundle = [];
    if (!Validation.isProperPurchaseAmount(price)) {
      throw new Error('[ERROR] 로또 구입 금액이 잘못되었습니다.');
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
    const winningNumbers = await LottoView.getUserInput(MESSAGE_WINNING_NUMBER);

    if (!Validation.isProperWinningNumbers(winningNumbers)) {
      throw new Error('[ERROR] 당첨 번호 입력이 잘못되었습니다.');
    }
    this.#winningNumbers = winningNumbers.split(',').map(Number);
  }

  async setBonusNumber() {
    const bonusNumber = await LottoView.getUserInput(MESSAGE_BONUM_NUMBER);
    if (!Validation.hasProperRange(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호 입력이 잘못되었습니다.');
    }
    if (Validation.isDuplicateBonusNumber(this.#winningNumbers, bonusNumber)) {
      throw new Error('[ERROR] 중복된 보너스번호 입니다.');
    }
    this.#bonusNumber = Number(bonusNumber);
  }

  #makeLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_RANGE_MIN,
      LOTTO_RANGE_MAX,
      LOTTO_MAX_COUNT
    );
  }
}
export default LottoMachine;
