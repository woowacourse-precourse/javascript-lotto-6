// eslint-disable-next-line object-curly-newline
import {
  Lotto,
  LottoNumber,
  WinningLotto,
  LottoRewards,
  LottoReward,
  Calculator,
} from '../domain/index.js';

class LottoRewardsService {
  #lotto;

  #bonus;

  static of() {
    return new LottoRewardsService();
  }

  /**
   * 우승로또에 들어갈 로또를 생성합니다.
   * @param {number[]} numbers
   */
  createWinningLotto(numbers) {
    this.#lotto = Lotto.of(numbers);
  }

  /**
   * 우승로또에 들어갈 보너스 번호를 생성합니다.
   * @param {number} bonus
   */
  createBonus(bonus) {
    this.#bonus = LottoNumber.valueOf(bonus);
  }

  /**
   * 현재 우승 로또를 기반으로 결과를 반환합니다.
   * @param {Lotto[]} lottos
   * @returns {LottoReward[]}
   */
  getRewards(lottos) {
    const winningLotto = WinningLotto.of(this.#lotto, this.#bonus);
    const rewards = LottoRewards.of(winningLotto);
    const result = rewards.getLottosResult(lottos);

    return result.reverse();
  }

  /**
   * 입력받은 결과들을 기반으로 수익률을 체크합니다.
   * @param {number} income
   * @param {LottoReward[]} rewards
   * @returns {number}
   */
  getEarningRate(income, rewards) {
    const calculator = Calculator.of();
    const result = calculator.earningRate(income, rewards);

    return result;
  }
}

export default LottoRewardsService;
