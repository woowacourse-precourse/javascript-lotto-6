import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  q2;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  //맞춘 개수 카운트
  checkWinningCount(numbers, winningNumList) {
    coincideNumCount = 0;
    for (let i = 0; i < 6; i++) {
      winningNumList.forEach((num) => {
        if (Number(num) === numbers[i]) {
          coincideNumCount++;
        }
      });
    }
    return coincideNumCount;
  }
  // 보너스 숫자 맞췄는지 여부 확인
  isBonusTrue(numbers, bonusNum) {
    if (numbers.include(bonusNum)) {
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
