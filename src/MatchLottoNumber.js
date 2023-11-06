import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
class BuyLotto {
  #sameNumberCount = 0;

  constructor(numbers, bonusNumbers, lotto) {
    this.#compare(numbers, bonusNumbers, lotto);
  }

  #compare(numbers, bonusNumbers, lotto) {
    numbers.forEach((number) => {
      if (lotto.includes(number)) {
        this.#sameNumberCount++;
      }
    });
    return this.#ranking(bonusNumbers, lotto);
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

const matchLottoNumber = new BuyLotto(
  [1, 2, 3, 4, 5, 6],
  7,
  [1, 2, 3, 4, 5, 7]
);

export default BuyLotto;
