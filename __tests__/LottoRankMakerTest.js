import LottoRankMaker from "../src/domain/LottoRankMaker.js";

describe('로또 등수 계산기 클래스 테스트', () => {
  const lottoTicket = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 4, 5, 11],
    [1, 2, 3, 4, 11, 12],
    [1, 2, 3, 11, 12, 13]
  ];
  const luckyBonusNumbers = [1, 2, 3, 4, 5, 6, 7];
  const lottoRankMaker = new LottoRankMaker(lottoTicket, luckyBonusNumbers);

  test('로또 티켓 과 당첨번호(보너스번호포함) 을 넣으면 등수 배열을 반환하는지 테스트', () => {
    const expectedResult = [1, 2, 3, 4, 5];

    expect(lottoRankMaker.getRankArray()).toEqual(expectedResult);
  });
});
