import { MissionUtils } from '@woowacourse/mission-utils';
import WinningLotto from '../src/WinningLotto';

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

const runWinningNumbersExpection = async (input) => {
  const logSpy = getLogSpy();
  const INPUT_TO_END = ['1,2,3,4,5,6'];
  mockQuestions([input, ...INPUT_TO_END]);

  const winningLotto = new WinningLotto();
  await winningLotto.inputWinningNumbers();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

const runBonusNumberExpection = async (input) => {
  const logSpy = getLogSpy();
  const INPUT_TO_END = ['45'];
  mockQuestions([input, ...INPUT_TO_END]);

  const winningLotto = new WinningLotto();
  await winningLotto.inputBonusNumber();

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
};

describe('당첨 로또 에러 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('당첨 로또 길이가 6 미만인 경우', async () => {
    await runWinningNumbersExpection('1,2,3,4,5');
  });
  test('당첨 로또 길이가 6 초과인 경우', async () => {
    await runWinningNumbersExpection('1,2,3,4,5,6,7');
  });
  test('당첨 로또에 정수가 아닌 값이 들어 있는 경우', async () => {
    await runWinningNumbersExpection('1.1,2,3,4,5');
  });
  test('당첨 로또에 문자열이 들어 있는 경우', async () => {
    await runWinningNumbersExpection('1,2,3,4,5a');
  });
  test('당첨 로또에 1-45 사이가 아닌 값이 들어 간 경우', async () => {
    await runWinningNumbersExpection('1,2,3,4,50');
  });
  test('당첨 로또에 중복된 값이 들어 간 경우', async () => {
    await runWinningNumbersExpection('1,1,2,3,4,5');
  });
  test('보너스 번호가 숫자가 아닌 경우', async () => {
    await runBonusNumberExpection('1a');
  });
  test('보너스 번호가 정수가 아닌 경우', async () => {
    await runBonusNumberExpection('1.1');
  });
  test('보너스 번호가 1-45가 아닌 경우', async () => {
    await runBonusNumberExpection('46');
  });
  test('보너스 번호가 이미 당첨 로또 번호에 존재하는 경우', async () => {
    const logSpy = getLogSpy();
    const INPUT_TO_END = ['7'];
    mockQuestions(['1,2,3,4,5,6', '6', ...INPUT_TO_END]);

    const winningLotto = new WinningLotto();
    await winningLotto.inputWinningNumbers();
    await winningLotto.inputBonusNumber();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });
});

describe('당첨 로또 정상값 테스트', () => {
  test('[1,2,3,4,5,6] 7', async () => {
    mockQuestions(['1,2,3,4,5,6', '7']);
    const winningLotto = new WinningLotto();
    await winningLotto.inputWinningNumbers();
    await winningLotto.inputBonusNumber();
    const result = await winningLotto.getWinningLottoInfo();
    expect(result).toEqual({ winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 });
  });
  test('[11,12,13,14,15,16] 17', async () => {
    mockQuestions(['11,12,13,14,15,16', '17']);
    const winningLotto = new WinningLotto();
    await winningLotto.inputWinningNumbers();
    await winningLotto.inputBonusNumber();
    const result = await winningLotto.getWinningLottoInfo();
    expect(result).toEqual({ winningNumbers: [11, 12, 13, 14, 15, 16], bonusNumber: 17 });
  });
  test('[1,12,13,14,15,16] 45', async () => {
    mockQuestions(['1,12,13,14,15,16', '45']);
    const winningLotto = new WinningLotto();
    await winningLotto.inputWinningNumbers();
    await winningLotto.inputBonusNumber();
    const result = await winningLotto.getWinningLottoInfo();
    expect(result).toEqual({ winningNumbers: [1, 12, 13, 14, 15, 16], bonusNumber: 45 });
  });
});
