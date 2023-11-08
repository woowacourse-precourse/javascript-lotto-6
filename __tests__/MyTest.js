import Exception from "../src/Exception.js";

describe("로또 구매 테스트", () => {
  
  test("로또 구입 개수를 숫자가 아닌 값을 입력했을 때", () => {
    const valid = new Exception();
    expect(() => valid.validateBuyLotto("a")).toThrow("숫자를");
  });

  test("로또 구입 금액을 입력하지 않았을 때", () => {
    const valid = new Exception();
    
    expect(() => valid.validateBuyLotto("").toThrow("구입할"));
  });

  test("로또 보너스 번호를 입력하지 않았을 때", () => {
    const valid = new Exception();

    expect(() => valid.validBonusInput().toThrow("보너스 번호"));
  });

  test("로또 보너스 번호에 숫자가 아닌 값을 입력했을 때", () => {
    const valid = new Exception();

    expect(() => valid.validBonusInput().toThrow("숫자를"));
  });

  test("로또 보너스 번호를 당첨 번호와 중복되게 입력했을 때", () => {
    const valid = new Exception();

    expect(() => valid.validBonusInput().toThrow("당첨 번호와 중복된"));
  });
});