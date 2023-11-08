import LottoStatistics from "../src/domain/LottoStatistics.js";

test('로또 당첨된 등수배열과, 구입 금액을 넣으면 당첨 통계를 잘 보여주는지 테스트', () => {
  const lottoRankArray = [4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  const purchaseAmount = 50000;
  const statisticsResult = [10, 1, 0, 0, 0, '100.0'];

  const lottoStastics = new LottoStatistics(lottoRankArray, purchaseAmount);

  expect(lottoStastics.getResult()).toEqual(statisticsResult);
});
