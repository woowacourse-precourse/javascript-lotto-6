import {
  Calculator,
  Lotto,
  LottoNumber,
  LottoRewards,
  WinningLotto,
} from '../../../src/domain/index.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('Calculator 예외 테스트', () => {
  /**
   * @type {Calculator}
   */
  let calculator;

  beforeEach(() => {
    // given
    calculator = Calculator.of();
  });

  it.each(DUMMY_INPUTS.withoutNumber)(
    '`earningRate(income, rewards)` 호출 시 `income`에 숫자가 아닌 값이 존재할 시 에러가 발생한다.',
    ({ input: income }) => {
      // when
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), LottoNumber.valueOf(7));
      const result = () => calculator.earningRate(income, LottoRewards.of(winningLotto));

      // then
      expect(result).toThrow(Calculator.ERROR_MESSAGES.invalidIncome);
    },
  );

  it.each([{ rewards: [1, 2, 3] }, { rewards: [1, 2, {}] }])(
    '`earningRate(income, rewards)` 호출 시 `rewards`에 `LottoReward`가 아닌 값이 존재할 시 에러가 발생한다.',
    ({ rewards }) => {
      // when
      const result = () => calculator.earningRate(1_000, rewards);

      // then
      expect(result).toThrow(Calculator.ERROR_MESSAGES.invalidRewards);
    },
  );
});
