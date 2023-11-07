import RateOfReturn from '../src/RateOfReturn';

describe('로또 수익율 계산 테스트', () => {
  test('구입한 로또 갯수와 당첨내역을 전달하면 수익율을 계산합니다.', () => {
    const purchaseAmount = 5;
    const matchingTable = {
      three: 2,
      four: 0,
      fiveNotBonus: 0,
      fiveAndBonus: 0,
      all: 0,
    };
    const rateOfReturn = new RateOfReturn(purchaseAmount);
    expect(rateOfReturn.getRateOfReturn(matchingTable)).toBe(200.0);
  });
});
