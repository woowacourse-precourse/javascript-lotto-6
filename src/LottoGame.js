import { Console, Random } from '@woowacourse/mission-utils';

class LottoGame {
  money;

  numberOfLotto;

  constructor() {}

  async gameStart() {
    await this.getUserMoney();
  }

  async getUserMoney() {
    this.money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.numberOfLotto = Number(this.money) / 1000;
  }
}

export default LottoGame;
