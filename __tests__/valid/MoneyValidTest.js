import { MONEY_ERROR } from "../../src/constants/errorMessage.js";
import moneyIsValid from "../../src/utils/moneyIsValid.js";

describe("금액 입력 테스트", () => {
  test("문자가 들어간 경우", () => {
    // given
    const inputs = [
      ["a1000"],
      ["1a000"],
      ["10a00"],
      ["100a0"],
      ["1000a"],
      ["a"],
    ];

    // when, then
    inputs.forEach((testCase) => {
      const [testInput] = testCase;
      expect(() => moneyIsValid(testInput)).toThrow(
        `${MONEY_ERROR.string_error}`
      );
    });
  });

  test.each([["10 00"], ["1 000"], ["100 0"], [" 1000"], ["1000 "], [" "]])(
    "공백이 들어간 경우",
    (input) => {
      // when, then
      expect(() => moneyIsValid(input)).toThrow(`${MONEY_ERROR.space_error}`);
    }
  );

  test.each([
    ["1000.0"],
    ["1.5"],
    ["5000.0"],
    ["1234.5678"],
    ["1000000.1234567"],
    [`${Math.PI}`],
  ])("소수점이 들어간 경우", (input) => {
    //when, then
    expect(() => moneyIsValid(input)).toThrow(`${MONEY_ERROR.string_error}`);
  });

  test.each([["1"], ["-123"], ["214"], ["0909"]])(
    "1000원 미만의 금액이 입력 된 경우",
    (input) => {
      //when, then
      expect(() => moneyIsValid(input)).toThrow(`${MONEY_ERROR.amount_error}`);
    }
  );
  test.each([
    ["1234"],
    ["961106"],
    ["610214"],
    ["690909"],
    ["931006"],
    ["2147483647"],
  ])("1000원 단위 금액이 입력되지 않은 경우", (input) => {
    //when, then
    expect(() => moneyIsValid(input)).toThrow(`${MONEY_ERROR.amount_error}`);
  });
});
