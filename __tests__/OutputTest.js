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

describe('당첨 내역 출력 테스트', () => {
  test('로또가 1등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 2등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 3등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 4등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 5등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 1등, 2등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 1, 3: 0, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 1등, 3등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 0, 3: 1, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 1등, 4등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 1, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 1등, 5등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 1 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 1등, 2등, 3등, 4등, 5등에 당첨됐을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또가 당첨되지 않았을 때', () => {
    const logSpy = getLogSpy();
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    new Output().totalWinningResult(results);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
