import Validate from "../src/Validate.js";

describe("유효성 검사 클래스 테스트", () => {
  test("구입 금액에 문자가 들어갈 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "a";
      const validate = new Validate();
      validate.priceValidate(input);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000원으로 나누어 떨어지지 않는 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = 1234;
      const validate = new Validate();
      validate.priceValidate(input);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 숫자가 아닌 값이 들어갈 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "1,2,3,4,5,a";
      const validate = new Validate();
      validate.prizeValidate(input);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호 갯수가 6개가 아닌 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "1,2,3,4,5,6,7";
      const validate = new Validate();
      validate.prizeValidate(input);
    }).toThrow("[ERROR]");
  });

  test("입력 받은 당첨 번호가 1부터 45 사이의 숫자가 아닐 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "1,2,3,4,5,6,49";
      const validate = new Validate();
      validate.prizeValidate(input);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아닐 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "bonus";
      const validate = new Validate();
      validate.bonusValidate(input);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아닐 경우 에러가 발생한다.", () => {
    expect(() => {
      const input = "0";
      const validate = new Validate();
      validate.bonusValidate(input);
    }).toThrow("[ERROR]");
  });
});
