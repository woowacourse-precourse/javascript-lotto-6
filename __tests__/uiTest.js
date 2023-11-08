import { MissionUtils } from '@woowacourse/mission-utils';

import { inputMoney } from '../src/ui/input';

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

describe('ui 테스트', () => {
  test('돈 입력 테스트 (숫자 확인)', async () => {
    const logSpy = getLogSpy();

    const INPUT = ['1000a', '1000'];

    mockQuestions(INPUT);

    // when
    await inputMoney();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('돈 입력 테스트 (0원 확인)', async () => {
    const logSpy = getLogSpy();

    const INPUT = ['0', '1000'];

    mockQuestions(INPUT);

    // when
    await inputMoney();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('돈 입력 테스트 (1000원 단위 확인)', async () => {
    const logSpy = getLogSpy();

    const INPUT = ['1234', '1000'];

    mockQuestions(INPUT);

    // when
    await inputMoney();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});
