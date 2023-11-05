import LottoMachine from "../src/classes/LottoMachine";

describe("로또 머신 클래스 테스트", () => {
  test("로또 구입 금액에 맞는 로또 티켓 수량이 나온다.", () => {
    expect(new LottoMachine(4000).getLotto().length).toBe(4);
  });
});
