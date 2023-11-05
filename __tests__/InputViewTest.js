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

mockReadLineAsync(['30', 'a', '56', '1']);

describe('InputView 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('유효한 입력을 받으면 숫자를 반환한다.', async () => {
    await expect(InputView.readBonusNumber(winningNumbers)).resolves.toBe(30);
  });

  test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', async () => {
    await expect(InputView.readBonusNumber(winningNumbers)).rejects.toThrow(
      ERROR.BONUS_NUMBER.NUMBER
    );
  });

  test('보너스 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.', async () => {
    await expect(InputView.readBonusNumber(winningNumbers)).rejects.toThrow(
      ERROR.BONUS_NUMBER.RANGE
    );
  });

  test('보너스 번호가 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.', async () => {
    await expect(InputView.readBonusNumber(winningNumbers)).rejects.toThrow(
      ERROR.BONUS_NUMBER.UNIQE
    );
  });
});
