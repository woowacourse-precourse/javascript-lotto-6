import LottosRetruns from '../src/domain/LottosReturns.js';

describe('로또 수익률 테스트', () => {
  test('로또 번호의 당첨 상금을 모두 더한다.', () => {
    // given
    const LOTTOS_RESULT_COUNT = {
      first: 1,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    // when
    const lottosReturns = new LottosRetruns(LOTTOS_RESULT_COUNT);
    const result = lottosReturns.getTotalPrize();

    // then
    expect(result).toBe(2030000000);
  });

  test('로또 번호의 당첨 상금의 수익률을 구한다.(소수점 둘째자리에서 반올림)', () => {
    // given
    const LOTTOS_RESULT_COUNT = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 1,
      fifth: 2,
    };
    const PRICE = 100000;

    // when
    const lottosReturns = new LottosRetruns(LOTTOS_RESULT_COUNT);
    const result = lottosReturns.getLottosReturns(PRICE);

    // then
    expect(result).toBe(60);
  });
});
