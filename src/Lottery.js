import { Random, Console } from '@woowacourse/mission-utils';

// 추후 리팩토링하기

const PAYMENTCOMMENT = '구입금액을 입력해 주세요.';
const WINNINGNUMBERSCOMMENT = '당첨 번호를 입력해 주세요.';
const BONUSNUMBERCOMMENT = '보너스 번호를 입력해 주세요.';
const ERRORPREFIX = '[ERROR]';

class Lottery {
  #payMoney;

  #winningNumbers;

  #bonusNumer;

  constructor() {
    this.#payMoney = 0;
    this.#winningNumbers = [];
    this.#bonusNumer = 0;
  }

  commomValidator(input) {
    if (!Number.isInteger(this.#payMoney)) throw Error();
    if (this.#payMoney <= 0) throw Error();
  }

  async readPayMoney() {
    this.#payMoney = await Console.readLineAsync(PAYMENTCOMMENT);
    if (Number.isNaN(this.#payMoney)) throw Error();
    this.commomValidator(this.#payMoney);
    if (this.#payMoney % 1000 !== 0) throw Error();

    this.pay();
  }

  async readWinningNumbers() {
    this.#winningNumbers = await Console.readLineAsync(WINNINGNUMBERSCOMMENT);
  }

  async readBonusNumber() {
    this.#bonusNumer = await Console.readLineAsync(BONUSNUMBERCOMMENT);
  }

  pay() {
    // TODO
  }
}
