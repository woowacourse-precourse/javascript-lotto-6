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
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ],
      winningLotto: [13, 14, 15, 16, 17, 18],
      bonus: 19,
      expected: {
        rankingList: [],
        rateOfReturn: 0.0,
      },
    },
    {
      autoLottos: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
      ],
      winningLotto: [1, 2, 20, 21, 22, 23],
      bonus: 24,
      expected: {
        rankingList: [],
        rateOfReturn: 0.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수가 2개이하면 랭킹에 등록되지 않습니다.',
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
      winningLotto: [2, 7, 12, 14, 32, 41],
      bonus: 45,
      expected: {
        rankingList: [1],
        rateOfReturn: 100000000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수6개 => 1등',
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
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수5개, 보너스번호 당첨 => 2등',
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
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수5개, 보너스번호 미당첨 => 3등',
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
      winningLotto: [2, 7, 12, 14, 20, 21],
      bonus: 39,
      expected: {
        rankingList: [4],
        rateOfReturn: 2500.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수 4개 => 4등',
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
      winningLotto: [2, 7, 12, 20, 21, 22],
      bonus: 39,
      expected: {
        rankingList: [5],
        rateOfReturn: 250.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수 3개 => 5등',
    ({ autoLottos, winningLotto, bonus, expected }) => {
      const lottoGame = new LottoGame(autoLottos, winningLotto, bonus);

      expect(lottoGame.getWinningResult()).toEqual(expected);
    },
  );
});
