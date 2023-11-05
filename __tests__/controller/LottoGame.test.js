import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGame from "../../src/controller/LottoGame"

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('로또 게임 컨트롤 클래스 테스트.', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구입 금액이 숫자가 아닌 경우 에러를 발생시킵니다.', async () => {
    // given
    const input = ['공습경보', '1000'];
    mockQuestions(input);
    const logSpy = getLogSpy();

    const lottoGame = new LottoGame();

    // when & then
    try {
      await lottoGame.inputPurchaseAmount();
    } catch (error) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    }
  });

  test('구입 금액이 천원 단위가 아닌 경우 에러를 발생시킵니다.', async () => {
    // given
    const input = ['1001', '1000'];
    mockQuestions(input);
    const logSpy = getLogSpy();

    const lottoGame = new LottoGame();

    // when & then
    try {
      await lottoGame.inputPurchaseAmount();
    } catch (error) {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    }
  });

  test('당첨번호 입력에서 숫자가 아닌 입력이 들어오면 에러를 일으킵니다.', async () => {
    // given
    const invalidInput = '1,2,3,4,5,공습경보';
    const validInput = '1,2,3,4,5,6';
    const logSpy = getLogSpy();

    mockQuestions([invalidInput, validInput]);

    // when & then
    const lottoGame = new LottoGame();
    await lottoGame.inputWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
