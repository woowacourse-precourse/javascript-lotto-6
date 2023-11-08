import LottoMachine from "../src/classes/LottoMachine";

describe("사용자 입력 값 테스트", () => {
  test("로또 구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine('string');
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1,000 단위 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoMachine(1100);
    }).toThrow("[ERROR]");
  });
});
