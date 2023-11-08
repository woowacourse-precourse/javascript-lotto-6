import Winning from '../src/model/Winning';
import Lotto from '../src/model/Lotto';

describe('class Winning test', () => {
  let winning;
  beforeEach(() => {
    winning = new Winning();
  });
  test('당첨 번호는 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 중복된 숫자가 있으면 예외가 발생한다', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 정수가 아닌 값이 들어가면 예외가 발생한다', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 5.5]);
    }).toThrow('[ERROR]');

    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, '4']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호는 1이상 45이하의 정수가 아니면 예외가 발생한다', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');

    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 0]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      winning.setBonusNumber(5.5);
    }).toThrow('[ERROR]');

    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      winning.setBonusNumber('10');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 1이상 45이하 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      winning.setBonusNumber(0);
    }).toThrow('[ERROR]');

    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      winning.setBonusNumber(46);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 당첨 번호와 겹치면 예외가 발생한다.', () => {
    expect(() => {
      winning.setWinningNumbers([1, 2, 3, 4, 5, 6]);
      winning.setBonusNumber(1);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호와 보너스 번호를 로또 번호와 비교해 결과를 반환한다.', () => {
    const LOTTOS_NUMBERS = [
      [3, 10, 20, 4, 5, 42],
      [7, 20, 10, 4, 5, 40],
    ];
    const WINNING_NUMBERS = [5, 20, 10, 4, 1, 40];
    const BONUS_NUMUBER = 7;
    const MATCH = [
      { matchCount: 4, matchBonus: false },
      { matchCount: 5, matchBonus: true },
    ];

    const lottos = LOTTOS_NUMBERS.map((numbers) => new Lotto(numbers));
    winning.setWinningNumbers(WINNING_NUMBERS);
    winning.setBonusNumber(BONUS_NUMUBER);

    lottos.forEach((lotto, index) => {
      const { matchCount, matchBonus } = winning.matchLottoNumbers(lotto.getNumbers());
      const answer = MATCH[index];

      expect(matchCount).toBe(answer.matchCount);
      expect(matchBonus).toBe(answer.matchBonus);
    });
  });
});
