import Lotto from '../src/Lotto';

describe('로또 번호 비교', () => {
  test('같은 번호가 있으면 count가 1씩 상승 보너스 번호는 0.5씩 상승', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.setBonusNumber(7);

    const mockNumber = [1, 2, 3, 4, 5, 7];
    expect(lotto.getCorrectNumberCount(mockNumber)).toBe(5.5);
  });
});
