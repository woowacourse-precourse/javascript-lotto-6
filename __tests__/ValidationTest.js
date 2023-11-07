import validation from "../src/utils/validation.js";
import { MESSAGE } from "../src/utils/Constants.js";

describe("Validation 함수 테스트", () => {
  test("같은 숫자가 있으면 에러가 난다.", () => {
    expect(() => {
      validation.hasSameNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGE.ERROR.HAS_SAME_NUMBER);
  });

  test("1~45 사이의 숫자가 아니면 에러가 난다.", () => {
    expect(() => {
      validation.isValidRange(100);
    }).toThrow(MESSAGE.ERROR.NO_VALID_RANGE);
  });

  test("6자리의 숫자가 아니면 에러가 난다.", () => {
    expect(() => {
      validation.isValidInputCount([1, 1, 1, 1, 1, 1, 1, 1], 6);
    }).toThrow(MESSAGE.ERROR.NO_VALID_COUNT(6));
  });

  test("하나라도 숫자가 아닌 값이 들어오면 에러가 난다.", () => {
    expect(() => {
      validation.isValidNumber("1,2,3,4,5,f");
    }).toThrow(MESSAGE.ERROR.NO_NUMBER);
  });
});
