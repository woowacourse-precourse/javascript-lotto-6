import { calculateNumberMatch, isBonusMatch } from '../../src/utils/calculation';

describe('로또와 당첨번호 매칭 계산 함수 검사', () => {
  test('로또와 당첨 번호 간 일치하는 번호의 개수를 반환해야 한다.', () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const prize = [3, 4, 5, 7, 8, 9];

    const matchCount = calculateNumberMatch(lotto, prize);

    expect(matchCount).toBe(3);
  });
  
  test('일치하는 번호가 없을 경우 0을 반환해야 한다.', () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const prize = [7, 8, 9, 10, 11, 12];

    const matchCount = calculateNumberMatch(lotto, prize);

    expect(matchCount).toBe(0);
  });
});

describe('로또와 보너스 번호 매칭 여부 함수 검사', () => {
  test('로또에 보너스 번호가 포함되어 있을 경우 true를 반환해야 한다.', () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonus = 6;

    const isMatch = isBonusMatch(lotto, bonus);

    expect(isMatch).toBe(true); 
  });

  test('로또에 보너스 번호가 포함되어 있지 않을 경우 false를 반환해야 한다.', () => {
    const lotto = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const isMatch = isBonusMatch(lotto, bonus);

    expect(isMatch).toBe(false);
  });
});