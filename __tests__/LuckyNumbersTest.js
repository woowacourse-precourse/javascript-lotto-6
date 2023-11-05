import LuckyNumbers from "../src/LuckyNumbers";
import { ERRORS } from "../src/libs/message.js";

let luckyNumbers;

beforeEach(() => {
  luckyNumbers = new LuckyNumbers();
});

describe("당첨 번호 입력 테스트", () => {
  test("당첨 번호 개수 오류", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1, 2, 3, 4, 5, 6, 7");
    }).toThrow(ERRORS.INVALID_NUMBERS_LENGTH);
  });

  test("중복 오류", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1, 1, 3, 4, 5, 6");
    }).toThrow(ERRORS.CONTAIN_DUPLICATE);
  });

  test("공백 입력", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1,, 3, 4, 5, 6");
    }).toThrow(ERRORS.EMPTY_INPUT);
  });

  test("숫자가 아닌 것을 입력한 경우", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1, 가, 3, 4, 5, 6");
    }).toThrow(ERRORS.NOT_NUMBER);
  });

  test("입력값이 정수가 아닌 경우", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1.5, 2, 3, 4, 5, 6");
    }).toThrow(ERRORS.NOT_INTEGER);
  });

  test("1부터 45 사이의 숫자가 아닌 경우", () => {
    expect(() => {
      luckyNumbers.setWinningNumbers("1, 2, 3, 100, 5, 6");
    }).toThrow(ERRORS.NUMBER_RANGE_ALERT);
  });
});

describe("보너스 번호 입력 테스트", () => {
  test("공백 입력", () => {
    expect(() => {
      luckyNumbers.setBonusNumber("");
    }).toThrow(ERRORS.EMPTY_INPUT);
  });

  test("숫자가 아닌 것을 입력한 경우", () => {
    expect(() => {
      luckyNumbers.setBonusNumber("hi");
    }).toThrow(ERRORS.NOT_NUMBER);
  });

  test("입력값이 정수가 아닌 경우", () => {
    expect(() => {
      luckyNumbers.setBonusNumber("1.5");
    }).toThrow(ERRORS.NOT_INTEGER);
  });

  test("1부터 45 사이의 숫자가 아닌 경우", () => {
    expect(() => {
      luckyNumbers.setBonusNumber("46");
    }).toThrow(ERRORS.NUMBER_RANGE_ALERT);
  });

  test("보너스 번호가 당첨 번호에 속하는 경우", () => {
    luckyNumbers.setWinningNumbers("1,2,3,4,5,6");
    expect(() => {
      luckyNumbers.setBonusNumber("6");
    }).toThrow(ERRORS.BONUS_NUMBER_DUPLICATE);
  });
});
