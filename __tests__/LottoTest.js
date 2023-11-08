import Lotto from '../src/Lotto.js';
import Game from '../src/Game.js';
import { RANK, REWARDS } from '../src/util/constants.js';
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

    const output = Object.values(RANK);

    inputs.forEach((input, index) => {
      expect(game.getRank(input)).toEqual(output[index]);
    });
  });

  // // getReturn
  test('총 수익을 구하는 메서드 테스트', () => {
    const amount = 2000;
    const game = new Game(amount);

    game.drawInfo = {
      [RANK[5]]: { winningCount: 1, reward: REWARDS[5], matchCount: 3 },
      [RANK[4]]: { winningCount: 1, reward: REWARDS[4], matchCount: 4 },
      [RANK[3]]: { winningCount: 0, reward: REWARDS[3], matchCount: 5 },
      [RANK[2]]: { winningCount: 0, reward: REWARDS[2], matchCount: 5 },
      [RANK[1]]: { winningCount: 0, reward: REWARDS[1], matchCount: 6 },
    };

    const output = 55000;

    expect(game.getReturn()).toEqual(55000);
  });
});
