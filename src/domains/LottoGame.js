import paramType from '../lib/paramType/src/paramType.js';
import ValidUserInputs from '../validator/ValidUserInputs.js';
import LottoDrawChecker from './LottoDrawChecker.js';
import LottoReward from './LottoReward.js';

export default class LottoGame {
  #purchasePrice;
  #winningNumbers;
  #bonusNumber;
  #lottoList;
  #lottoDrawChecker;

  constructor(
    validUserInputs,
    _0 = paramType(validUserInputs, ValidUserInputs),
  ) {
    this.#purchasePrice = validUserInputs.purchasePrice;
    this.#winningNumbers = validUserInputs.winningNumbers;
    this.#bonusNumber = validUserInputs.bonusNumber;
    this.#lottoList = validUserInputs.lottoList;
    this.#lottoDrawChecker = new LottoDrawChecker(
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }

  calculateDrawDetails() {
    const lottoList = [...this.#lottoList];
    const drawDetails = this.#lottoDrawChecker.getDrawResult(lottoList);

    return drawDetails;
  }

  calculateProfitRate(drawResult) {
    const reward = new LottoReward(drawResult, this.#purchasePrice);
    const profitRate = reward.calculrateProfitRate();

    return profitRate;
  }
}
