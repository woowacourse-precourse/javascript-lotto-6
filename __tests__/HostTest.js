import { MissionUtils } from '@woowacourse/mission-utils';
import Host from '../src/Host.js';

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

describe('로또 주관사 테스트', () => {
  let host;
  beforeEach(() => {
    host = new Host();
  });
  it.each([[['99']], [['wootecho']]])(
    '보너스 번호가 1~45 사이의 정수가 아닐 경우, 예외 처리',
    async (input) => {
      // given
      const logSpy = getLogSpy();
      const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
      mockQuestions([...input, '7']);

      // when
      await host.getBonusNumber(WINNING_NUMBERS);

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('[ERROR] 1~45 사이의 정수만 입력 가능합니다.'),
      );
    },
  );
  it('보너스 번호가 로또 번호와 중복일 경우, 예외 처리', async () => {
    // give
    const logSpy = getLogSpy();
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    mockQuestions(['6', '7']);

    // when
    await host.getBonusNumber(WINNING_NUMBERS);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.',
      ),
    );
  });
});
