import {Money} from "../src/domain/Money.js";

describe("MONEY 클래스 테스트", () => {
  test("성공적으로 Money 생성이 가능하다.", async () => {
    // given
    const input = 3000
    // when
    const money = new Money(input)
    // then
    expect(money.amount).toBe(3000)
  });

  test("숫자가 아닌 금액을 입력하여 Money 생성 시 예외처리한다.", () => {
    const input = '2장'
    try {
      new Money(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test("1000으로 나누어 떨어지지 않는 금액을 입력하여 Money 생성 시 예외처리한다.", () => {
    const input = 15500
    try {
      new Money(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test("0 이하인 금액을 입력하여 Money 생성 시 예외처리", () => {
    const input = -10000
    try {
      new Money(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test("1000 이하인 금액을 입력하여 Money 생성 시 예외처리", () => {
    const input = 100
    try {
      new Money(input);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });


  // TODO
  test("잔액에서 성공적으로 돈을 뺄 수 있다.", async () => {
    const money = new Money(5000)
    const amount = 1000
    money.subtract(amount)
    expect(money.amount).toBe(4000)

  });

});