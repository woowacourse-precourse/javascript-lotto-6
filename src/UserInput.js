import { Random, Console } from '@woowacourse/mission-utils';

class Input {
  async userPurchase() {
    try {
      Console.print('구입금액을 입력해 주세요');
      const input = await Console.readLineAsync('');
      return input;
    } catch (error) {
      throw error;
    }
  }

  async userNumber() {
    try {
      Console.print('당첨 번호를 입력해 주세요.');
      const input = await Console.readLineAsync('');
      return input;
    } catch (error) {
      throw error;
    }
  }

  async userBonusNumber() {
    try {
      Console.print('보너스 번호를 입력해 주세요.')
      const input = await Console.readLineAsync('');
      return input;
    } catch (error) {
      throw error;
    }
  }

}

export default Input;