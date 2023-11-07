import LottoShop from '../src/LottoShop';

describe('LottoShop 테스트', () => {
  test('구입 금액만큼 로또를 발행한다.', () => {
    const lottoTickets = LottoShop.issueLottoTickets(8000);
    expect(lottoTickets).toHaveLength(8);
  });
});
