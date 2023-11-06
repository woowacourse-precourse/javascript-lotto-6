import { Console } from '@woowacourse/mission-utils';
import { Input } from './interface/Input.js';
import { Validator } from './validation/Validator.js';

export class User {
  #money;
  #winningNumbers;
  #bonusNumber;

  getMoney() {
    return this.#money;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  async inputMoney() {
    const money = await Input.readInteger('구입금액을 입력해 주세요.');

    await this.#setMoney(money);
  }

  async inputWinningNumbers() {
    const numbers = await Input.readMultipleValues('당첨 번호를 입력해 주세요.');

    await this.#setWinningNumbers(numbers);
  }

  async inputBonusNumber() {
    const number = await Input.readMultipleValues('보너스 번호를 입력해 주세요.');

    await this.#setBonusNumber(number);
  }

  async #setMoney(money) {
    try {
      Validator.Money.validate(money);

      this.#money = money;
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.inputMoney();
    }
  }

  async #setWinningNumbers(numbers) {
    try {
      Validator.Lotto.validate(numbers);

      this.#winningNumbers = numbers;
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.inputWinningNumbers();
    }
  }

  async #setBonusNumber(number) {
    try {
      if (this.#winningNumbers.contain(number)) throw new Error('error');

      this.#bonusNumber = number;
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.inputBonusNumber();
    }
  }
}
