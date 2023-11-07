import Validation from "../src/classes/validation.js";

describe("구매 금액 입력 유효성 검사 테스트", () => {
  test("구매 금액이 공백이면 에러발생시키는 테스트", () => {
    const input = "";

    expect(() => Validation.userMoney(input)).toThrow("[ERROR]");
  });

  test("구매 금액중 문자가 들어있으면 에러발생시키는 테스트", () => {
    const input = "1000j";

    expect(() => Validation.userMoney(input)).toThrow("[ERROR]");
  });

  test("구매금액이 1000원 아래면 에러발생시키는 테스트", () => {
    const input = "800";

    expect(() => Validation.userMoney(input)).toThrow("[ERROR]");
  });

  test("구매금액을 1000원으로 나눈 값에 나머지가 있으면 에러발생시키는 테스트", () => {
    const input = "1500";

    expect(() => Validation.userMoney(input)).toThrow("[ERROR]");
  });
});

describe("당첨 번호 입력 유효성 검사 테스트", () => {
  test("당첨 번호가 6자리 아닌 경우 에러를 발생시키는 테스트", () => {
    const input = "1,2,3,4,5";

    expect(() => Validation.winningNumber(input)).toThrow("[ERROR]");
  });

  test("당첨 번호가 공백인 경우 에러를 발생시키는 테스트", () => {
    const input = "";

    expect(() => Validation.winningNumber(input)).toThrow("[ERROR]");
  });

  test("당첨 번호가 문자인 경우 에러를 발생시키는 테스트", () => {
    const input = "1,2,3,4,j,5";

    expect(() => Validation.winningNumber(input)).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 내의 숫자가 아닌 경우 에러를 발생시키는 테스트", () => {
    const input = "1,2,3,4,50,5";

    expect(() => Validation.winningNumber(input)).toThrow("[ERROR]");
  });
});
