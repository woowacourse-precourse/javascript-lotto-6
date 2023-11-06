import LottoGame from '../src/LottoGame';

describe('로또 게임 테스트', () => {
  test.each([
    {
      autoLottos: [[1, 2, 3, 4, 5, 6]],
      winningLotto: [7, 8, 9, 10, 11, 12],
      bonus: 13,
      expected: {
        rankingList: [],
        rateOfReturn: 0.0,
      },
    },
    {
      autoLottos: [
        [2, 7, 12, 14, 32, 41],
        [3, 16, 23, 30, 32, 43],
      ],
      winningLotto: [3, 30, 32, 12, 1, 7],
      bonus: 41,
      expected: {
        rankingList: [5, 5],
        rateOfReturn: 500.0,
      },
    },
    {
      autoLottos: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ],
      winningLotto: [1, 2, 3, 12, 13, 14],
      bonus: 41,
      expected: {
        rankingList: [5],
        rateOfReturn: 250.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다.',
    ({ autoLottos, winningLotto, bonus, expected }) => {
      const lottoGame = new LottoGame(autoLottos, winningLotto, bonus);

      expect(lottoGame.getWinningResult()).toEqual(expected);
    },
  );

  test.each([
    {
      autoLottos: [
        [2, 7, 12, 14, 32, 41],
        [3, 16, 23, 30, 32, 43],
      ],
      winningLotto: [2, 7, 12, 14, 32, 43],
      bonus: 41,
      expected: {
        rankingList: [2],
        rateOfReturn: 1500000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 2등인 케이스',
    ({ autoLottos, winningLotto, bonus, expected }) => {
      const lottoGame = new LottoGame(autoLottos, winningLotto, bonus);

      expect(lottoGame.getWinningResult()).toEqual(expected);
    },
  );

  test.each([
    {
      autoLottos: [
        [2, 7, 12, 14, 32, 41],
        [3, 16, 23, 30, 32, 43],
      ],
      winningLotto: [2, 7, 12, 14, 32, 43],
      bonus: 39,
      expected: {
        rankingList: [3],
        rateOfReturn: 75000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 3등인 케이스',
    ({ autoLottos, winningLotto, bonus, expected }) => {
      const lottoGame = new LottoGame(autoLottos, winningLotto, bonus);

      expect(lottoGame.getWinningResult()).toEqual(expected);
    },
  );
});
