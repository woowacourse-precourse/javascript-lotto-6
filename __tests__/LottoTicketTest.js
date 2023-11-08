import LottoTickets from "../src/LottoTickets";

describe("LottoTicketsTest", () => {
  test("로또 번호는 오름차순으로 정리된다", () => {
    const lottoTickets = new LottoTickets();
    expect(() =>
      lottoTickets
        .generateLottoTickets([1, 35, 2, 45, 24, 27])
        .toBe([1, 2, 24, 27, 35, 45])
    );
  });
});
