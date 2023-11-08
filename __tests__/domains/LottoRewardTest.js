import LottoReward from '../../src/domains/LottoReward';

describe('method : calculrateProfitRate test', () => {
  test('수익률 계산결과는 소수점 1자리만 표시해야 한다.', () => {
    // given
    const drawResult = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    };
    const purchasePrice = 3000;
    const lottoReward = new LottoReward(drawResult, purchasePrice);

    // when
    const profitRate = lottoReward.calculrateProfitRate();
    const result = profitRate.split('.');

    // then
    expect(result).toHaveLength(2);
  });

  test('1개도 당첨되지 않았을때 수익률은 0.0을 반환해야한다.', () => {
    // given
    const drawResult = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    const purchasePrice = 5000000;
    const lottoReward = new LottoReward(drawResult, purchasePrice);

    // when
    const profitRate = lottoReward.calculrateProfitRate();
    const result = profitRate.split('.');

    // then
    expect(result).toHaveLength(2);
  });

  test('5000원을 넣고 2등에 당첨되었을때 않았을때 수익률은 600000.0을 반환해야한다.', () => {
    // given
    const drawResult = {
      1: 0,
      2: 1,
      3: 0,
      4: 0,
      5: 0,
    };
    const purchasePrice = 5000;
    const lottoReward = new LottoReward(drawResult, purchasePrice);

    // when
    const profitRate = lottoReward.calculrateProfitRate();

    // then
    expect(profitRate).toBe('600000.0');
  });
});
