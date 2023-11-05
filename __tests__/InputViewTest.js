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
  '1,2,3,4,5,6',
  '1,2,3,4,5',
  '0,1,2,3,4,5',
  '1,1,2,5,7,27',
  '30',
  'a',
  '56',
  '1',
]);

describe('InputView 클래스 테스트', () => {
  describe('당첨 번호 입력 메서드 테스트', () => {
    test('유효한 입력을 받으면 당첨 번호를 반환한다.', async () => {
      await expect(InputView.readWinningNumbers()).resolves.toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS.LENGTH
      );
    });

    test('당첨 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS.RANGE
      );
    });

    test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', async () => {
      await expect(InputView.readWinningNumbers()).rejects.toThrow(
        ERROR.WINNING_NUMBERS.UNIQE
      );
    });
  });

  describe('보너스 번호 입력 메서드 테스트', () => {
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
});
