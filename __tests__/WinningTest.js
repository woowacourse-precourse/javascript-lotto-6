import Winning from '../src/Winning';
import Lotto from '../src/Lotto';

describe('class Winning test', () => {
  test('당첨 번호는 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5], 10);
    }).toThrow('[ERROR]');
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6, 7], 10);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 중복된 숫자가 있으면 예외가 발생한다', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 5], 10);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 정수가 아닌 값이 들어가면 예외가 발생한다', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 5.5], 10);
    }).toThrow('[ERROR]');

    expect(() => {
      new Winning([1, 2, 3, 4, 5, '4'], 10);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 1이상 45이하의 정수가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 46], 10);
    }).toThrow('[ERROR]');

    expect(() => {
      new Winning([1, 2, 3, 4, 5, 0], 10);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], 1.5);
    }).toThrow('[ERROR');

    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], '10');
    }).toThrow('[ERROR');
  });

  test('보너스 번호는 1이상 45이하 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], 0);
    }).toThrow('[ERROR');

    expect(() => {
      new Winning([1, 2, 3, 4, 5, 6], 50);
    }).toThrow('[ERROR');
  });

  test('당첨 번호와 보너스 번호를 로또 번호와 비교해 결과를 반환한다.', () => {
    const lottoNumbers = [
      [3, 10, 20, 4, 5, 42],
      [7, 20, 10, 4, 5, 40],
    ];
    const winningNumbers = [5, 20, 10, 4, 1, 40];
    const BONUS_NUMUBER = 7;
    const matchResult = [
      { matchCount: 4, matchBonus: false },
      { matchCount: 5, matchBonus: true },
    ];

    const lottos = lottoNumbers.map((numbers) => new Lotto(numbers));
    const winning = new Winning(winningNumbers, BONUS_NUMUBER);

    lottos.forEach((lotto, index) => {
      const { matchCount, matchBonus } = winning.match(lotto);
      const answer = matchResult[index];

      expect(matchCount).toBe(answer.matchCount);
      expect(matchBonus).toBe(answer.matchBonus);
    });
  });
});
