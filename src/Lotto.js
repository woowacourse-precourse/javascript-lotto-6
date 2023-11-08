import { MissionUtils } from "@woowacourse/mission-utils";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);

    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let n = 0; n < numbers.length; n++) {
      for (let m = n + 1; m < numbers.length; m++) {
        if (numbers[m] === numbers[n]) {
          throw new Error("[ERROR] 중복된 숫자를 입력하면 안됩니다.");
        }
      }
    }
  }

  //맞춘 개수 카운트
  checkWinningCount(winningNumList) {
    let coincideNumCount = 0;
    for (var i = 0; i < 6; i++) {
      winningNumList.forEach((num) => {
        if (num === String(this.#numbers[i])) {
          coincideNumCount += 1;
        }
      });
    }
    return coincideNumCount;
  }

  // 보너스 숫자 맞췄는지 여부 확인
  isBonusTrue(numbers, bonusNum) {
    if (numbers.includes(String(bonusNum))) {
      return true;
    }
    return false;
  }

  //맞춘 숫자에 따른 당첨 금액 계산
  calcGetMoney(coincideNumCount, bonusTrue) {
    if (coincideNumCount === 3) {
      return 5000;
    }

    if (coincideNumCount === 4) {
      return 50000;
    }

    if (coincideNumCount === 5) {
      if (!bonusTrue) return 1500000;
      return 30000000;
    }

    if (coincideNumCount === 6) {
      return 2000000000;
    }
    return 0;
  }
}

export default Lotto;
