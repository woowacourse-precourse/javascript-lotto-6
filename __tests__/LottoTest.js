import Lotto from '../src/Lotto.js';
import Game, { RANK } from '../src/Game.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  // getWinningInfo
  test('로또가 정상적으로 발행되는지 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const output = { matchCount: 6, isBonusMatched: false };

    expect(lotto.getWinningInfo(winning, bonus)).toEqual(output);
  });

  // getLottoTickets
  test('로또가 정상적으로 발행되는지 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.info).toBe('[1, 2, 3, 4, 5, 6]');
  });

  // // getRank
  test('순위를 반환하는 메서드 테스트', () => {
    const game = new Game();

    const inputs = [
      { matchCount: 6, isBonusMatched: false },
      { matchCount: 5, isBonusMatched: true },
      { matchCount: 5, isBonusMatched: false },
      { matchCount: 4, isBonusMatched: false },
      { matchCount: 3, isBonusMatched: false },
    ];

    const output = ['1st', '2nd', '3rd', '4th', '5th'];

    inputs.forEach((input, index) => {
      expect(game.getRank(input)).toEqual(output[index]);
    });
  });

  // // getReturn
  test('총 수익을 구하는 메서드 테스트', () => {
    const amount = 2000;
    const game = new Game(amount);

    game.drawInfo = {
      [RANK._5th]: { count: 1, reward: 5000 },
      [RANK._4th]: { count: 1, reward: 50000 },
      [RANK._3rd]: { count: 0, reward: 1500000 },
      [RANK._2nd]: { count: 0, reward: 30000000 },
      [RANK._1st]: { count: 0, reward: 2000000000 },
    };

    const output = 55000;

    expect(game.getReturn()).toEqual(55000);
  });
});
