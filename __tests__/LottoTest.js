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
  test('당첨 번호와 비교해 결과를 반환하는 메서드 테스트', () => {
    const LottoInstance = new Lotto([1, 2, 3, 4, 5, 6]);
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const output = { matchCount: 6, isBonusMatched: false };

    expect(LottoInstance.getWinningInfo(winning, bonus)).toEqual(output);
  });

  test('로또 클래스 테스트', () => {
    const LottoInstance = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(LottoInstance).toBeInstanceOf(Lotto);
    expect(LottoInstance.info).toBe('[1, 2, 3, 4, 5, 6]');
  });

  // // getDrawRank
  test('순위를 반환하는 메서드 테스트', () => {
    const LottoGame = new Game();

    const inputs = [
      { matchCount: 6, isBonusMatched: false },
      { matchCount: 5, isBonusMatched: true },
      { matchCount: 5, isBonusMatched: false },
      { matchCount: 4, isBonusMatched: false },
      { matchCount: 3, isBonusMatched: false },
    ];

    const output = Object.values(RANK);

    inputs.forEach((input, index) => {
      expect(LottoGame.getDrawRank(input)).toEqual(output[index]);
    });
  });

  // // getProfitRate
  test('총 수익을 구하는 메서드 테스트', () => {
    const amount = 2000;
    const LottoGame = new Game(amount);

    LottoGame.drawInfo = {
      [RANK[5]]: { winningCount: 1, reward: REWARDS[5], matchCount: 3 },
      [RANK[4]]: { winningCount: 1, reward: REWARDS[4], matchCount: 4 },
      [RANK[3]]: { winningCount: 0, reward: REWARDS[3], matchCount: 5 },
      [RANK[2]]: { winningCount: 0, reward: REWARDS[2], matchCount: 5 },
      [RANK[1]]: { winningCount: 0, reward: REWARDS[1], matchCount: 6 },
    };

    const totalReward = 55000;
    const output = (totalReward / amount) * 100;

    expect(LottoGame.getProfitRate()).toEqual(output);
  });
});
