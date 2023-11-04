import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getLottoPrice() {
    const lottoPrice = InputView.readLine('구입금액을 입력해 주세요.\n');
    return lottoPrice;
  },

  async getWinnigNumbers() {
    const winnigNumbers = InputView.readLine('당첨 번호를 입력해 주세요.\n');
    return winnigNumbers;
  },

  async getBonusNumber() {
    const bonusNumber = InputView.readLine('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  },

  async readLine(message) {
    try {
      const input = await Console.readLineAsync(message);
      return input;
    } catch (error) {
      Console.print(error);
      throw error;
    }
  },
};

export default InputView;
