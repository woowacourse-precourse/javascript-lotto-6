import { Console } from '@woowacourse/mission-utils';

class Inputs {
  async returnPurchaseAmount() {
    const purchaseAmount = (await this.getInput('구입금액을 입력해 주세요.')).trim();

    return purchaseAmount;
  }

  async getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }
}

export default Inputs;
