import { BonusBall, Checker } from '../src/models/index.js';
import Lotto from '../src/Lotto.js';
import { CORRECT_NUMBER, RANK } from '../src/constants/index.js';
import { makeLottos, makeExpectedWinningResult } from '../testUtils/index.js';

describe('Checker 클래스 테스트', () => {
  const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
  const BONUS_NUMBER = 7;
  const winningLotto = new Lotto(WINNING_NUMBERS);
  const bonusBall = new BonusBall(BONUS_NUMBER, WINNING_NUMBERS);

  const USER_LOTTOS_TEST_ARRAY = [
    {
      userLottosNumbers: [
        [1, 2, 3, 10, 11, 12],
        [1, 2, 3, 10, 11, 12],
      ],
      rankArray: [CORRECT_NUMBER.three, CORRECT_NUMBER.three],
      expectedWinningResult: makeExpectedWinningResult(2, 0, 0, 0, 0),
    },
    {
      userLottosNumbers: [
        [21, 22, 23, 10, 11, 12],
        [1, 2, 3, 4, 5, 6],
      ],
      rankArray: [undefined, CORRECT_NUMBER.six],
      expectedWinningResult: makeExpectedWinningResult(0, 0, 0, 0, 1),
    },
    {
      userLottosNumbers: [
        [1, 2, 3, 4, 7, 11],
        [1, 2, 3, 4, 5, 7],
      ],
      rankArray: [CORRECT_NUMBER.four, CORRECT_NUMBER.fiveAndBonus],
      expectedWinningResult: makeExpectedWinningResult(0, 1, 0, 1, 0),
    },
    {
      userLottosNumbers: [
        [1, 2, 3, 4, 6, 11],
        [1, 2, 3, 4, 5, 7],
      ],
      rankArray: [CORRECT_NUMBER.fiveNoBonus, CORRECT_NUMBER.fiveAndBonus],
      expectedWinningResult: makeExpectedWinningResult(0, 0, 1, 1, 0),
    },
  ];

  test('당첨 등수 테스트', () => {
    const USER_LOTTOS_NUMBERS_ARRAY = [
      [20, 21, 22, 23, 24, 25],
      [1, 20, 21, 22, 23, 24],
      [1, 2, 20, 21, 22, 23],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 4, 9, 10],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ];
    const userLottos = makeLottos(USER_LOTTOS_NUMBERS_ARRAY);
    const checker = new Checker(winningLotto, bonusBall, userLottos);
    const NUMBERS = [0, 1, 2, 3, 4, 5, 5, 6];
    const expectedRanks = [undefined, undefined, undefined].concat(RANK);
    NUMBERS.forEach((v, i) => {
      const isBonusTargetRank = v === 5 && i === 6;
      const rank = checker.changeToRank(v, isBonusTargetRank);
      expect(rank).toEqual(expectedRanks[i]);
    });
  });

  test.each(USER_LOTTOS_TEST_ARRAY)(
    '당첨 로또 번호,보너스 번호와 로또 비교',
    ({ userLottosNumbers, rankArray }) => {
      const userLottos = makeLottos(userLottosNumbers);
      const checker = new Checker(winningLotto, bonusBall, userLottos);

      userLottos.forEach((v, i) => {
        const rank = checker.compareLotto(v, WINNING_NUMBERS, BONUS_NUMBER);
        expect(rank).toEqual(rankArray[i]);
      });
    },
  );

  test.each(USER_LOTTOS_TEST_ARRAY)(
    '당첨 결과 계산하기',
    ({ userLottosNumbers, expectedWinningResult }) => {
      const userLottos = makeLottos(userLottosNumbers);
      const checker = new Checker(winningLotto, bonusBall, userLottos);

      const winningResult = checker.calculateWinningResult();

      winningResult.forEach((v, i) => {
        expect(v.rank).toBe(expectedWinningResult[i].rank);
        expect(v.number).toBe(expectedWinningResult[i].number);
      });
    },
  );
});
