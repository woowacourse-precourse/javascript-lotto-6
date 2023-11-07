import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('로또 구매 금액(purchaseAmount) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = [''];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.setPurchaseAmount()).rejects.toThrow(
      '[ERROR] 입력 값이 없습니다. 값을 입력해주세요',
    );
  });

  test.each([[['3abc']], [[' 32000']], [['..10000']]])(
    'test2: 입력 값에 숫자가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.setPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또 구매 금액에는 숫자만 입력할 수 있습니다.',
      );
    },
  );

  test.each([[['1000000']], [['900']], [['0']]])(
    'test3: 입력 금액이 가능 범위를 초과한 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.setPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또는 최소 1,000원부터 최대 100,000원까지 구매할 수 있습니다.',
      );
    },
  );

  test.each([[['11100']], [['1234']]])(
    'test4: 입력 금액이 1,000원 단위가 아닌 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.setPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.',
      );
    },
  );
});
