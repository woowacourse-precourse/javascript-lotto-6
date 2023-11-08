import Lotto from './Lotto';
import Money from './Money';
import WinningNumber from './WinningNumber';
import Validator from './utils/vaildators';
import { CONSTANT } from './constants/constants';

class LottoMachine {
  #lottos;
  #money;
  #winningNumber;
  #compareResult;
  #lottoPrize;

  constructor(lottos = [], money = null) {
    this.#lottos = lottos;
    this.#money = money;
    this.#winningNumber = new WinningNumber();
    this.#compareResult = {
      threeMatch: 0,
      fourMatch: 0,
      fiveMatch: 0,
      fiveMatchWithBonus: 0,
      sixMatch: 0,
    };
    this.#lottoPrize = 0;
  }

  #updateLottoPrize(prize) {
    this.#lottoPrize += prize;
  }

  #updateComparisonResults(matchingCount, isMachingBouns) {
    switch (matchingCount) {
      case 3: {
        this.#compareResult.threeMatch += CONSTANT.MATCHING_COUNT;
        this.#updateLottoPrize(CONSTANT.THREE_MATCH_PRIZE);
        break;
      }
      case 4: {
        this.#compareResult.fourMatch += CONSTANT.MATCHING_COUNT;
        this.#updateLottoPrize(CONSTANT.FOUR_MATCH_PRIZE);
        break;
      }
      case 5: {
        if (isMachingBouns) {
          this.#compareResult.fiveMatchWithBonus += CONSTANT.MATCHING_COUNT;
          this.#updateLottoPrize(CONSTANT.FIVE_MATCH_PRIZE);
          break;
        }

        this.#compareResult.fiveMatch += CONSTANT.MATCHING_COUNT;
        this.#updateLottoPrize(CONSTANT.FIVE_MATCH_WITH_BONUS_PRIZE);
        break;
      }
      case 6: {
        this.#compareResult.sixMatch += CONSTANT.MATCHING_COUNT;
        this.#updateLottoPrize(CONSTANT.SIX_MATCH_PRIZE);
        break;
      }
    }
  }

  getPurchaseCount() {
    const purchaseCount = this.#money.getPurchaseCount();
    return purchaseCount;
  }

  getLotto(index) {
    const lottoLength = this.#lottos.length;
    Validator.isInvaildIndex(CONSTANT.ZERO, lottoLength.index, index);
    const lotto = this.#lottos[index].getLotto();
    return lotto;
  }

  getCompareResult() {
    return { ...this.#compareResult };
  }

  getLottoPrize() {
    return this.#lottoPrize;
  }

  setMoney(money) {
    this.#money = new Money(money);
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumber.setWinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#winningNumber.setBonusNumber(bonusNumber);
  }

  issueLottos() {
    const purchaseCount = this.#money.getPurchaseCount();

    for (let i = 0; i < purchaseCount; i++) {
      const lottoNumbers = Lotto.generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  compareLottosWithWinningNumber() {
    const winningNumbers = this.#winningNumber.getWinningNumbers();
    const bonusNumber = this.#winningNumber.getBonusNumber();

    for (const lotto of this.#lottos) {
      const matchingCount = lotto.compareWinningNumbers(winningNumbers);
      const isMachingBouns = lotto.compareBounsNumber(bonusNumber);
      this.#updateComparisonResults(matchingCount, isMachingBouns);
    }
  }
}

export default LottoMachine;
