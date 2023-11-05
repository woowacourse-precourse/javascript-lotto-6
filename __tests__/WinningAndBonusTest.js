import WinningNumbers from "../src/WinningNumbers.js";
import { ERRORS } from "../src/libs/message.js";

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호 개수 오류", () => {
    expect(() => {
      new WinningNumbers("1, 2, 3, 4, 5, 6, 7");
    }).toThrow(ERRORS.INVALID_NUMBERS_LENGTH);
  });

  test("중복 오류", () => {
    expect(() => {
      new WinningNumbers("1, 1, 3, 4, 5, 6");
    }).toThrow(ERRORS.CONTAIN_DUPLICATE);
  });

  test("공백 입력", () => {
    expect(() => {
      new WinningNumbers("1,, 3, 4, 5, 6");
    }).toThrow(ERRORS.EMPTY_INPUT);
  });

  test("숫자가 아닌 것을 입력한 경우", () => {
    expect(() => {
      new WinningNumbers("1, 가, 3, 4, 5, 6");
    }).toThrow(ERRORS.NOT_NUMBER);
  });

  test("1부터 45 사이의 숫자가 아닌 경우", () => {
    expect(() => {
      new WinningNumbers("1, 2, 3, 100, 5, 6");
    }).toThrow(ERRORS.NUMBER_RANGE_ALERT);
  });
});
