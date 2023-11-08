import Lotto from "../src/Lotto.js";
import { ERROR_MESSAGES } from "../src/LottoValidation.js";
import { LottoNumbersError } from "../src/errors/index.js";

describe("로또 유효성 검사 클래스 테스트", () => {
  test.each([
    [[46, 1, 2, 3, 4, 5]],
    [["a", 1, 2, 3, 4, 5]],
    [[-13, 1, 2, 3, 4, 5]],
  ])(
    "%#. 로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.",
    async (inputs) => {
      // when & then
      expect(() => {
        new Lotto(inputs);
      }).toThrow(new LottoNumbersError(ERROR_MESSAGES.NUMBER_NOT_IN_RANGE));
    }
  );

  test("로또 번호의 갯수가 6개가 아니면 예외가 발생한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    // when & then
    expect(() => {
      new Lotto(numbers);
    }).toThrow(new LottoNumbersError(ERROR_MESSAGES.LENGTH_NOT_MATCHED));
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    // given
    const numbers = [1, 2, 3, 4, 5, 5];

    // when & then
    expect(() => {
      new Lotto(numbers);
    }).toThrow(new LottoNumbersError(ERROR_MESSAGES.DUPLICATED_NUMBERS));
  });
});
