import calculateTotalPrizeMoney from '../src/process/calculateTotalPrizeMoney.js';

describe('총 상금 계산 기능 테스트', () => {
  test('총 상금 계산 기능', () => {
    // given
    const statistics = {
      match3: 1,
      match4: 1,
      match5: 1,
      match5PlusBonus: 1,
      match6: 1,
    };

    // when
    const output = calculateTotalPrizeMoney(statistics);

    // then
    expect(output).toEqual(2031555000);
  });
});
