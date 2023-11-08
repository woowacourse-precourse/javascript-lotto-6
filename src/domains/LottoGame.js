import paramType from '../lib/paramType/src/paramType.js';
import ValidUserInputs from '../validator/ValidUserInputs.js';
import LottoDrawChecker from './LottoDrawChecker.js';
import LottoReward from './LottoReward.js';

export default class LottoGame {
  #state;
  #lottoDrawChecker;

  constructor(
    validUserInputs,
    _0 = paramType(validUserInputs, ValidUserInputs),
  ) {
    this.#state = Object.freeze(this.#createState(validUserInputs));
    this.#lottoDrawChecker = new LottoDrawChecker(
      this.#state.winningNumbers,
      this.#state.bonusNumber,
    );
  }

  calculateDrawDetails() {
    const lottoList = [...this.#state.lottoList];
    const drawDetails = this.#lottoDrawChecker.getDrawResult(lottoList);

    return drawDetails;
  }

  calculateProfitRate(drawResult, _ = paramType(drawResult, Object)) {
    const reward = new LottoReward(drawResult, this.#state.purchasePrice);
    const profitRate = reward.calculrateProfitRate();

    return profitRate;
  }

  #createState(validUserInputs) {
    return Object.freeze({
      purchasePrice: validUserInputs.purchasePrice,
      winningNumbers: validUserInputs.winningNumbers,
      bonusNumber: validUserInputs.bonusNumber,
      lottoList: validUserInputs.lottoList,
    });
  }
}
