import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#bonusNumberValidate(bonusNumber);
    // 질문사항

    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    // 질문: 왜 split 으로 하면 통과가 안됨? 제스트 떄문에 인풋이 스트링으로 안보여서임?

    let numbersArray = [];

    if (typeof numbers === "string") {
      numbersArray = numbers.split(",").map(Number);
    } else {
      numbersArray = numbers;
    }

    const numbersSet = new Set(numbersArray);

    if (numbersArray.length !== numbersSet.size) {
      throw new Error("[ERROR] 로또 번호에서 중복된 숫자를 입력하지 마세요.");
    }

    if (numbersArray.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbersArray.forEach((number) => {
      if (number < 0 || number > 45 || Number.isInteger(number) === false) {
        throw new Error("[ERROR] 로또 번호는 0 이상 정수여야합니다.");
      }
    });
  }

  #bonusNumberValidate(bonusNumber) {
    if (
      Number(bonusNumber) == "NaN" ||
      Number(bonusNumber) < 0 ||
      Number(bonusNumber) > 45 ||
      Number.isInteger(Number(bonusNumber)) === false
    ) {
      throw new Error("[ERROR] 로또 번호는 0 이상 45이하  정수여야합니다.");
    }
  }

  checkMatch(purchasedLotto, lottoNumber) {
    let count = 0;

    purchasedLotto.forEach((number) => {
      if (lottoNumber.includes(number) === true) {
        count++;
      }
    });

    return count;
  }

  compare(purchasedLottos, lottoNumber, bonusNumber) {
    let threeMatch = 0;
    let fourMatch = 0;
    let fiveMatch = 0;
    let fiveMatchPlusBonus = 0;
    let sixMatch = 0;

    purchasedLottos.forEach((purchasedLotto) => {
      let matchResult = this.checkMatch(purchasedLotto, lottoNumber);

      if (matchResult === 3) {
        threeMatch++;
      } else if (matchResult === 4) {
        fourMatch++;
      } else if (matchResult === 5) {
        fiveMatch++;
      } else if (matchResult === 5 && purchasedLotto.includes(bonusNumber)) {
        fiveMatchPlusBonus++;
      } else if (matchResult === 6) {
        sixMatch++;
      }
    });

    let revenue = (
      ((threeMatch * 5 +
        fourMatch * 50 +
        fiveMatch * 1500 +
        fiveMatchPlusBonus * 30000 +
        sixMatch * 2000000) *
        100) /
      purchasedLottos.length
    ).toFixed(1);

    MissionUtils.Console.print(
      `
당첨 통계
---
3개 일치 (5,000원) - ${threeMatch}개
4개 일치 (50,000원) - ${fourMatch}개
5개 일치 (1,500,000원) - ${fiveMatch}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchPlusBonus}개
6개 일치 (2,000,000,000원) - ${sixMatch}개
총 수익률은 ${revenue}%입니다.
    `,
    );
  }
}

export default Lotto;
