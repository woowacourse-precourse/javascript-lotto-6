import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

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

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const INPUT_NUMBERS_TO_END = ['5000'];

  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();
  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('로또 구입 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('10장 구입 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['10000']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = ['10개를 구매했습니다.'];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('100장 구입 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['100000']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = ['100개를 구매했습니다.'];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('2800원 입력 후 , 5000원 입력', async () => {
    await runException('2800');
  });

  test('문자 입력 후, 5000원 입력', async () => {
    await runException('12abc');
  });

  test('0원, 5000원 입력', async () => {
    await runException('0');
  });
});
