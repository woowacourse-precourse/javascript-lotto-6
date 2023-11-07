import WinningResult from '../src/WinningResult';

describe('로또 게임 테스트', () => {
  test.each([
    {
      matchCountList: [0, 1, 2],
      expected: {
        matchingTable: {
          three: 0,
          four: 0,
          fiveNotBonus: 0,
          fiveAndBonus: 0,
          all: 0,
        },
        rateOfReturn: 0.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수가 2개이하면 랭킹에 등록되지 않습니다.',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );

  test.each([
    {
      matchCountList: [6, 0],
      expected: {
        matchingTable: {
          three: 0,
          four: 0,
          fiveNotBonus: 0,
          fiveAndBonus: 0,
          all: 1,
        },
        rateOfReturn: 100000000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수6개 => 1등',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );

  test.each([
    {
      matchCountList: [[5, true], 0],
      expected: {
        matchingTable: {
          three: 0,
          four: 0,
          fiveNotBonus: 0,
          fiveAndBonus: 1,
          all: 0,
        },
        rateOfReturn: 1500000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수5개, 보너스번호 당첨 => 2등',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );

  test.each([
    {
      matchCountList: [[5, false], 0],
      expected: {
        matchingTable: {
          three: 0,
          four: 0,
          fiveNotBonus: 1,
          fiveAndBonus: 0,
          all: 0,
        },
        rateOfReturn: 75000.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수5개, 보너스번호 미당첨 => 3등',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );

  test.each([
    {
      matchCountList: [4, 0],
      expected: {
        matchingTable: {
          three: 0,
          four: 1,
          fiveNotBonus: 0,
          fiveAndBonus: 0,
          all: 0,
        },
        rateOfReturn: 2500.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수 4개 => 4등',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );

  test.each([
    {
      matchCountList: [3, 0],
      expected: {
        matchingTable: {
          three: 1,
          four: 0,
          fiveNotBonus: 0,
          fiveAndBonus: 0,
          all: 0,
        },
        rateOfReturn: 250.0,
      },
    },
  ])(
    '당첨된 랭킹리스트와 수익률을 반환합니다. - 당첨갯수 3개 => 5등',
    ({ matchCountList, expected }) => {
      const lottoGame = new WinningResult(matchCountList);

      expect(lottoGame.getResult()).toEqual(expected);
    },
  );
});
