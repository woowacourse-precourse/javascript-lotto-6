import LottoTickets from "../../src/collection/LottoTickets.js";

describe('로또 티켓 콜렉션 클래스 테스트', () => {
  test('로또를 6개 발행하면 6개의 로또가 발행됩니다.', () => {
    // given
    const issueCount = 6;
    const answer = 6;

    // when
    const lottoTickets = new LottoTickets(issueCount);

    expect(lottoTickets.getLottoTickets().length).toEqual(answer);
  });
});
