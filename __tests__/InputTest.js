/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import inputPrice from '../src/input/inputPrice';
import inputWinningNumbers from '../src/input/inputWinningNumbers';
import inputBonusNumber from '../src/input/inputBonusNumber';

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

describe('입력 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('1000원 단위의 숫자가 아니면 에러를 출력한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions([8400, 9000]);
    await inputPrice();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호 중 중복된 숫자가 있으면 에러를 출력한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,5', '1,2,3,4,5,6']);
    await inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 6개가 아니면 에러를 출력한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,6,7', '1,2,3,4,5,6']);
    await inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 숫자가 아니라면 에러를 출력한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,abc', '1,2,3,4,5,6']);
    await inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('당첨 번호가 1 ~ 45 사이의 숫자가 아니라면 에러를 출력한다', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['1,2,3,4,5,72', '1,2,3,4,5,6']);
    await inputWinningNumbers();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 당첨 번호와 중복된 숫자이면 에러를 출력한다.', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['7', '12']);
    await inputBonusNumber([7, 11, 23, 32, 38, 42]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('보너스 번호가 1 ~ 45 사이의 숫자가 아니라면 에러를 출력한다', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['72', '45']);
    await inputBonusNumber([7, 11, 23, 32, 38, 42]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});
