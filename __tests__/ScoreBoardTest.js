import ScoreBoard from '../src/model/ScoreBoard.js';

describe('로또 점수판 테스트', () => {
  test('점수 기록을 하고 점수 확인을 한다.', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 8, 9, 10],
    ];
    const expectedResult = {
      '1등': 1,
      '2등': 1,
      '3등': 1,
      '4등': 1,
      '5등': 1,
    };

    const scoreBoard = new ScoreBoard();

    lottos.forEach((lotto) =>
      scoreBoard.checkLotto(winningNumbers, bonusNumber, lotto)
    );

    expect(scoreBoard.getScoreBoard()).toEqual(expectedResult);
  });
});
