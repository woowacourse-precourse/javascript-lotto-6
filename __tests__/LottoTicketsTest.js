import LottoTickets from "../src/LottoTickets.js";


describe("로또 구입 금액 테스트", () => {
  test("유효한 금액 입력", () => {
    expect(() => {
      new LottoTickets(2000);
    }).not.toThrow()
  });

  test("빈 문자열을 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new LottoTickets('');
    }).toThrow("[ERROR]");
  });

  test("숫자가 외의 문자 입력", () => {
    expect(() => {
      new LottoTickets(['asdf1']);
    }).toThrow("[ERROR]");
  });
  

  test("1000원 이하의 금액 입력", () => {
    expect(() => {
      new LottoTickets(930);
    }).toThrow("[ERROR]");
  });

  test("1000원 이상이나 1000원 단위가 아닌 금액 입력", () => {
    expect(() => {
      new LottoTickets(1500);
    }).toThrow("[ERROR]");
  });
})