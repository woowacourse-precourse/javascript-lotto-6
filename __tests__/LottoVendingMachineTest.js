import { ERROR } from '../src/constant/index';
import LottoVendingMachine from '../src/LottoVendingMachine';

describe('LottoVendingMachine 클래스 테스트', () => {
  test('구입 금액 만큼 로또 발행 후 배열 반환', () => {
    expect(LottoVendingMachine.buyLottoTickets('2000')).toHaveLength(2);
  });

  test('구입 금액이 0보다 큰 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoVendingMachine.buyLottoTickets('-1');
    }).toThrow(ERROR.BUYING_PRICE.GREATER_THAN_ZERO);
  });

  test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoVendingMachine.buyLottoTickets('1234');
    }).toThrow(ERROR.BUYING_PRICE.UNIT);
  });
});
