import { inputMoney, buyLotto } from '../src/buyLotto';
import { MissionUtils } from '@woowacourse/mission-utils';
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또구매 테스트', () => {
  test('1000원 단위로 입력 테스트', async () => {
    mockQuestions(['1000']);

    const result = await inputMoney();

    expect(result).toBe('1000');
  });

  test('로또는 1000원당 한장 발급됩니다.', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
    ]);
    const amount = 3000;
    await buyLotto(amount);

    const logs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[1, 2, 3, 4, 5, 6]',
      '[6, 7, 8, 9, 10, 11]',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('구매한 로또번호는 오름차순 정렬 되어야 합니다', async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [6, 5, 4, 3, 2, 1],
    ]);

    await buyLotto(2000);

    const logs = ['2개를 구매했습니다.', '[8, 21, 23, 41, 42, 43]', '[1, 2, 3, 4, 5, 6]'];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
