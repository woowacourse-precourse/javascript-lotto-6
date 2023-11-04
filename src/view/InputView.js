import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getLottoPrice() {
    const lottoPrice = this.#readLine('구입금액을 입력해 주세요.\n');
    return lottoPrice;
  }

  async getWinnigNumbers() {
    const winnigNumbers = this.#readLine('당첨 번호를 입력해 주세요.\n');
    return winnigNumbers;
  }

  async getBonusNumber() {
    const bonusNumber = this.#readLine('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  }

  async #readLine(message) {
    try {
      const input = await Console.readLineAsync(message);
      return input;
    } catch (error) {
      Console.print(error);
      throw error;
    }
  }
}

export default InputView;
