import LottoMatcher from '../src/domain/LottoMatcher';

describe('LottoMatcher 클래스 테스트', () => {
  test('보너스 번호가 당첨 번호에 포함되어 있으면 에러', () => {
    const tickets = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;
    const ticketPrice = 5000;

    try {
      new LottoMatcher(tickets, winningNumbers, bonusNumber, ticketPrice);
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe('[ERROR] 보너스 번호는 로또 번호에 포함될 수 없습니다.');
    }
  });

  test('보너스 번호가 당첨 번호에 포함되어 않으면 통과', () => {
    const tickets = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 6;
    const ticketPrice = 5000;

    try {
      new LottoMatcher(tickets, winningNumbers, bonusNumber, ticketPrice);
      expect(true).toBe(true);
    } catch (error) {
      expect(false).toBe(true);
    }
  });

  test('로또가 1등에 당첨.', () => {
    const lottoMatcher = new LottoMatcher(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 4, 5, 6],
      7,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(1);
    expect(result['2등']).toBe(0);
    expect(result['3등']).toBe(0);
    expect(result['4등']).toBe(0);
    expect(result['5등']).toBe(0);
    expect(result.totalEarnings).toBe(2000000000);
  });

  test('로또가 2등에 당첨.', () => {
    const lottoMatcher = new LottoMatcher(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 4, 5, 7],
      6,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(0);
    expect(result['2등']).toBe(1);
    expect(result['3등']).toBe(0);
    expect(result['4등']).toBe(0);
    expect(result['5등']).toBe(0);
    expect(result.totalEarnings).toBe(30000000);
  });

  test('로또가 3등에 당첨.', () => {
    const lottoMatcher = new LottoMatcher(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 4, 5, 8],
      7,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(0);
    expect(result['2등']).toBe(0);
    expect(result['3등']).toBe(1);
    expect(result['4등']).toBe(0);
    expect(result['5등']).toBe(0);
    expect(result.totalEarnings).toBe(1500000);
  });

  test('로또가 4등에 당첨.', () => {
    const lottoMatcher = new LottoMatcher(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 4, 8, 9],
      7,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(0);
    expect(result['2등']).toBe(0);
    expect(result['3등']).toBe(0);
    expect(result['4등']).toBe(1);
    expect(result['5등']).toBe(0);
    expect(result.totalEarnings).toBe(50000);
  });

  test('로또가 5등에 당첨.', () => {
    const lottoMatcher = new LottoMatcher(
      [[1, 2, 3, 4, 5, 6]],
      [1, 2, 3, 8, 9, 10],
      7,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(0);
    expect(result['2등']).toBe(0);
    expect(result['3등']).toBe(0);
    expect(result['4등']).toBe(0);
    expect(result['5등']).toBe(1);
    expect(result.totalEarnings).toBe(5000);
  });

  test('로또가 당첨 없을 때', () => {
    const lottoMatcher = new LottoMatcher(
      [[7, 8, 9, 10, 11, 12]],
      [1, 2, 3, 4, 5, 6],
      7,
      1000
    );
    const result = lottoMatcher.countMatches();
    expect(result['1등']).toBe(0);
    expect(result['2등']).toBe(0);
    expect(result['3등']).toBe(0);
    expect(result['4등']).toBe(0);
    expect(result['5등']).toBe(0);
    expect(result.totalEarnings).toBe(0);
  });
});
