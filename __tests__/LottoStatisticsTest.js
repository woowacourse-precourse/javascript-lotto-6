import LottoStatistics from "../src/domain/LottoStatistics.js";

test('로또 당첨 등수배열과 구입 금액을 넣으면 당첨 통계를 잘 보여주는지 테스트', () => {
  const lottoRankArray = [4,5,5,5,5,5,5,5,5,5,5];
  const purchaseAmount = 50000;

  const stasticsResult = [
    `3개 일치 (5,000원) - 10개`,
    `4개 일치 (50,000원) - 1개`,
    `5개 일치 (1,500,000원) - 0개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`,
    `6개 일치 (2,000,000,000원) - 0개`,
    `총 수익률은 100.0%입니다.`
  ];

  const lottoStastics = new LottoStatistics(lottoRankArray, purchaseAmount);

  expect(lottoStastics.getResult()).toEqual(stasticsResult);
})