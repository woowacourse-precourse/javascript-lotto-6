import bonusIsValid from "../../src/utils/bonusIsValid.js";
import { BONUS_ERROR } from "../../src/constants/errorMessage.js";

describe("보너스 번호 입력 테스트", () => {
  test("공백이 입력된 경우", async () => {
    //given
    const input = "     ";
    //when, then
    await expect(() => bonusIsValid(input)).toThrow(
      `${BONUS_ERROR.space_error}`
    );
  });

  test.each([
    ["1.2"],
    [`${Math.PI}`],
    ["123.1234"],
    ["44.23"],
    ["32.54"],
    ["1.00"],
  ])("소수점이 포함된 경우", (input) => {
    //when, then
    expect(() => bonusIsValid(input)).toThrow(`${BONUS_ERROR.point_error}`);
  });

  test.each([["a"], ["1a"], ["34g"], ["hyuri"], ["as9"], ["4a1"], ["09a"]])(
    "문자가 포함된 경우",
    (input) => {
      //when, then
      expect(() => bonusIsValid(input)).toThrow(`${BONUS_ERROR.string_error}`);
    }
  );
  test.each([["-23"], ["-11"], ["0"], ["-6"], ["0214"], ["909"], ["1006"]])(
    "1 이상 45 이하 범위 숫자가 아닌 경우",
    (input) => {
      //when, then
      expect(() => bonusIsValid(input)).toThrow(`${BONUS_ERROR.range_error}`);
    }
  );
  test.each([
    ["1", [1, 2, 3, 4, 5, 6]],
    ["13", [1, 3, 23, 45, 13, 12]],
    ["41", [1, 41, 23, 14, 6, 35]],
    ["25", [1, 24, 25, 26, 13, 37]],
    ["37", [6, 32, 45, 37, 27, 17]],
  ])("당첨 번호와 중복된 에러가 있을 경우", (input, winningNumbers) => {
    //when, then
    expect(() => bonusIsValid(input, winningNumbers)).toThrow(
      `${BONUS_ERROR.dulicate_error}`
    );
  });
});
