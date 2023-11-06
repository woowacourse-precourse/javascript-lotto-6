import { Console } from '@woowacourse/mission-utils';

export default class View {
  #coin;

  constructor() {
    this.#coin = 0;
  }

  async inputCash() {
    const inputCash = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );

    try {
      if (this.#validate(inputCash)) {
        this.#coin = Number(inputCash / 1000);
      }
    } catch (error) {
      Console.print(error.message);
      return this.inputCash();
    }

    return this.#coin;
  }

  #validate(cash) {
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
