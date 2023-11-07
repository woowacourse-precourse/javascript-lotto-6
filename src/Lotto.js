import { Random, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

function lottoNumbersGenerator(amount) {
  const randomNumbers = [];
  for (let i = 0; i < amount; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.push(numbers);
  }
  return randomNumbers;
}

function printBuyingLottoNumbers(numberList) {
  Console.print(`${numberList.length}개를 구매했습니다.`);
  for (let i = 0; i < numberList.length; i++) {
    Console.print(numberList[i].sort((a, b) => a - b));
  }
}

export default Lotto;
