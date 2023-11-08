import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../src/Model/LottoMachine';
import LottoTicket from '../src/Model/LottoTicket';

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

describe('LottoMachine.calculatePrize 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 티켓과 당첨 번호를 기반으로 상금을 계산해야 한다.', () => {
    // given
    const MOCK_LOTTO_NUMBERS = [7, 8, 9, 10, 11, 12];
    const MOCK_LOTTO_TICKETS = {
      getLottoNumbers: jest.fn().mockReturnValue(MOCK_LOTTO_NUMBERS),
    };

    const LOTTO_TICKETS = [MOCK_LOTTO_TICKETS];
    const WINNING_NUMBERS = [7, 8, 9, 10, 11, 12];
    const BONUS_NUMBER = 13;

    // when
    const PRIZE_LIST = LottoMachine.calculatePrize(
      LOTTO_TICKETS,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    );

    // then
    expect(PRIZE_LIST['6'].countMatch).toBe(1);
  });
});
