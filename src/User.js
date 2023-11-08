import { Console, Random } from '@woowacourse/mission-utils';

class User {
  #purchaseAmount;

  constructor(userInputPurchaseAmount) {
    this.#validate(userInputPurchaseAmount);
    this.#purchaseAmount = userInputPurchaseAmount / 1000;
    this.issuedLottoNumberList = this.issueLottoNumber();
    this.printissuedLotto();
  }

  #validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 구매 가능합니다.');
    }
    if (numbers < 1000 || numbers > 100000) {
      throw new Error(
        '[ERROR] 건전한 도박 문화를 위해 1 ~ 10장까지만 구매 가능합니다.',
      );
    }
  }

  issueLottoNumber() {
    const numberList = [];
    for (let i = 0; i < this.#purchaseAmount; i += 1) {
      numberList.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => {
          if (a > b) return 1;
          if (a === b) return 0;
          if (a < b) return -1;
        }),
      );
    }
    return numberList;
  }

  printissuedLotto() {
    Console.print(`${this.#purchaseAmount}개를 구매했습니다.`);
    this.issuedLottoNumberList.forEach((value) => {
      this.#output(value);
    });
  }

  #output(value) {
    let printValue = '[';
    for (let i = 0; i < 6; i += 1) {
      printValue += value[i];
      if (i !== 5) printValue += ', ';
    }
    printValue += ']';
    Console.print(printValue);
  }
}

export default User;
