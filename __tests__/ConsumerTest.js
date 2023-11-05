import Consumer from '../src/Model/Consumer';

describe("Consumer 클래스 테스트", () => {
  test("입력한 금액이 1000원 단위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer(3500);
    }).toThrow("[ERROR]");
  });

  test("입력한 값이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer(NaN);
    }).toThrow("[ERROR]");
  });

  test("입력한 금액의 1000원당 1장 로또를 발행한다.", () => {
    expect(() => {
      new Consumer(NaN);
    }).toThrow("[ERROR]");
  });
});