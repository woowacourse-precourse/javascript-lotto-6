import LottoGame from '../src/LottoGame.js';

describe('User 클래스 테스트', () => {
  test('로또 구입 금액 입력에 대한 예외처리', () => {
    const lottoGame = new LottoGame(
      [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ],
      [1, 3, 5, 14, 41, 42],
      22,
    );
    expect(lottoGame.winnerStatic).toStrictEqual([1, 0, 0, 1, 0]);
  });
});
