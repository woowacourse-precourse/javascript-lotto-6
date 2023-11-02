import { Console, Random } from '@woowacourse/mission-utils';
export const inputAmount = async () => {
  try {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputWinningNumbers = async () => {
  try {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return winningNumbers;
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputBonusNumber = async () => {
  try {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
  }
};
export const getRandomNumbers = async () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers;
};
