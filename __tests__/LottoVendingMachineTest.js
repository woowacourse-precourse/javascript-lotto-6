import { ERROR } from '../src/constant/index';
import LottoVendingMachine from '../src/LottoVendingMachine';

describe('LottoVendingMachine 클래스 테스트', () => {
  test('구입 금액 만큼 로또 발행 후 배열 반환', () => {
    expect(LottoVendingMachine.buyLottoTickets('2000')).toHaveLength(2);
  });
});
