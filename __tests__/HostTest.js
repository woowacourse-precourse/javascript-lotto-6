import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Host from '../src/Host.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('로또 주관사 테스트', () => {
  it.each([[['99']], [['wootecho']]])(
    '당첨 번호가 1~45 사이의 정수가 아닐 경우, 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      // then
      await expect(Host.getBonusNumber(winningNumbers)).rejects.toThrow(
        '[ERROR] 1~45 사이의 정수만 입력 가능합니다.',
      );
    },
  );
});
