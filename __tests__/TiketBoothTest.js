import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/models/Lotto';
import TiketBooth from '../src/views/TicketBooth';

describe('TiketBooth 클래스 테스트', () => {
  test('당첨로또 객체가 반환되는지 테스트', async () => {
    const ticketBooth = new TiketBooth();
    const mockWinningNumbers = '1,2,3,4,5,6';
    const mockBonusNumber = '7';

    Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce(mockWinningNumbers)
      .mockResolvedValueOnce(mockBonusNumber);

    const result = await ticketBooth.getWinningLotto();
    expect(result.winnigNumbers).toEqual(
      new Lotto(mockWinningNumbers.split(',').map(Number)),
    );
    expect(result.bonusNumber).toBe(Number(mockBonusNumber));
  });
});
