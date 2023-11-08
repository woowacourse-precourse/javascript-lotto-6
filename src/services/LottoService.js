import OPTION from '../constants/option.js';
import Account from '../models/Account.js';
import Lotto from '../Lotto.js';
import getRandomLottoNumbers from '../utils/random.js';
import sortAscendingNumber from '../utils/sort.js';
import BonusNumber from '../models/BonusNumber.js';
import LottoPrize from '../models/LottoPrize.js';

class LottoService {
  #account;

  #winningLotto;

  #bonusNumber;

  constructor() {
    this.#account = new Account();
  }

  setPurchaseAmount(purchaseAmount) {
    this.#account.setPurchaseAmount(purchaseAmount);
  }

  setWinningNumbers(winningNumbers) {
    const lottoNumbers = sortAscendingNumber(winningNumbers);
    this.#winningLotto = new Lotto(lottoNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = new BonusNumber(bonusNumber, this.getWinningNumbers());
  }

  buyLottos() {
    const lottoCount = this.getPurchaseAmount() / OPTION.lotto.amountUnit;
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumbers = sortAscendingNumber(getRandomLottoNumbers());
      this.#account.addLotto(new Lotto(lottoNumbers));
    }
  }

  getPurchaseAmount() {
    return this.#account.getPurchaseAmount();
  }

  getLottos() {
    return this.#account.getLottos().map((lotto) => lotto.getNumbers());
  }

  getWinningNumbers() {
    if (!this.#winningLotto) return undefined;

    return this.#winningLotto.getNumbers();
  }

  getBonusNumber() {
    if (!this.#bonusNumber) return undefined;

    return this.#bonusNumber.getNumber();
  }

  getLottoResult() {
    const lottoPrize = new LottoPrize();
    const winningNumbers = this.getWinningNumbers();
    const bonusNumber = this.getBonusNumber();
    this.getLottos().forEach((lotto) => {
      const matchLottoCount = lotto.filter((number) =>
        winningNumbers.includes(number),
      ).length;
      const isBonusMatch = lotto.includes(bonusNumber);
      lottoPrize.calculatePrize(matchLottoCount, isBonusMatch);
    });

    return lottoPrize.getStatus();
  }

  getLottoTotalPrizeAmount() {
    return LottoPrize.getPrizeAmount(this.getLottoResult());
  }

  getLottoTotalReturns() {
    const lottoTotalReturns =
      (this.getLottoTotalPrizeAmount() / this.getPurchaseAmount()) * 100;

    return lottoTotalReturns.toFixed(1);
  }
}

export default LottoService;
