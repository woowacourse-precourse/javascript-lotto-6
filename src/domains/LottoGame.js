import paramType from '../lib/paramType/src/paramType.js';
import ValidUserInputs from '../validator/ValidUserInputs.js';
import LottoDrawChecker from './LottoDrawChecker.js';
import LottoMachine from './LottoMachine.js';
import LottoReward from './LottoReward.js';

export default class LottoGame {
  #purchasePrice;
  #winningNumbers;
  #bonusNumber;
  #lottoMachine;
  #lottoDrawChecker;

  constructor(
    validUserInputs,
    lottoMachine,
    _0 = paramType(validUserInputs, ValidUserInputs),
    _1 = paramType(lottoMachine, LottoMachine),
  ) {
    this.#purchasePrice = validUserInputs.purchasePrice;
    this.#winningNumbers = validUserInputs.winningNumbers;
    this.#bonusNumber = validUserInputs.bonusNumber;
    this.#lottoMachine = lottoMachine;
    this.#lottoDrawChecker = new LottoDrawChecker(
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }

  publishLottoList() {
    const lottoList = this.#lottoMachine
      .purchase(this.#purchasePrice)
      .map((lotto) => lotto.getNumbers());

    return lottoList;
  }

  calculateDrawDetails(lottoList) {
    const drawDetails = this.#lottoDrawChecker.getDrawResult(lottoList);

    return drawDetails;
  }

  calculateProfitRate(drawResult) {
    const reward = new LottoReward(drawResult, this.#purchasePrice);
    const profitRate = reward.calculrateProfitRate();

    return profitRate;
  }
}
