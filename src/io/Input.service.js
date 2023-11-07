import { Console } from '@woowacourse/mission-utils';

const BONUS_NUMBER_INPUT_MESSAGE = '\n보너스 번호를 입력해 주세요.\n';
const MONEY_INPUT_MESSAGE = '구입금액을 입력해 주세요.\n';
const WINNING_NUMBER_INPUT_MESSAGE = '\n당첨 번호를 입력해 주세요.\n';

export default class InputService {
  async readAmount() {
    return Console.readLineAsync(MONEY_INPUT_MESSAGE);
  }

  async readWinningNumbers() {
    return Console.readLineAsync(WINNING_NUMBER_INPUT_MESSAGE);
  }

  async readBonusNumber() {
    return Console.readLineAsync(BONUS_NUMBER_INPUT_MESSAGE);
  }
}
