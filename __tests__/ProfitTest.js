import Calculator from "../src/ROI/Calculator.js";
import IO from "../src/Util/IOHandler.js";

test("임의로 계산한 수익률이 소수점 둘째 자리에서 반올림한 값으로 출력되어야 한다", () => {
  //given
  const invest = 30000;
  const result = { 3: 0, 4: 1, 5: 0, 5.1: 0, 6: 0 };
  const logSpy = jest.spyOn(IO, "print");

  //when
  const profit = Calculator.profit(result); // profit === 50000
  Calculator.print(invest, profit); // roi === 166.6666666666%

  //then
  expect(logSpy).toHaveBeenCalledWith("총 수익률은 166.7%입니다.");
});
