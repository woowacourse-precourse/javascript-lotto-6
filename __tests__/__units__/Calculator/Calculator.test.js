import {
  Calculator,
  Lotto,
  LottoNumber,
  LottoRewards,
  WinningLotto,
} from '../../../src/domain/index.js';

describe('Calculator 테스트', () => {
  let calculator;

  beforeEach(() => {
    calculator = Calculator.of();
  });

  it.each([
    { income: 8_000, result: '62.5%' },
    { income: 5_000, result: '100.0%' },
    { income: 10_000, result: '50.0%' },
    { income: 7_500, result: '66.7%' },
    { income: 7_200, result: '69.4%' },
  ])(
    '`earningRate(income, reward)` 호출 시 입력받은 `result`의 수익률을 소수점 둘째자리에서 반올림하여 반환한다.',
    ({ income, result }) => {
      // given
      const lottos = [Lotto.of([1, 2, 3, 4, 5, 7])];
      const bonus = LottoNumber.valueOf(7);
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 8, 9, 10]), bonus);

      // 총 5,000원
      const rewards = LottoRewards.of(winningLotto).getLottosResult(lottos);

      // when
      const prize = calculator.earningRate(income, rewards);

      // then
      expect(prize).toBe(result);
    },
  );
});
