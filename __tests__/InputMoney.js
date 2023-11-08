import InputMoney from '../src/components/InputMoney';
import { Console } from '@woowacourse/mission-utils';

describe('InputMoney 클래스 테스트', () => {
  let inputMoney;

  beforeEach(() => {
    inputMoney = new InputMoney();
  });

  test('유효한 구매 금액 입력', async () => {
    const mockConsoleReadLineAsync = jest.fn(() => Promise.resolve('8000'));
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const money = await inputMoney.input();

    expect(money).toEqual('8000');
    expect(mockConsoleReadLineAsync).toHaveBeenCalled();
  });

  test('유효하지 않은 구매 금액 입력 후 재시도', async () => {
    const mockConsoleReadLineAsync = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(''))
      .mockImplementationOnce(() => Promise.resolve('a'))
      .mockImplementationOnce(() => Promise.resolve('20'))
      .mockImplementationOnce(() => Promise.resolve('8,000'))
      .mockImplementationOnce(() => Promise.resolve('8000'));
    jest
      .spyOn(Console, 'readLineAsync')
      .mockImplementation(mockConsoleReadLineAsync);

    const money = await inputMoney.input();

    expect(money).toEqual('8000');
    expect(mockConsoleReadLineAsync).toHaveBeenCalledTimes(5);
  });
});
