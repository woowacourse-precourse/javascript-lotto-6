import getRateOfReturn from '../../src/utils/getRateOfReturn';

describe('로또 수익율 계산 테스트', () => {
  test.each([
    {
      purchaseAmount: 5,
      matchingTable: {
        three: 1,
        four: 0,
        fiveNotBonus: 0,
        fiveAndBonus: 0,
        all: 0,
      },
      expected: '100.0',
    },
    {
      purchaseAmount: 7,
      matchingTable: {
        three: 1,
        four: 0,
        fiveNotBonus: 0,
        fiveAndBonus: 0,
        all: 0,
      },
      expected: '71.4',
    },
  ])(
    '구입한 로또 갯수와 당첨내역을 전달하면 수익율을 계산합니다.',
    ({ purchaseAmount, matchingTable, expected }) => {
      expect(getRateOfReturn(matchingTable, purchaseAmount)).toBe(expected);
    },
  );
});
