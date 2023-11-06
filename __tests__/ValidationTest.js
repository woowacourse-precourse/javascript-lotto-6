import validation from "../src/utils/validation.js";

describe("Validation 함수 테스트", () => {
  test("같은 숫자가 있으면 오류가 난다.", () => {
    expect(() => {
      validation.hasSameNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자가 아니면 에러가 난다.", () => {
    expect(() => {
      validation.isValidRange(100);
    }).toThrow("[ERROR]");
  });

  test("6자리의 숫자가 아니면 에러가 난다.", () => {
    expect(() => {
      validation.isValidInputCount([1, 1, 1, 1, 1, 1, 1, 1], 6);
    }).toThrow("[ERROR]");
  });

  test("숫자가 아닌 값이 들어오면 에러가 난다.", () => {
    expect(() => {
      validation.isValidNumber("a", "b", "c", "d", "e", "f");
    }).toThrow("[ERROR]");
  });
});
