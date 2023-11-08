import { Console } from '@woowacourse/mission-utils';

class User {
  #lottoCount;

  async inputMoney() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.#moneyValidate(money)) {
      Console.print('[ERROR] 로또 구입 금액이 잘못된 형식입니다.');
      return this.inputMoney();
    }

    this.#lottoCount = Math.floor(parseInt(money, 10) / 1000);
  }

  #moneyValidate(money) {
    const regex = /^[0-9]*$/;
    return regex.test(money) && money % 1000 === 0;
  }

  get lottoCount() {
    return this.#lottoCount;
  }
}

export default User;
