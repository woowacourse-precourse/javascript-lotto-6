import Inputview from "../src/views/Inputview.js";

describe("유저 입력 클래스 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아니면 예외가 발생한다", () => {
    const randomNumber = Math.floor(Math.random() * 100) * 1000 + 500;
    expect(() => {
        const inputview = new Inputview();
        inputview.validateAmount(randomNumber);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1000원 이상이 아니면 예외가 발생한다", () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    expect(() => {
        const inputview = new Inputview();
        inputview.validateAmount(randomNumber);
    }).toThrow("[ERROR]");
  });
});
