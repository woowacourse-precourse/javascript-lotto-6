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

mockReadLineAsync([
  '2000',
  '-1',
  '1234',
  '1,2,3,4,5',
  '0,1,2,3,4,5',
  '1,1,2,5,7,27',
]);

describe('InputView 클래스 테스트', () => {
  describe('구입 금액 입력 메서드 테스트', () => {
    test('유효한 입력을 받으면 숫자를 반환한다.', async () => {
      await expect(InputView.readBuyingPrice()).resolves.toBe(2000);
    });

    test('구입 금액이 0보다 큰 숫자가 아니면 예외가 발생한다.', async () => {
      await expect(InputView.readBuyingPrice()).rejects.toThrow(
        ERROR.NUMBERS_GREATER_THAN_ZERO
      );
    });

    test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', async () => {
      await expect(InputView.readBuyingPrice()).rejects.toThrow(
        ERROR.BUYING_PRICE_UNIT
      );
    });
  });

  describe('당첨 번호 입력 메서드 테스트', () => {
    test('당첨 번호가 6개가 아니면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS_LENGTH
      );
    });

    test('당첨 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS_RANGE
      );
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS_UNIQE
      );
    });
  });
});
