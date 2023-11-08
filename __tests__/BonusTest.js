import Bonus from "../src/module/model/Bonus.js";

describe('보너스 번호 클래스 테스트', () => {
  test('보너스 번호가 정수가 아니면 에러가 발생한다.', () => {
    expect(() => {
      new Bonus('a');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1 이상 45 이하의 정수가 아니면 에러가 발생한다.', () => {
    expect(() => {
      new Bonus(47);
    }).toThrow('[ERROR]');
  });
});
