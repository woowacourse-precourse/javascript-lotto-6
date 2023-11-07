import { MissionUtils } from '@woowacourse/mission-utils';
import LottoPurchase from '../src/LottoPurchase.js';

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

descirbe('LottoPurchase.getLottoPurchase 테스트', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('사용자로부터 받은 올바른 금액을 정수로 반환한다.', async () => {
    // given
    mockQuestions(['3000']);

    // when
    const amount = await LottoPurchase.getLottoAmount();

    // then
    expect(amount).toBe(3000);
  });
});
