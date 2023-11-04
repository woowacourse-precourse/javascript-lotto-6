import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { validatePriceInput, validateWinLottoInput } from "../utils/vaildateInput.js";

class Model {
  #lotties;
  #prizeCategories;

  constructor() {
    this.#lotties = [];
    this.#prizeCategories = {
      equal3: { count: 0, price: "5,000" },
      equal4: { count: 0, price: "50,000" },
      equal5: { count: 0, price: "1,500,000" },
      equal5WithBonus: { count: 0, price: "30,000,000" },
      equal6: { count: 0, price: "2,000,000,000" },
    };
  }

  get getLotties() {
    return this.#lotties;
  }

  get getPrizeCategories() {
    return this.#prizeCategories;
  }

  makeLotto(priceInput) {
    const price = validatePriceInput(priceInput);

    while (this.#lotties.length < price) {
      const lottoRandomNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
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

    equalToWinLotties = equalToWinLotties.filter((winLotto) => winLotto.length > 2);
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
      this.#prizeCategories[`equal${winLotto.length === 6 && winLotto.includes(Number(winBonusInput)) ? "5WithBonus" : winLotto.length}`].count += 1;
    });
  }
}

export default Model;
