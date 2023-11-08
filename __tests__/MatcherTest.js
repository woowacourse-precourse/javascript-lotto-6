import Matcher from '../src/Matcher.js';

describe('Matcher 클래스 테스트', () => {
  const tickets = [
    [12, 13, 19, 33, 36, 37],
    [1, 4, 7, 11, 32, 34],
    [1, 2, 9, 11, 15, 38],
  ];
  const bonusNumber = 38;
  test('3개 일치 개수가 정확한지 확인한다.', () => {
    const winningNumbers = [12, 13, 19, 20, 30, 40];
    const matcher = new Matcher(tickets, winningNumbers, bonusNumber);
    const expectedMatchStatus = new Map([
      [5000, 1],
      [50000, 0],
      [1500000, 0],
      [30000000, 0],
      [2000000000, 0],
    ]);
    expect(matcher.matchStatus).toEqual(expectedMatchStatus);
  });
  test('4개 일치 개수가 정확한지 확인한다.', () => {
    const winningNumbers = [1, 4, 7, 11, 30, 45];
    const matcher = new Matcher(tickets, winningNumbers, bonusNumber);
    const expectedMatchStatus = new Map([
      [5000, 0],
      [50000, 1],
      [1500000, 0],
      [30000000, 0],
      [2000000000, 0],
    ]);
    expect(matcher.matchStatus).toEqual(expectedMatchStatus);
  });
  test('5개 일치 개수가 정확한지 확인한다.', () => {
    const winningNumbers = [1, 4, 7, 11, 21, 32];
    const matcher = new Matcher(tickets, winningNumbers, bonusNumber);
    const expectedMatchStatus = new Map([
      [5000, 0],
      [50000, 0],
      [1500000, 1],
      [30000000, 0],
      [2000000000, 0],
    ]);
    expect(matcher.matchStatus).toEqual(expectedMatchStatus);
  });
  test('5개 일치 개수와 보너스 볼 일치 개수가 정확한지 확인한다.', () => {
    const winningNumbers = [1, 2, 9, 11, 15, 21];
    const matcher = new Matcher(tickets, winningNumbers, bonusNumber);
    const expectedMatchStatus = new Map([
      [5000, 0],
      [50000, 0],
      [1500000, 0],
      [30000000, 1],
      [2000000000, 0],
    ]);
    expect(matcher.matchStatus).toEqual(expectedMatchStatus);
  });
  test('6개 일치 개수가 정확한지 확인한다.', () => {
    const winningNumbers = [1, 4, 7, 11, 32, 34];
    const matcher = new Matcher(tickets, winningNumbers, bonusNumber);
    const expectedMatchStatus = new Map([
      [5000, 0],
      [50000, 0],
      [1500000, 0],
      [30000000, 0],
      [2000000000, 1],
    ]);
    expect(matcher.matchStatus).toEqual(expectedMatchStatus);
  });
});
