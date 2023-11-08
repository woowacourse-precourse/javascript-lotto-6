import { Random } from "@woowacourse/mission-utils"
import { Console } from "@woowacourse/mission-utils"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }

    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      }

      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 값이어야 합니다.");
      }
    });  
  }

  get validate() {
    return this.#validate;
  }

  static generateNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); 
  }

  static generateMultipleLottos(amount) {
    const numberOfLottos = Math.floor(amount / 1000);
    const lottos = [];
    for (let i = 0; i < numberOfLottos; i++) {
      lottos.push(new Lotto(this.generateNumbers()));
    }
    return lottos;
  }

  static printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });
  }
}

export default Lotto;
