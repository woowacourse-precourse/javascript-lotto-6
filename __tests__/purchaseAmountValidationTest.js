import { typeofNumber, amountUnit } from "../src/validator/purchaseAmountValidation"; 

describe("구입 금액 테스트", () => {
  test("로또 구입 금액이 숫자 타입이 아니면 예외가 발생한다.", () => {
    expect(() => {
      new typeofNumber('천원');
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new amountUnit('1500');
    }).toThrow("[ERROR]");
  });
});