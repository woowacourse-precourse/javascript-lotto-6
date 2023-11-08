import Controls from '../src/Controls.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('컨트롤러 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([[['a', '1000']], [['-5000', '1000']], [['303030', '1000']]])(
    '잘못된 금액 입력 예외 처리',
    async (inputs) => {
      const logSpy = getLogSpy();
      mockQuestions(inputs);

      await (async () => await Controls.getBet())();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    }
  );

  test.each([
    [['1,2,3,4,5', '1,2,3,4,5,6', '45']],
    [['1,2,3,4,5,a', '1,2,3,4,5,6', '45']],
    [['1,2,3,4,5,0', '1,2,3,4,5,6', '45']],
  ])('잘못된 당첨 번호 예외 처리', async (inputs) => {
    const logSpy = getLogSpy();
    mockQuestions(inputs);

    await (async () => await Controls.writeWin())();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test.each([
    [['1,2,3,4,5,6', '1', '1,2,3,4,5,6', '7']],
    [['1,2,3,4,5,6', '0', '1,2,3,4,5,6', '7']],
    [['1,2,3,4,5,6', '!', '1,2,3,4,5,6', '7']],
  ])('잘못된 보너스 번호 예외 처리', async (inputs) => {
    const logSpy = getLogSpy();
    mockQuestions(inputs);

    await (async () => await Controls.writeWin())();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});
