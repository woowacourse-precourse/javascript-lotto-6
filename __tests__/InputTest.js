import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';
import ERROR from '../src/constants/Error';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('로또 금액 입력값 테스트(getLottoPrice)', () => {
  test('금액이 1000원 단위가 아닐 경우 에러 반환', async () => {
    const input = ['2500'];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(
      ERROR.purchaseThousands
    );
  });

  test('금액이 1000원보다 적을 경우 에러 반환', async () => {
    const input = ['0'];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(
      ERROR.purchaseMinNumber
    );
  });

  test('금액이 숫자가 아닐 경우 에러 반환', async () => {
    const input = ['a', ''];

    mockQuestions(input);

    await expect(Input.getLottoPrice()).rejects.toThrow(ERROR.purchaseIsNumber);
  });
});
