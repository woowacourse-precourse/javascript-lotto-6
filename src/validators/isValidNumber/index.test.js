import isValidBonus from './index.js';

describe('isValidBonus 함수 테스트', () => {
  let numbers;

  beforeEach(() => {
    numbers = [1, 2, 3, 4, 5, 6];
  });

  test('보너스 번호가 당첨 번호에 포함되지 않으면 true', () => {
    // GIVEN
    const bonusNumber = 7;

    // WHEN
    const result = isValidBonus(bonusNumber, numbers);

    // THEN
    expect(result).toBe(true);
  });

  test('보너스 번호가 당첨 번호에 포함되면 false', () => {
    // GIVEN
    const bonusNumber = 5;

    // WHEN
    const result = isValidBonus(bonusNumber, numbers);

    // THEN
    expect(result).toBe(false);
  });
});
