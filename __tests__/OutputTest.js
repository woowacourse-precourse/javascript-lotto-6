import { Console } from '@woowacourse/mission-utils';
import Output from '../src/view/Output.js';
import Lotto from '../src/Lotto.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('구입 내역 출력 테스트', () => {
  test('구입 내역이 하나일 때.', () => {
    const logSpy = getLogSpy();
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6])];
    const logs = ['1개를 구매했습니다.', '[1, 2, 3, 4, 5, 6]'];

    new Output().lottoTickets(tickets);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('구입 내역이 여러 개일 때.', () => {
    const logSpy = getLogSpy();
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([7, 8, 9, 10, 11, 12])];
    const logs = ['2개를 구매했습니다.', '[1, 2, 3, 4, 5, 6]', '[7, 8, 9, 10, 11, 12]'];

    new Output().lottoTickets(tickets);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
