import LottoVendingMachine from '../src/LottoVendingMachine';
import Lotto from '../src/Lotto';

describe('LottoVendingMachine 클래스 테스트', () => {
  test('구입 금액 만큼 로또 발행 후 배열 반환', async () => {
    await expect(
      LottoVendingMachine.buyLottoTickets(2000)
    ).resolves.toHaveLength(2);
  });
});
