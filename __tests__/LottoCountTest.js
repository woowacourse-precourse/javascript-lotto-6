import { ERROR_MESSAGE } from "../src/constants/errorMessage.js";
import LottoCount from "../src/models/LottoCount.js";

describe("LottoCount 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoCount('a');
    }).toThrow(ERROR_MESSAGE.not_number);
  });

  test("구입 금액이 1000으로 나누어지지 않으면 예외가 발생한다", () => {
    expect(() => {
      new LottoCount(900);
    }).toThrow(ERROR_MESSAGE.not_multiples_of_1000);
  });

  test("구입 금액이 0보다 작으면 예외가 발생한다", () => {
    expect(() => {
      new LottoCount(-1000);
    }).toThrow(ERROR_MESSAGE.less_than_one);
  });

  test("정상적인 입력이면 에러가 발생하지 않는다.", () => {
    expect(() => {
      new LottoCount(1000);
    }).not.toThrow();
  });
});