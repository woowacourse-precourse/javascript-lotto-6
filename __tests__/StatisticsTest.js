import { Console } from '@woowacourse/mission-utils';
import Statistics from '../src/Statistics';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('당첨 통계 테스트', () => {
  test('5개 구입 0개 당첨', () => {
    const logSpy = getLogSpy();
    const statistics = new Statistics({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }, [
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
    ]);
    statistics.printStatistics();
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 0.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 구입 1등 1개 당첨', () => {
    const logSpy = getLogSpy();
    const statistics = new Statistics({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }, [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
    ]);
    statistics.printStatistics();
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40,000,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 구입 1등 1개 2등 1개 당첨', () => {
    const logSpy = getLogSpy();
    const statistics = new Statistics({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }, [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
    ]);
    statistics.printStatistics();
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40,600,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 구입 3등 1개 4등 1개개 당첨', () => {
    const logSpy = getLogSpy();
    const statistics = new Statistics({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }, [
      [1, 2, 3, 4, 5, 16],
      [1, 2, 3, 4, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
      [11, 12, 13, 14, 15, 16],
    ]);
    statistics.printStatistics();
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 31,000.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('5개 구입 5등 5개 당첨', () => {
    const logSpy = getLogSpy();
    const statistics = new Statistics({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 }, [
      [1, 2, 3, 14, 15, 16],
      [2, 3, 4, 14, 15, 16],
      [3, 4, 5, 14, 15, 16],
      [4, 5, 6, 14, 15, 16],
      [1, 4, 5, 14, 15, 16],
    ]);
    statistics.printStatistics();
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 5개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 500.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
