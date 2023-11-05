import LottoReader from "../src/domain/LottoReader.js";

test('로또 티켓과 당첨번호를 넣으면 당첨 통계를 잘 보여주는지 테스트', () => {
  const lottoTicket = [
    [1,2,3,11,12,13],
    [4,5,6,11,12,13],
    [1,2,3,21,22,23],
    [4,5,6,41,42,43],
    [31,32,33,34,35,36]
  ];
  const lcukyBonusNumbers = [1,2,3,4,5,6,7];
  const result = [
    `3개 일치 (5,000원) - 4개`,
    `4개 일치 (50,000원) - 0개`,
    `5개 일치 (1,500,000원) - 0개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`,
    `6개 일치 (2,000,000,000원) - 0개`,
    `총 수익률은 300.0%입니다.`
  ]

  const lottoReader = new LottoReader(lottoTicket, lcukyBonusNumbers);

  expect(lottoReader.start()).toEqual(result);
})