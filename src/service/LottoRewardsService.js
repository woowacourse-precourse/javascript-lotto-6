import {
  Lotto,
  LottoNumber,
  WinningLotto,
  LottoRewards,
  LottoReward,
  Calculator,
} from '../domain/index.js';

class LottoRewardsService {
  /**
   * @type {Lotto}
   */
  #lotto;

  /**
   * @type {LottoNumber}
   */
  #bonus;

  static of() {
    return new LottoRewardsService();
  }

  /**
   * 우승로또에 들어갈 로또를 생성합니다.
   * @param {number[]} numbers 우승 로또의 번호입니다.
   */
  createWinningLotto(numbers) {
    this.#lotto = Lotto.of(numbers);
  }

  /**
   * 우승로또에 들어갈 보너스 번호를 생성합니다.
   * @param {number} bonus 우승 로또의 보너스 번호입니다.
   */
  createBonus(bonus) {
    this.#bonus = LottoNumber.valueOf(bonus);
  }

  /**
   * 현재 우승 로또를 기반으로 결과를 반환합니다.
   * @param {Lotto[]} lottos 비교할 로또 배열입니다.
   * @returns {LottoReward[]} 로또의 비교 결과들입니다.
   */
  getRewards(lottos) {
    const winningLotto = WinningLotto.of(this.#lotto, this.#bonus);
    const rewards = LottoRewards.of(winningLotto);
    const result = rewards.getLottosResult(lottos);

    return result.reverse();
  }

  /**
   * 입력받은 결과들을 기반으로 수익률을 체크합니다.
   * @param {number} income 지출입니다.
   * @param {LottoReward[]} rewards 수입입니다.
   * @returns {number} 수익률입니다.
   */
  getEarningRate(income, rewards) {
    const calculator = Calculator.of();
    const result = calculator.earningRate(income, rewards);

    return result;
  }
}

export default LottoRewardsService;
