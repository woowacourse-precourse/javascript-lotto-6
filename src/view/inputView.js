import { Console } from '@woowacourse/mission-utils';
import { START_NUMBER, END_NUMBER, SIZE } from '../constants/index.js';

export default class View {
  #coin;
  #bonus;

  constructor() {
    this.#coin = 0;
    this.#bonus = 0;
  }

  async coin() {
    const cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    try {
      if (this.#validateCash(cash)) {
        this.#coin = Number(cash / 1000);
      }
    } catch (error) {
      Console.print(error.message);
      return this.coin();
    }

    return this.#coin;
  }

  async winningNumber() {
    const winningNumber = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );

    try {
      return this.#validateWinningNumber(winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.winningNumber();
    }
  }

  async bonus(winningNumber) {
    const bonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    try {
      if (this.#validateBonus(bonus, winningNumber)) {
        this.#bonus = Number(bonus);
      }
    } catch (error) {
      Console.print(error.message);
      return this.bonus(winningNumber);
    }

    return this.#bonus;
  }

  #validateBonus(bonus, winningNumber) {
    // 숫자인지
    if (isNaN(bonus)) {
      throw new Error(`[ERROR] : 숫자가 아닙니다.\n`);
    }
    // 자연수인지
    if (!isNaturalNumber(bonus)) {
      throw new Error(`[ERROR] : 0 이상의 자연수를 입력하세요.\n`);
    }
    // 범위가 올바른지
    if (bonus < 1 || bonus > 45) {
      throw new Error(`[ERROR] : 1부터 45 사이의 수를 입력하세요\n`);
    }

    if (winningNumber.includes(Number(bonus))) {
      throw new Error(`[ERROR] : 당첨금액과 중복되지 않는 수를 입력해주세요\n`);
    }

    return bonus;
  }

  #validateWinningNumber(winningNumber) {
    // 쉼표로 나누어지는지
    if (!winningNumber.includes(',')) {
      throw new Error(`[ERROR] : 쉼표로 구분하여 입력하세요\n`);
    }

    const numbers = winningNumber
      .split(',')
      .map((number) => Number(number.trim()));

    // 총 6개를 입력한것이 맞는지
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] : 6개의 수를 입력하세요\n`);
    }

    if (numbers.some(isNaN)) {
      throw new Error(`[ERROR] : 1부터 45까지의 숫자를 입력하세요\n`);
    }

    if (numbers.some((num) => !isNaturalNumber(num))) {
      throw new Error(`[ERROR] : 1부터 45까지의 자연수를 입력하세요\n`);
    }

    if (new Set(numbers).size !== 6) {
      // 중복이 없는지
      throw new Error(`[ERROR] : 숫자는 중복될 수 없습니다.\n`);
    }

    // 범위가 올바른지
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(`[ERROR] : 1부터 45 사이의 수를 입력하세요\n`);
    }

    return numbers;
  }

  #validateCash(cash) {
    // 숫자인지
    if (isNaN(cash)) {
      throw new Error(`[ERROR] : 숫자가 아닙니다.\n`);
    }
    // 자연수인지
    if (!isNaturalNumber(cash)) {
      throw new Error(`[ERROR] : 0 이상의 자연수를 입력하세요.\n`);
    }
    // 1회 제한금액
    if (isLimitedCash(cash))
      throw new Error(`[ERROR] : 1회 제한금액을 초과한 금액입니다.\n`);
    // 금액이 천원 단위인지
    if (!isThousandsDigit(cash))
      throw new Error(`[ERROR] : 구매 금액은 1,000원 단위입니다.\n`);

    return cash;
  }
}

// 자연수 확인
function isNaturalNumber(number) {
  number = Number(number);
  return Number.isInteger(number) && number > 0;
}

// 제한금액 준수
function isLimitedCash(cash) {
  cash = Number(cash);
  if (cash > 100000) {
    return true;
  }
  return false;
}

function isThousandsDigit(cash) {
  cash = Number(cash);
  if (cash % 1000 === 0) return true;
  return false;
}
