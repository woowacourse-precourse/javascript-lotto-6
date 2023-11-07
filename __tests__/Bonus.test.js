import { ERROR_CONVENTION } from "../src/constants/conventions";
import { EMPTY_LINE } from "../src/constants/messages";
import Bonus from "../src/model/Bonus";

describe("보너스 번호 클래스 테스트", () => {
  test("타입이 number가 아니면 예외를 발생한다.", () => {
    expect(() => {
      new Bonus("1j");
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력값이 없을 경우 예외를 발생한다.", () => {
    expect(() => {
      new Bonus(EMPTY_LINE);
    }).toThrow(ERROR_CONVENTION);
  });

  test("공백만 있을 경우 예외를 발생한다.", () => {
    expect(() => {
      new Bonus("    ");
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열로 만들었을 때 범위에서 벗어나는 숫자가 있다면 예외를 발생한다.`, () => {
    expect(() => {
      new Bonus("46");
    }).toThrow(ERROR_CONVENTION);
  });
});
