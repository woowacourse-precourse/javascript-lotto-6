import LottoRankMaker from "../src/domain/LottoRankMaker.js";

test("로또 티켓 과 당첨번호(보너스번호포함) 을 넣으면 등수 배열을 반환하는지 테스트", () => {
  const lottoTicket = [
    [1,2,3,4,5,6],
    [1,2,3,4,5,7],
    [1,2,3,4,5,11],
    [1,2,3,4,11,12],
    [1,2,3,11,12,13]
  ];
  // 당첨번호 6개 [1,2,3,4,5,6] + 보너스 번호 7.
  const luckyBonusNumbers = [1,2,3,4,5,6,7];
  
  // 1등 2등 3등 4등 5등 이 당첨됨을 의미. 
  const expectedResult = [1, 2, 3, 4, 5]; 

  const lottoRankMaker = new LottoRankMaker(lottoTicket, luckyBonusNumbers);
  
  expect(lottoRankMaker.getRankArray()).toEqual(expectedResult);
});