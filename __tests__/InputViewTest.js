import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../src/constant/index';
import InputView from '../src/View/InputView';

const mockReadLineAsync = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

mockReadLineAsync(['2000', '-1', '1234']);

describe('InputView 클래스 테스트', () => {
  test('유효한 입력을 받으면 숫자를 반환한다.', async () => {
    await expect(InputView.readBuyingPrice()).resolves.toBe(2000);
  });

  test('구입 금액이 0보다 큰 숫자가 아니면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('-1');
    await expect(InputView.readBuyingPrice()).rejects.toThrow(
      ERROR.NUMBERS_GREATER_THAN_ZERO
    );
  });

  test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', async () => {
    Console.readLineAsync.mockResolvedValue('1234');
    await expect(InputView.readBuyingPrice()).rejects.toThrow(
      ERROR.BUYING_PRICE_UNIT
    );
  });
});
