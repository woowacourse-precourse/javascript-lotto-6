import { WINNING_ERROR } from "../../src/constants/errorMessage.js";
import Lotto from "../../src/controller/Lotto.js";

describe("당첨 번호 입력 테스트", () => {
  test("6개의 번호가 입력되지 않은 경우", () => {
    //given
    const inputs = [[1, 2, 3, 4, 5]];
    //when, then
    expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
  });
  test.each([
    [[-1, 2, 3, 4, 5, 6]],
    [[1, -12, 3, 4, 5, 6]],
    [[1, -2, 3, 4, 5, 124]],
    [[1, 2, 3, 678, 4, 5]],
  ])("1 미만 45 초과인 숫자가 있을 경우", (inputs) => {
    //when, then
    expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
  });
  test.each([
    [[1, "a", 3, 4, 5, "g"]],
    [[12, 35, "k", 6, 42, 21]],
    [[1, 3, "a", "b", "c", "d"]],
  ])("문자가 들어간 경우", (inputs) => {
    //when, then
    expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
  });
  test.each([
    [[1]],
    [[1, 2]],
    [[1, 2, 3]],
    [[1, 2, 3, 4]],
    [[1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5, 6, 7]],
    [[1, 2, 3, 4, 5, 6, 7, 8]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
  ])("숫자가 6개가 아닌 경우", (inputs) => {
    //when, then
    expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
  });
  test.each([[[1, 2, 3, 4, , 6]], [[, , , , ,]]])(
    "공백이 들어간 경우",
    (inputs) => {
      //when, then
      expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
    }
  );
  test.each([[[1, 2, 3, 4, 5, 5]], [[1, 2, 3, 3, 43, 43]]])(
    "중복된 숫자가 들어간 경우",
    (inputs) => {
      //when, then
      expect(() => new Lotto(inputs)).toThrow(`${WINNING_ERROR.error}`);
    }
  );
  test("유효한 값을 입력한 경우", () => {
    //given
    const inputs = [43, 23, 12, 45, 31, 6];

    //when, then
    expect(() => new Lotto(inputs)).not.toThrow();
  });
});
