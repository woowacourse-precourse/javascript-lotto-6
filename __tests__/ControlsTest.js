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

  test('잘못된 금액 입력 예외 처리', async () => {
    mockQuestions(['a']);
    await expect(async () => Controls.getBet()).rejects.toThrow('[ERROR]');
  });

  test.each([[['a']], [['-5000']], [['303030']]])(
    '잘못된 금액 입력 예외 처리',
    async (inputs) => {
      mockQuestions(inputs);
      await expect(async () => await Controls.getBet()).rejects.toThrow(
        '[ERROR]'
      );
    }
  );

  test.each([
    [['1,2,3,4,5', '45']],
    [['1,2,3,4,5,a', '45']],
    [['1,2,3,4,5,0', '45']],
  ])('잘못된 당첨 번호 예외 처리', async (inputs) => {
    mockQuestions(inputs);
    await expect(async () => await Controls.writeWin()).rejects.toThrow(
      '[ERROR]'
    );
  });

  test.each([
    [['1,2,3,4,5,6', '1']],
    [['1,2,3,4,5,6', '0']],
    [['1,2,3,4,5,6', '!']],
  ])('잘못된 보너스 번호 예외 처리', async (inputs) => {
    mockQuestions(inputs);
    await expect(async () => await Controls.writeWin()).rejects.toThrow(
      '[ERROR]'
    );
  });
});
