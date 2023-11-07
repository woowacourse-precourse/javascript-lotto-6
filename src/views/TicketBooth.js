import { Console } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';
import REGEXS from '../constants/regexs.js';

class TiketBooth {
  async takePaymentForTickets() {
    const money = await Console.readLineAsync('구입 금액을 입력해주세요.\n');
    this.validateNumber(money);
    this.validateMoney(money);

    return Number(money) / 1000;
  }

  async getWinningLotto() {
    const winnigNumbers = await this.receiveWinningNumbers();
    const bonusNumber = await this.receiveBonusNumber();

    return { winnigNumbers, bonusNumber };
  }

  async receiveWinningNumbers() {
    const winnigInput =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.validateWinningNumbers(winnigInput.split(','));
    const numbers = winnigInput.split(',').map(Number);

    return new Lotto(numbers);
  }

  async receiveBonusNumber() {
    const bonusInput =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    this.validateNumber(bonusInput);

    return Number(bonusInput);
  }

  validateNumber(number) {
    if (!REGEXS.NUMBER.test(number)) {
      throw new Error('[ERROR] 입력값은 숫자만 가능합니다.');
    }
  }

  validateMoney(money) {
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구매는 1,000원 단위로만 가능합니다.');
    }
  }

  validateWinningNumbers(winnigNumbers) {
    winnigNumbers.forEach((number) => {
      this.validateNumber(number);
    });
  }
}

export default TiketBooth;
