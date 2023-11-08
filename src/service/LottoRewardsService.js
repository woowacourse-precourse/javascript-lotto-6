import {
  Lotto,
  WinningLotto,
  LottoRewards,
  LottoReward,
  Calculator,
  LottoNumber,
} from '../domain/index.js';

const LottoRewardsService = Object.freeze({
  /**
   * 현재 우승 로또를 기반으로 결과를 반환합니다.
   * @param {Lotto[]} lottos 비교할 로또 배열입니다.
   * @param {{ winningNumbers: number[], bonus: number }} winningLottoInfo 비교할 우승 로또 정보입니다.
   * @returns {LottoReward[]} 로또의 비교 결과들입니다.
   */
  getRewards(lottos, { winningNumbers, bonus }) {
    const winningLotto = WinningLotto.of(Lotto.of(winningNumbers), LottoNumber.valueOf(bonus));
    const rewards = LottoRewards.of(winningLotto);
    const result = rewards.getLottosResult(lottos);

    return result.reverse();
  },

  /**
   * 입력받은 결과들을 기반으로 수익률을 체크합니다.
   * @param {number} income 지출입니다.
   * @param {LottoReward[]} rewards 수입입니다.
   * @returns {string} 수익률입니다.
   */
  getEarningRate(income, rewards) {
    const calculator = Calculator.of();
    const result = calculator.earningRate(income, rewards);

    return result;
  },
});

export default LottoRewardsService;
