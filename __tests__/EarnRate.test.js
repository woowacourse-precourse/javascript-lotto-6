import { ERROR_CONVENTION } from "../src/constants/conventions";
import EarnRate from "../src/model/EarnRate";

describe("수익률 클래스 테스트", () => {
  test("올바른 정확도의 수익률(소숫점)이 아닌 경우 예외를 발생한다.", () => {
    expect(() => {
      new EarnRate(75.755);
    }).toThrow(ERROR_CONVENTION);
  });
});
