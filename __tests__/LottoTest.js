import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test(`로또 번호에 ${Lotto.NUMBER_MIN}부터 ${Lotto.NUMBER_MAX}사이 이외의 숫자가 있으면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자 이외의 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["pobi", 2, "woni", 5, "jun", 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또를 1장도 사지 못할 금액으로 구매하면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.buyLottoTickets(Lotto.UNIT - 1000);
    }).toThrow("[ERROR]");
  });
});
