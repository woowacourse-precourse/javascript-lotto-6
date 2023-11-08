import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/models/Lotto';
import TiketBooth from '../src/views/TicketBooth';

describe('TiketBooth 클래스 테스트', () => {
  test('당첨번호와 보너스번호가 반환되는지 테스트', async () => {
    const ticketBooth = new TiketBooth();
    const mockWinningNumbers = '1,2,3,4,5,6';
    const mockBonusNumber = '7';

    Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce(mockWinningNumbers)
      .mockResolvedValueOnce(mockBonusNumber);

    await ticketBooth.receiveWinNumbers();
    await ticketBooth.receiveBonusNumber();

    expect(ticketBooth.getWinNumbers()).toEqual([
      new Lotto(mockWinningNumbers.split(',').map(Number)),
      Number(mockBonusNumber),
    ]);
  });
});
