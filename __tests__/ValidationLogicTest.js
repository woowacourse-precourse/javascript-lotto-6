import {
  validateWinningNumberSix,
  validateWinningNumberDuplication,
  validateWinningNumberOutOfBounds,
} from "../src/CoreLogic/Validate/WinningNumber.js";
import {
  validateBonusNumberOutOfBounds,
  validateBonusNumberDuplicatedWithWinningNumber,
  validateBonusNumberInteger,
} from "../src/CoreLogic/Validate/BonusNumber.js";
import {
  validateCashInteger,
  validateCashNone,
} from "../src/CoreLogic/Validate/Cash.js";
//입력받은 값을 검증하고, 해당 값을 가지고 연산을 수행해서 결과값을 도출하는 것

describe("입력 금액 검증 테스트", () => {
  test("입력 금액 타입 테스트", async () => {
    const MOCK_CASH = "A";
    expect(() => {
      validateCashInteger(MOCK_CASH);
    }).toThrow("[ERROR]");
  });

  test("입력 금액 단위 테스트", async () => {
    const MOCK_CASH = 2001;
    expect(() => {
      validateCashInteger(MOCK_CASH);
    }).toThrow("[ERROR]");
  });

  test("입력 금액 공백 테스트", () => {
    const MOCK_CASH = "";
    expect(() => {
      validateCashNone(MOCK_CASH);
    }).toThrow("[ERROR]");
  });
});

describe("당첨 번호 검증 테스트", () => {
  test("당첨 번호 개수 테스트", async () => {
    const MOCK_WINNING_NUMBER_ARRAY = [10, 20, 30, 15, 25, 35, 45];
    expect(() => {
      validateWinningNumberSix(MOCK_WINNING_NUMBER_ARRAY);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 중복 테스트", () => {
    const MOCK_WINNING_NUMBER_ARRAY = [10, 20, 30, 15, 25, 25];
    expect(() => {
      validateWinningNumberDuplication(MOCK_WINNING_NUMBER_ARRAY);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 범위 테스트", () => {
    const MOCK_WINNING_NUMBER_ARRAY = [10, 20, 30, 15, 25, 46];
    expect(() => {
      validateWinningNumberOutOfBounds(MOCK_WINNING_NUMBER_ARRAY);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 검증 테스트", () => {
  test("보너스 번호와 당첨 번호 중복 테스트", () => {
    const MOCK_WINNING_NUMBER_ARRAY = [1, 2, 3, 4, 5, 6];
    const MOCK_BONUS_NUMBER = 6;
    expect(() => {
      validateBonusNumberDuplicatedWithWinningNumber(
        MOCK_WINNING_NUMBER_ARRAY,
        MOCK_BONUS_NUMBER
      );
    }).toThrow("[ERROR]");
  });
  test("보너스 번호 타입 테스트", () => {
    const MOCK_BONUS_NUMBER = "a";
    expect(() => {
      validateBonusNumberInteger(MOCK_BONUS_NUMBER);
    }).toThrow("[ERROR]");
  });
  test("보너스 번호 범위 테스트", () => {
    const MOCK_BONUS_NUMBER = 46;
    expect(() => {
      validateBonusNumberOutOfBounds(MOCK_BONUS_NUMBER);
    }).toThrow("[ERROR]");
  });
});
