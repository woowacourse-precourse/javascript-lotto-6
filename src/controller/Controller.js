import { LottoPurchaseService, LottoRewardsService } from '../service/index.js';
import { Lotto, LottoReward } from '../domain/index.js';

import { InputView, OutputView } from '../view/index.js';

import SYSTEM from '../constants/system.js';

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
    lottoRewards: LottoRewardsService.of(),
  };

  /**
   * 로또를 시작합니다.
   */
  async start() {
    await this.#withRetry(() => this.#createUserLotto());
  }

  /**
   * 구매 금액을 입력받고 유저의 로또를 생성합니다.
   */
  async #createUserLotto() {
    const money = await this.#readPurchaseMoney();
    const lottos = this.#service.lottoPurchase.buyLottos(money);
    this.#printLottos(lottos);

    await this.#withRetry(() => this.#createWinningLottoNumbers(lottos, money));
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
   * 유저가 구매한 로또를 출력합니다.
   * @param {Lotto[]} lottos 구매한 로또 목록입니다.
   */
  #printLottos(lottos) {
    this.#view.output.lottoQuantity(lottos.length);
    this.#view.output.userLotto(lottos);
  }

  /**
   * 우승 로또 번호를 입력받고 우승 로또의 로또를 생성합니다.
   * @param {Lotto[]} lottos 구매한 로또 목록입니다.
   * @param {number} money 구매 금액입니다.
   */
  async #createWinningLottoNumbers(lottos, money) {
    const winningLottoNumbers = await this.#readWinningLottoNumbers();
    this.#service.lottoRewards.createWinningLotto(winningLottoNumbers);

    await this.#withRetry(() => this.#createBonusNumber(lottos, money));
  }

  /**
   * 우승 번호를 입력받습니다.
   * @returns {Promise<number[]>} 숫자로 이루어진 우승 번호 배열입니다.
   */
  async #readWinningLottoNumbers() {
    const winningLottoNumbers = await this.#view.input.readWinningNumbers();
    return Array.from(winningLottoNumbers.split(SYSTEM.lottoNumberSeparator), Number);
  }

  /**
   * 우승 로또 보너스 번호를 입력받고 우승 로또를 생성 후 계산합니다.
   * @param {Lotto[]} lottos 구매한 로또 목록입니다.
   * @param {number} money 구매 금액입니다.
   */
  async #createBonusNumber(lottos, money) {
    const bonusNumber = await this.#readBonusNumber();
    this.#service.lottoRewards.createBonus(bonusNumber);
    const rewards = this.#service.lottoRewards.getRewards(lottos);

    this.#printLottoResult(money, rewards);
  }

  /**
   * 우승 로또의 보너스 번호를 입력받습니다.
   * @returns {Promise<number>} 보너스 번호입니다.
   */
  async #readBonusNumber() {
    const bonusNumber = await this.#view.input.readBonusNumber();
    return Number(bonusNumber);
  }

  /**
   * 로또 결과를 출력합니다.
   * @param {number} money 구매 금액입니다.
   * @param {LottoReward[]} rewards 구매한 로또의 결과 목록입니다.
   */
  #printLottoResult(money, rewards) {
    const earningRate = this.#service.lottoRewards.getEarningRate(money, rewards);

    this.#view.output.winningStatistics();
    this.#view.output.rewards(rewards);
    this.#view.output.earningRate(earningRate);
  }

  /**
   * 해당 콜백 함수 실행 중 에러가 발생할 시 함수를 다시 시작합니다.
   * @param {Function} action 에러 핸들링 대상이 될 함수입니다.
   */
  async #withRetry(action) {
    try {
      await action();
    } catch ({ message }) {
      this.#view.output.error(message);
      await this.#withRetry(action);
    }
  }
}

export default Controller;
