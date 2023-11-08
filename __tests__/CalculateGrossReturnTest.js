import calculateGrossReturn from '../src/process/calculateGrossReturn.js';

describe('총 수익률 계산 기능 테스트', () => {
  test('총 수익률 계산', () => {
    // given
    const purchaseAmount = 5000;
    const statistics = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5PlusBonus: 1,
      match6: 0,
    };

    // when
    const output = calculateGrossReturn(purchaseAmount, statistics);

    // then
    expect(output).toEqual('600000.0');
  });
});
