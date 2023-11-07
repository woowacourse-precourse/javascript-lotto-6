import { Console } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js'

class UserInput {
  async validMoney() {
    return this.retryValid('구입금액을 입력해 주세요.\n', (input) => {
      const money = Number(input);
      if (isNaN(money)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (money <= 0) {
        throw new Error('[ERROR] 정수만 입력 가능합니다.');
      }
      if (money % 1000 !== 0) {
        throw new Error("[ERROR] 1장 당 1000원입니다.");
      }
      return money;
    });
  }

  async retryValid(prompt, validator) {
    while (true) {
      try {
        const input = await Console.readLineAsync(prompt);
        return validator(input);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getLottoNumber(prompt) {
    return this.retryValid(prompt, (input) => {
      const inputNumbers = input.split(',').map(Number);
      return new Lotto(inputNumbers);
    });
  }

  async getBonusNumber(lottonumber) {
    return this.retryValid('\n보너스 번호를 입력해주세요.\n', (input) => {
      const bonusNumber = Number(input);
      if (isNaN(bonusNumber)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (lottonumber.includes(bonusNumber)) {
        throw new Error('[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.');
      }
      if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('[ERROR] 1부터 45까지의 숫자만 입력 가능합니다');
      }
      return bonusNumber;
    });
  }
}

export default UserInput;