import { LOTTO, LOTTO_RANK } from '../constants/lotto.js';
import { utils } from './utils/utils.js';
import Lotto from './Lotto.js';

class LottoService {
  #lottos = [];
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  compareLottoNumbers(numbers) {
    const compareLotto = numbers.filter((number) => this.#winningNumbers.includes(number));
    return {
      isWinning: compareLotto.length >= LOTTO.minMatchCount,
      matchCount: compareLotto.length,
    };
  }

  isSecondRank(numbers) {
    const isContainBonusNumber = numbers.find((number) => this.#bonusNumber === number);
    return isContainBonusNumber;
  }

  getRank(matchCount, isSecondRank) {
    switch (matchCount) {
      case 3:
        return LOTTO_RANK.fifth;
      case 4:
        return LOTTO_RANK.fourth;
      case 5:
        if (isSecondRank) return LOTTO_RANK.second;
        return LOTTO_RANK.third;
      case 6:
        return LOTTO_RANK.first;
      default:
        return;
    }
  }

  purchaseLotto(money) {
    const sheetCount = money / LOTTO.unitPrice;
    let currentSheet = 1;

    while (currentSheet <= sheetCount) {
      const numbers = this.#createLottoNumbers();
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);

      currentSheet += 1;
    }
  }

  #createLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return utils.ascendingNumbers(lottoNumbers);
  }

  getLottoReturns(purchasePrice, winningPrice) {
    console.log(winningPrice);
    console.log(winningPrice / purchasePrice);
    return ((winningPrice / purchasePrice) * LOTTO.percentage).toFixed(2);
  }

  getLottos() {
    return this.#lottos;
  }

  getLottosCount() {
    return this.#lottos.length;
  }
}

export default LottoService;
