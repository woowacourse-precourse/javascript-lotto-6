import Player from "../src/model/Player";

describe("플레이어 클래스 테스트", () => {
  test("로또 구입 금액이 숫자가 아니면 오류가 발생한다.", () => {
    expect(() => {
      new Player("a1000");
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 1000단위로 나누어 떨어지지 않으면 오류가 발생한다.", () => {
    expect(() => {
      new Player(5100);
    }).toThrow("[ERROR]");
  });
});
