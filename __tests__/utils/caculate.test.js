import {
  divideMoneyForLotto,
  profitRate,
  sumOfWinning,
} from "../../src/utils/caculate";

// TODO: 변수명 변경하여 가독성 개선
describe("caculate util 함수 테스트", () => {
  test("올바른 금액을 로또 가격으로 나눌 경우 구매 가능한 로또 수를 반환한다.", () => {
    const money = 5000; // 테스트용 구입 금액
    const expectedLottoCount = 5; // 예상되는 로또 수 (5000 / 1000)

    const lottoCount = divideMoneyForLotto(money);

    expect(lottoCount).toBe(expectedLottoCount);
  });

  test("올바르게 계산된 수익률은 조건에 맞게 소숫점이 정해진다.", () => {
    const money = 7000; // 테스트용 구입 금액
    const winningPrize = 11000; // 테스트용 당첨 금액
    const expectedEarnRate = 157.1; // 예상되는 수익률

    const earnRate = profitRate(money, winningPrize);

    expect(earnRate).toBe(expectedEarnRate);
  });

  test("올바르게 집계된 금액은 올바른 결과를 반환한다.", () => {
    const counts = [0, 0, 0, 0, 0, 1];
    const expectedSum = 5000;

    const winningSum = sumOfWinning(counts);

    expect(winningSum).toBe(expectedSum);
  });
});
