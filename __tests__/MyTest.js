import { Console, Random } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  // Console.readLineAsync mocking
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('입력 예외 처리 테스트', () => {
  test.each([[['14002']], [['1200']]])(
    '구입 금액이 1,000원 단위가 아닐 경우 예외가 발생한다.',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.getInputPrice()).rejects.toThrow('[ERROR]');
    },
  );

  test('당첨 번호 입력이 올바르지 않을 경우 예외가 발생한다.', () => {
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.getInputWinnigNuber()).rejects.toThrow('[ERROR]');
    };
  });
});

describe('출력 예외 처리 테스트', () => {
  test('예제 입력값에 따라 생성된 로또의 수량이 옳지 않으면 예외가 발생한다.', () => {
    
  });
});

describe('로또 당첨 관련 테스트', () => {
  test('당첨 내역 및 수익률 테스트', () => {});
});
