import { LottoPurchaseService, LottoRewardsService } from '../service/index.js';

import { InputView, OutputView } from '../view/index.js';

import { Lotto, LottoReward } from '../domain/index.js';

import SYSTEM from '../constants/system.js';

import splitNumbersToArray from '../utils/splitNumbersToArray.js';

/**
 * @typedef PurchaseInfo 유저의 로또 구매 정보입니다.
 * @property {number} money 유저의 구매 금액입니다.
 * @property {Lotto[]} userLottos 유저의 구매 로또 목록입니다.
 */

/**
 * @typedef LottoResult 로또 결과 정보입니다.
 * @property {LottoReward[]} rewards 로또의 결과 목록입니다.
 * @property {string} earningRate 유저의 수익률입니다.
 */

class Controller {
  /**
   * 입출력을 담당하는 View입니다.
   */
  #view = {
    input: InputView,
    output: OutputView,
  };

  /**
   * 비즈니스 로직을 담당하는 Service입니다.
   */
  #service = {
    lottoPurchase: LottoPurchaseService,
    lottoRewards: LottoRewardsService,
  };

  /**
   * 로또를 시작합니다.
   */
  async start() {
    /** @type {PurchaseInfo} */
    let purchaseInfo;

    await this.#handleError(async () => {
      purchaseInfo = await this.#createPurchaseInfo();
      this.#printLottos(purchaseInfo.userLottos);
    });

    await this.#handleError(async () => {
      const lottoResult = await this.#createLottoResult(purchaseInfo);
      this.#printLottoResult(lottoResult);
    });
  }

  /**
   * 구매 금액 만큼 유저의 로또를 생성합니다.
   * @returns {Promise<PurchaseInfo>} 유저가 구매한 로또 목록입니다.
   */
  async #createPurchaseInfo() {
    const money = await this.#readPurchaseMoney();
    const userLottos = this.#service.lottoPurchase.buyLottos(money);

    return { money, userLottos };
  }

  /**
   * 우승 로또를 생성한 후 결과를 출력합니다.
   * @param {PurchaseInfo} purchaseInfo 유저의 구매 정보입니다.
   * @returns {Promise<LottoResult>} 로또 결과와 수익률입니다.
   */
  async #createLottoResult({ money, userLottos }) {
    const winningNumbers = await this.#readWinningNumbers();
    const bonus = await this.#readBonusNumber();

    const rewards = this.#service.lottoRewards.getRewards(userLottos, { winningNumbers, bonus });
    const earningRate = this.#service.lottoRewards.getEarningRate(money, rewards);

    return { rewards, earningRate };
  }

  /**
   * 구매 금액을 입력받습니다.
   * @returns {Promise<number>} 유저가 입력한 구매 금액입니다.
   */
  async #readPurchaseMoney() {
    const money = await this.#view.input.readPurchaseMoney();

    return Number(money);
  }

  /**
   * 우승 번호를 입력받습니다.
   * @returns {Promise<number[]>} 숫자로 이루어진 우승 번호 배열입니다.
   */
  async #readWinningNumbers() {
    const winningNumbers = await this.#view.input.readWinningNumbers();

    return splitNumbersToArray(winningNumbers, SYSTEM.lottoNumberSeparator);
  }

  /**
   * 우승 로또의 보너스 번호를 입력받습니다.
   * @returns {Promise<number>} 보너스 번호입니다.
   */
  async #readBonusNumber() {
    const bonusNumber = await this.#view.input.readBonusNumber();

    return Number(bonusNumber.trim());
  }

  /**
   * 유저가 구매한 로또를 출력합니다.
   * @param {Lotto[]} lottos 구매한 로또 목록입니다.
   */
  #printLottos(lottos) {
    this.#view.output.lottoQuantity(lottos.length);
    this.#view.output.userLotto(lottos);
  }

  /**
   * 로또 결과를 출력합니다.
   * @param {LottoResult} lottoResult 로또 결과와 수익률입니다.
   */
  #printLottoResult({ rewards, earningRate }) {
    this.#view.output.winningStatistics();
    this.#view.output.rewards(rewards);
    this.#view.output.earningRate(earningRate);
  }

  /**
   * 해당 콜백 함수 실행 중 에러가 발생할 시 함수를 다시 시작합니다.
   * @param {Function} action 에러 핸들링 대상이 될 함수입니다.
   */
  async #handleError(action) {
    try {
      await action();
    } catch ({ message }) {
      this.#view.output.error(message);
      await this.#handleError(action);
    }
  }
}

export default Controller;
