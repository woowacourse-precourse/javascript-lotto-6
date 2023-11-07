import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { LOTTO } from "../utils/Constant.js";
import { validatePriceInput, validateWinLottoInput } from "../utils/vaildateInput.js";

class Model {
  #lotties = [];
  #prizeCategories = {
    equal3: { count: 0, price: LOTTO.fifthPrice },
    equal4: { count: 0, price: LOTTO.fourthPrice },
    equal5: { count: 0, price: LOTTO.thirdPrice },
    equal5WithBonus: { count: 0, price: LOTTO.secondPrice },
    equal6: { count: 0, price: LOTTO.firstPrice },
  };

  get getLotties() {
    return this.#lotties;
  }

  get getPrizeCategories() {
    return this.#prizeCategories;
  }

  makeLotto(priceInput) {
    const price = validatePriceInput(priceInput);

    while (this.#lotties.length < price) {
      const lottoRandomNum = Random.pickUniqueNumbersInRange(LOTTO.startNum, LOTTO.endNum, LOTTO.length).sort((a, b) => a - b);
      const lotto = new Lotto(lottoRandomNum);
      this.#lotties.push(lotto);
    }
  }

  compareWinLotto(winNumsInput, winBonusInput) {
    const winLottoNums = validateWinLottoInput(winNumsInput, winBonusInput);
    let equalToWinLotties = [];

    this.#lotties.forEach((lotto) => {
      const equalToWinLotto = this.checkEqualWinNum(lotto, winLottoNums);
      equalToWinLotties.push(equalToWinLotto);
    });

    equalToWinLotties = equalToWinLotties.filter((winLotto) => winLotto.length >= LOTTO.minimumWinLength);
    this.makePrizeCategory(equalToWinLotties, winBonusInput);
  }

  checkEqualWinNum(lotto, winLottoNums) {
    let equalToWinLotto = [];

    winLottoNums.forEach((winNum) => {
      lotto.lottoNumbers.includes(winNum) ? equalToWinLotto.push(winNum) : "";
    });

    return equalToWinLotto;
  }

  makePrizeCategory(equalToWinLotties, winBonusInput) {
    equalToWinLotties.forEach((winLotto) => {
      this.#prizeCategories[`equal${winLotto.length === LOTTO.length && winLotto.includes(Number(winBonusInput)) ? "5WithBonus" : winLotto.length}`].count += 1;
    });
  }

  calculateProfit() {
    const purchasePrice = this.#lotties.length * LOTTO.price;
    let total = 0;

    for (const prize of Object.values(this.#prizeCategories)) {
      const prizePrice = prize.price.replace(/[^0-9]/g, "");
      total += prize.count * Number(prizePrice);
    }

    const profitRate = (total / purchasePrice) * 100;

    return profitRate.toFixed(1);
  }
}

export default Model;
