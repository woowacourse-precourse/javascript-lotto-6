import Input from '../src/views/Input.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('입력 클래스 테스트', () => {
  test.each([[['1000j']], [['1004']], [['-1000']]])(
    '유저의 로또 구매금액 입력 예외 테스트',
    async (inputs) => {
      mockQuestions(inputs);

      await expect(Input.readPurchaseAmout()).rejects.toThrow('[ERROR]');
    }
  );

  test.each([[['1,2,3,4,5,6,7']], [['1,2,3,4,5,6,a']], [['1,2,3,4,5,77']]])(
    '유저의 로또 숫자 입력 예외 테스트',
    async (inputs) => {
      mockQuestions(inputs);

      await expect(Input.readLottoNumber()).rejects.toThrow('[ERROR]');
    }
  );

  test.each([[['1000j']], [['77']]])(
    '유저의 보너스 숫자 입력 예외 테스트',
    async (inputs) => {
      mockQuestions(inputs);

      await expect(Input.readBonusNumber()).rejects.toThrow('[ERROR]');
    }
  );
});
