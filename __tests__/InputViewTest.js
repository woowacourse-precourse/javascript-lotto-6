import InputView from '../src/view/InputView';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('InputView 클래스 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('유효하지 않은 로또 금액을 입력 시 에러', async () => {
    Console.readLineAsync.mockResolvedValue('abc');
    try {
      await InputView.getLottoNumbers();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 유효한 값이 아닙니다.");
    }
  });

  test('유효하지 않은 당첨 번호를 입력 시 에러', async () => {
    Console.readLineAsync.mockResolvedValue('1,2,3,4');
    try {
      await InputView.getWinningNumbers();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 유효한 값이 아닙니다.");
    }
  });

  test('유효하지 않은 보너스 번호를 입력 시 에러', async () => {
    Console.readLineAsync.mockResolvedValue('50');
    try {
      await InputView.getBonusNumbers();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 유효한 값이 아닙니다.");
    }
  });
});
