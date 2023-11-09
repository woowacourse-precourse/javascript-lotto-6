import Result from '../src/components/Result';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Result 클래스 테스트', () => {
  let result;

  beforeEach(() => {
    result = new Result();
  });

  test('output 메서드 테스트', () => {
    const logSpy = getLogSpy();

    const sampleResult = {
      3: { match: '3개 일치', reward: '5,000', count: 1 },
      4: { match: '4개 일치', reward: '50,000', count: 2 },
      5: { match: '5개 일치', reward: '1,500,000', count: 0 },
      '5B': {
        match: '5개 일치, 보너스 볼 일치',
        reward: '30,000,000',
        count: 0,
      },
      6: { match: '6개 일치', reward: '2,000,000,000', count: 0 },
    };
    const sampleMoney = 100000;

    result.output(sampleResult, sampleMoney);

    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 2개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 105.0%입니다.',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
