import { MissionUtils } from '@woowacourse/mission-utils';
import Money from '../src/Money';

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

  const INPUT_NUMBERS_TO_END = ['1000'];

  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const money = new Money();
  await money.inputMoney();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('금액 투입 에러 테스트', () => {
  test('문자열이 포함 된 경우', async () => {
    await runException('1000j');
  });
  test('1000의 배수가 아닌 경우 ', async () => {
    await runException('3500');
  });
  test('1000 보다 작은 숫자인 경우', async () => {
    await runException('0');
  });
});

describe('금액 투입 정상값 테스트', () => {
  test('1000원 투입 로또 1장 구매', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['1000']);

    // when
    const money = new Money();
    await money.inputMoney();
    await money.printNumberOfLotto();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1개를 구매했습니다.'));
  });
  test('3000원 투입 로또 3장 구매', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['3000']);

    // when
    const money = new Money();
    await money.inputMoney();
    await money.printNumberOfLotto();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3개를 구매했습니다.'));
  });
  test('10000원 투입 로또 10장 구매', async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(['10000']);

    // when
    const money = new Money();
    await money.inputMoney();
    await money.printNumberOfLotto();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('10개를 구매했습니다.'));
  });
});
