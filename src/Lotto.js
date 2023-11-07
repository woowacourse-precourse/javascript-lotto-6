import { MissioinUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개 여야 합니다.");
    }

    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      }
    }

    //로또 번호 생성
    genearateNumbers() {
    for (let i = 0; i < numOfLottos; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.numbers.push(number);
      MissionUtils.Console.print(`[${number.join(",")}] `);
    }}
    //로또 번호 중복 방지
  }
}
// TODO: 추가 기능 구현
//보너스 번호 생성
class Bonus {
  bonus;

  constructor() {
    this.bonus;
    this.checkBonus();
  }

  checkBonus(numbers, pickNumber) {
    let matchWinningNumber = 0;

    pickNumber.forEach((number) => {
      if (numbers.includes(number)) {
        matchWinningNumber++;
      }
    });
  }
}

export { Lotto, Bonus };
