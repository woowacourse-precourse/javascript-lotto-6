import Player from "../src/model/Player";

describe("플레이어 클래스 테스트", () => {
  test("로또 구입 금액이 1000단위로 나누어 떨어지지 않으면 오류가 발생한다.", () => {
    expect(() => {
      new Player(5100);
    }).toThrow("[ERROR]");
  });

  test("Player 생성시 금액 만큼 로또를 구입하는지 test", () => {
    const player = new Player(5000);
    expect(player.playerLottos.length).toBe(5);
  });
});
