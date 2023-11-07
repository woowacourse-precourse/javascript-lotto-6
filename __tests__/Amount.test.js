import { ERROR_CONVENTION } from "../src/constants/conventions";
import { EMPTY_LINE } from "../src/constants/messages";
import Amount from "../src/model/Amount";

describe("구입 금액 클래스 테스트", () => {
  test("타입이 number가 아니면 예외를 발생한다.", () => {
    expect(() => {
      new Amount("1000j");
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력값이 없을 경우 예외를 발생한다.", () => {
    expect(() => {
      new Amount(EMPTY_LINE);
    }).toThrow(ERROR_CONVENTION);
  });

  test("공백만 있을 경우 예외를 발생한다.", () => {
    expect(() => {
      new Amount("    ");
    }).toThrow(ERROR_CONVENTION);
  });

  test("잔돈이 존재하는 경우 예외를 발생한다.", () => {
    expect(() => {
      new Amount("1500");
    }).toThrow(ERROR_CONVENTION);
  });
});
