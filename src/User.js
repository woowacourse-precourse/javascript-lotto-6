import { Console } from '@woowacourse/mission-utils';

class User {
  #lottoCount;

  #winningNumbers;

  #bonusNumber;

  //   구입 금액
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

  async inputWinningNumbers() {
    const numbers = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );

    const splitNumbers = numbers.split(',').map(Number);
    if (!this.#numbersValidate(splitNumbers)) {
      Console.print('[ERROR] 당첨 번호가 잘못된 형식입니다.');
      return this.inputWinningNumbers();
    }

    this.#winningNumbers = splitNumbers;
  }

  #numbersValidate(numbers) {
    const numbersSet = new Set(numbers);
    return (
      numbers.length === 6 &&
      numbersSet.size === 6 &&
      numbers.every(
        (number) => Number.isInteger(number) && number > 0 && number <= 45,
      )
    );
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  async inputBonusNumber() {
    const number = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );

    const bonusNumber = Number(number);
    if (!this.#bonusNumberValidate(bonusNumber)) {
      Console.print('[ERROR] 보너스 번호가 잘못된 형식입니다.');
      return this.inputBonusNumber();
    }

    this.#bonusNumber = bonusNumber;
  }

  #bonusNumberValidate(number) {
    return (
      Number.isInteger(number) &&
      number > 0 &&
      number <= 45 &&
      !this.#winningNumbers.includes(number)
    );
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default User;
