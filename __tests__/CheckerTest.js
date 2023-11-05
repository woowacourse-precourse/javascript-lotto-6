import BonusBall from '../src/BonusBall';
import Checker from '../src/Checker';
import Lotto from '../src/Lotto';
import { FIVE_AND_BONUS, FIVE_NO_BONUS, RANK } from '../src/constant';

describe('Checker 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const winningLotto = new Lotto(winningNumbers);
  const bonusBall = new BonusBall(bonusNumber, winningNumbers);
  const makeLottos = (array) => array.map((v) => new Lotto(v));
  const makeExpectedWinningResult = (
    three,
    four,
    fiveNoBonus,
    fiveAndBonus,
    six,
  ) => [
    { rank: 'three', number: three },
    { rank: 'four', number: four },
    { rank: FIVE_NO_BONUS, number: fiveNoBonus },
    { rank: FIVE_AND_BONUS, number: fiveAndBonus },
    { rank: 'six', number: six },
  ];

  const userLottoTestArray = [
    {
      userLottosNumbers: [
        [1, 2, 3, 10, 11, 12],
        [1, 2, 3, 10, 11, 12],
      ],
      rankArray: ['three', 'three'],
      expectedWinningResult: makeExpectedWinningResult(2, 0, 0, 0, 0),
    },
    {
      userLottosNumbers: [
        [21, 22, 23, 10, 11, 12],
        [1, 2, 3, 4, 5, 6],
      ],
      rankArray: [undefined, 'six'],
      expectedWinningResult: makeExpectedWinningResult(0, 0, 0, 0, 1),
    },
    {
      userLottosNumbers: [
        [1, 2, 3, 4, 7, 11],
        [1, 2, 3, 4, 5, 7],
      ],
      rankArray: ['four', FIVE_AND_BONUS],
      expectedWinningResult: makeExpectedWinningResult(0, 1, 0, 1, 0),
    },
    {
      userLottosNumbers: [
        [1, 2, 3, 4, 6, 11],
        [1, 2, 3, 4, 5, 7],
      ],
      rankArray: [FIVE_NO_BONUS, FIVE_AND_BONUS],
      expectedWinningResult: makeExpectedWinningResult(0, 0, 1, 1, 0),
    },
  ];

  test('당첨 등수 테스트', () => {
    const userLottosNumbers = [
      [20, 21, 22, 23, 24, 25],
      [1, 20, 21, 22, 23, 24],
      [1, 2, 20, 21, 22, 23],
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 4, 9, 10],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ];
    const userLottos = makeLottos(userLottosNumbers);
    const checker = new Checker(winningLotto, bonusBall, userLottos);
    const numbers = [0, 1, 2, 3, 4, 5, 5, 6];
    const expectedRanks = [undefined, undefined, undefined].concat(RANK);
    numbers.forEach((v, i) => {
      const rank = checker.changeToRank(v, v === 5 && i === 6);
      expect(rank).toEqual(expectedRanks[i]);
    });
  });

  test.each(userLottoTestArray)(
    '당첨 로또 번호,보너스 번호와 로또 비교',
    ({ userLottosNumbers, rankArray }) => {
      const userLottos = makeLottos(userLottosNumbers);
      const checker = new Checker(winningLotto, bonusBall, userLottos);

      userLottos.forEach((v, i) => {
        const rank = checker.compareLotto(v, winningNumbers, bonusNumber);
        console.log(winningNumbers, v.getLottoNumbers(), rank, rankArray[i]);
        expect(rank).toEqual(rankArray[i]);
      });
    },
  );

  test.each(userLottoTestArray)(
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
