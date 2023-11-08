import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/models/Lotto';
import TicketBooth from '../src/views/TicketBooth';

describe('TicketBooth 클래스 테스트', () => {
  const ticketBooth = new TicketBooth();

  test('당첨번호와 보너스번호가 반환되는지 테스트', async () => {
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

  test('당첨 번호의 숫자 범위가 1~45가 아니면 예외가 발생한다.', async () => {
    const mockWinningNumbers = '1,2,3,4,5,66';
    Console.readLineAsync = jest.fn().mockResolvedValueOnce(mockWinningNumbers);

    await expect(ticketBooth.receiveWinNumbers()).rejects.toThrow('[ERROR]');
  });

  test('보너스 번호의 숫자 범위가 1~45가 아니면 예외가 발생한다.', async () => {
    const mockWinningNumbers = '77';
    Console.readLineAsync = jest.fn().mockResolvedValueOnce(mockWinningNumbers);

    await expect(ticketBooth.receiveWinNumbers()).rejects.toThrow('[ERROR]');
  });
});
