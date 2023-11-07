import MoneyChanger from "../src/module/controller/MoneyChanger.js";

describe('돈 환전기 클래스 테스트', () => {
  test('입력한 돈이 1000으로 나누어 떨어지지 않으면 오류가 발생한다.', () => {
    expect(() => {
      new MoneyChanger(3591);
    }).toThrow('[ERROR]');
  });
});