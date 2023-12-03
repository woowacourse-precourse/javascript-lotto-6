import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getPurchaseAmount() {
    const paid = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return Number(paid);
  },
  async getWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const cleanedNumbers = numbers.split(',').map((number) => Number(number));
    return cleanedNumbers;
  },
  async getBonusNumber(winningNumbers) {
    const number =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 로또 번호와 중복된 수는 입력 불가합니다.');
    }
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 1-45 사이의 정수만 입력 가능합니다.');
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error('[ERROR] 1-45 사이의 정수만 입력 가능합니다.');
    }
    return number;
  },
};
export default InputView;
