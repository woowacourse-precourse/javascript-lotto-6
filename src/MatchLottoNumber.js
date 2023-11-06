import { MissionUtils } from "@woowacourse/mission-utils";

class MatchLottoNumber {
  #sameNumberCount = 0;
  #rank;

  constructor(numbers, bonusNumbers, lotto) {
    this.#compare(numbers, bonusNumbers, lotto);
  }

  get getRank() {
    return this.#rank;
  }

  #compare(numbers, bonusNumbers, lotto) {
    numbers.forEach((number) => {
      if (lotto.includes(number)) {
        this.#sameNumberCount++;
      }
    });
    this.#rank = this.#ranking(bonusNumbers, lotto);
  }

  #ranking(bonusNumbers, lotto) {
    switch (this.#sameNumberCount) {
      case 6:
        return 1;
      case 5:
        if (lotto.includes(bonusNumbers)) {
          return 2;
        }
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }
}

const matchLottoNumber = new MatchLottoNumber(
  [1, 2, 3, 4, 5, 6],
  7,
  [1, 2, 3, 4, 5, 7]
);
console.log(matchLottoNumber.getRank);

export default MatchLottoNumber;
