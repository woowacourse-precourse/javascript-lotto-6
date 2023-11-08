import { MissionUtils } from "@woowacourse/mission-utils";

class Inspector {
  // 구입금액
  containNumberOnly (number) {
    const regExpNumber = /^\d+$/g;
    if (number.match(regExpNumber)) {
      return true;
    } else {
      MissionUtils.Console.print("[ERROR] 로또 번호는 6개여야 합니다.") ;
    };
  }

  getIsThousand (number) {
    if (number % 1000 === 0) {
      return true;
    } else {
      MissionUtils.Console.print("[ERROR] 구입금액은 1000으로 나누어떨어져야 합니다.") ;
    }
  }

  // 당첨번호
  getSplited (string) {
    const splitedString = string.split(',').map((_, i, arr) => {
      return arr[i] = arr[i].trim();
    });
    return splitedString.length === 6 ? splitedString : false;
  }

  getIsValid (string) {
    if (string === '') {
      MissionUtils.Console.print("[ERROR] 로또 번호는 1,2,3,4,5,6 와 같은 구조로 이루어져야 합니다.");
    };
  }

  getIsInRange (number) {
    if(number < 1 || number > 45) {
      MissionUtils.Console.print('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    };
  }

  getIsAble (splited) {
    return splited.map((number) => {
      this.getIsValid(number.toString());
      this.containNumberOnly(number.toString());
      this.getIsInRange(number);
      return number;
    });
  }

  // 보너스번호
  getIsDuplicate (winnerLotto, bonus) {
    this.getIsInRange(bonus);
    const duplicatedCount = winnerLotto
      .filter(number => number === Number(bonus))
      .length;
    if (duplicatedCount !== 0) {
      MissionUtils.Console.print('[ERROR] 보너스 번호는 당첨 번호와 중독되지 않아야 합니다.');
    } else if (duplicatedCount === 0) {
      return true;
    }
  }
}

export default Inspector;