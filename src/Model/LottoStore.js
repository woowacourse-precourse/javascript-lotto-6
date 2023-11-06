import Lotto from "../Lotto.js";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO_WINNING_AMOUNT } from "../constants/lotto.js";

class LottoStore {
  #lottos = [];

  #LottoMatchResult = {
    fifthPlace: 0,
    fourthPlace: 0,
    thirdPlace: 0,
    secondPlace: 0,
    firstPlace: 0,
    returnRate: 0,
  };

  constructor(purchaseQuantity) {
    const randomLottoNumbers = this.#createRandomLottoNumbers(purchaseQuantity);
    this.#createLottos(randomLottoNumbers);
  }

  #createRandomLottoNumbers(purchaseQuantity) {
    const randomLottoNumbers = Array.from({ length: purchaseQuantity }, () => this.#pickRandomNumbers());

    return randomLottoNumbers;
  }

  #pickRandomNumbers() {
    const RandomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return RandomNumbers;
  }

  #createLottos(randomLottoNumbers) {
    this.#lottos = randomLottoNumbers.map((randomNumbers) => new Lotto(randomNumbers));
  }

  getLottoNumbers() {
    const lottoNumbers = this.#lottos.map((lotto) => lotto.getNumbers());
    return lottoNumbers;
  }

  getLottoMatchResult({ lottoWinningNumbers, bonousNumber }) {
    const matchCounts = this.#matchLottoNumbers({ lottoWinningNumbers, bonousNumber });
    this.#calculateMatchResult(matchCounts);
    this.#calculateReturnRate();
    return this.#LottoMatchResult;
  }

  #matchLottoNumbers({ lottoWinningNumbers, bonousNumber }) {
    const matchCounts = this.#lottos.map((lotto) => lotto.matchNumbers({ lottoWinningNumbers, bonousNumber }));
    return matchCounts;
  }

  #calculateMatchResult(matchCounts) {
    matchCounts.map((matchCount) => {
      this.#compareMatchResult(matchCount);
    });
  }

  #compareMatchResult({ lottoWinningNumbersMatchCount, bonousNumberMatchCount }) {
    if (lottoWinningNumbersMatchCount === 3) this.#LottoMatchResult.fifthPlace++;
    if (lottoWinningNumbersMatchCount === 4) this.#LottoMatchResult.fourthPlace++;
    if (lottoWinningNumbersMatchCount === 5 && bonousNumberMatchCount === 0) this.#LottoMatchResult.thirdPlace++;
    if (lottoWinningNumbersMatchCount === 5 && bonousNumberMatchCount === 1) this.#LottoMatchResult.secondPlace++;
    if (lottoWinningNumbersMatchCount === 6) this.#LottoMatchResult.firstPlace++;
  }

  #calculateReturnRate() {
    const totalWinningAmount = this.#calculateTotalWinningAmount();
    const returnRate = (totalWinningAmount / (this.#lottos.length * 1000)) * 100;
    this.#LottoMatchResult.returnRate = returnRate;
  }

  #calculateTotalWinningAmount() {
    const totalWinningAmount =
      this.#LottoMatchResult.firstPlace * LOTTO_WINNING_AMOUNT.firstPlace +
      this.#LottoMatchResult.secondPlace * LOTTO_WINNING_AMOUNT.secondPlace +
      this.#LottoMatchResult.thirdPlace * LOTTO_WINNING_AMOUNT.thirdPlace +
      this.#LottoMatchResult.fourthPlace * LOTTO_WINNING_AMOUNT.fourthPlace +
      this.#LottoMatchResult.fifthPlace * LOTTO_WINNING_AMOUNT.fifthPlace;
    return totalWinningAmount;
  }
}

export default LottoStore;
