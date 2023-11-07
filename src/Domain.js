import Validator from "./Validator.js";
import View from "./View.js";
import Lotto from "./Lotto.js";
import Utils from "./Utils.js";

export default class Domain {
  #winnings;
  #bonus;
  #lottos;
  #lotteryResults;
  #view;
  #validator;

  constructor() {
    this.#winnings = [];
    this.#bonus = 0;
    this.#lottos = [];
    this.#lotteryResults = [0, 0, 0, 0, 0];
    this.#view = new View();
    this.#validator = new Validator();
  }

  purchaseLottos(purchaseCost) {
    if (this.#validator.isEmpty(purchaseCost)) return this.#view.errorNoInput();
    if (this.#validator.isCorrectCost(purchaseCost))
      return this.#view.errorPurchaseCost();

    this.#lottos = Array(Number(purchaseCost) / 1000)
      .fill("")
      .map(() => new Lotto(Utils.genRandomLottoNumber()));

    return this.#view.announcePurchasing(
      Number(purchaseCost) / 1000,
      this.#lottos
    );
  }

  setWinnings(winnings) {
    if (this.#validator.isEmpty(winnings)) return this.#view.errorNoInput();
    if (this.#validator.isWhiteSpace(winnings))
      return this.#view.errorWhiteSpace();
    if (!this.#validator.isRepeat(winnings))
      return this.#view.errorWinningsRepeat();
    if (this.#validator.isCorrectWinnings(winnings))
      return this.#view.errorWinnings();

    this.#winnings = winnings.split(",").map((element) => Number(element));
    return true;
  }

  setBonus(bonus) {
    if (this.#validator.isEmpty(bonus)) return this.#view.errorNoInput();
    if (this.#winnings.includes(Number(bonus)))
      return this.#view.errorBonusRepeat();
    if (this.#validator.isCorrectBonus(bonus)) return this.#view.errorBonus();

    this.#bonus = Number(bonus);
    return true;
  }

  setLotteryResult() {
    this.#lottos.forEach((lotto) => {
      const matching = lotto.checkLotto(this.#winnings, this.#bonus);
      if (matching !== "") {
        this.#lotteryResults[matching] += 1;
      }
    });
  }

  announceLottery() {
    this.setLotteryResult();
    return this.#view.announceLottery(this.#lotteryResults);
  }

  announceProfit() {
    return this.#view.announceProfit(this.#lotteryResults, this.#lottos.length);
  }

  get getWinnings() {
    return this.#winnings;
  }

  get getBonus() {
    return this.#bonus;
  }

  get getLottos() {
    if (this.#lottos.length !== 0) {
      return this.#lottos;
    }
  }

  get getLotteryResults() {
    return this.#lotteryResults;
  }
}
