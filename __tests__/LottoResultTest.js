import LottoResult from "../src/LottoResult.js";

describe("LottoResult 클래스 테스트", () => {
  test("당첨 결과에 따른 수익금 확인", () => {
    const lottoResult = new LottoResult();
    lottoResult.result = [2, 1, 0, 1, 0];
    lottoResult.result.forEach((number, index) => {
      lottoResult.calculateEarningMoney(number, index);
    });
    expect(lottoResult.earningMoney).toEqual(30060000);
  });
  
  test("로또 구매 금액과 당첨 금액에 따른 수익률 확인", () => {
    const lottoResult = new LottoResult();
    lottoResult.earningMoney = 5000;
    expect(lottoResult.getEarningRate(8000)).toEqual(62.5);
  });
});