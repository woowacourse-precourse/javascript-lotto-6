import { MissionUtils } from '@woowacourse/mission-utils';
import LottoInput from '../src/View/LottoInput';

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

// LottoPurchase 로직에 대한 테스트
describe('LottoInput.getLottoPurchase 테스트', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('사용자로부터 받은 올바른 금액을 정수로 반환한다.', async () => {
    // given
    mockQuestions(['3000']);

    // when
    const amount = await LottoInput.getLottoAmount();

    // then
    expect(amount).toBe(3000);
  });
});

// LottoPurchase 로직에 대한 테스트
describe('LottoInput.validateAmount', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('금액이 숫자가 아닌 경우에는 에러를 발생시켜야 한다.', () => {
    expect(() => {
      LottoInput.validateAmount(NaN);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
  });

  test('금액이 1000원 미만인 경우에는 에러를 발생시켜야 한다.', () => {
    expect(() => {
      LottoInput.validateAmount(500);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
  });

  test('금액이 1000원 단위가 아닌 경우에는 에러를 발생시켜야 한다.', () => {
    expect(() => {
      LottoInput.validateAmount(2500);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
  });

  test('올바른 금액이 입력된 경우에는 에러를 발생시키지 않는다.', () => {
    expect(() => {
      LottoInput.validateAmount(3000);
    }).not.toThrow();
  });
});
