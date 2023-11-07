import Input from "./Input";
import Lotto from "./Lotto";
import { pickUniqueRandomNumbers, printOutput } from "./utils";

class App {
  constructor() {
    this.userInput = new Input();
  }

  async play() {
    await this.userInput.handleMoney();
    this.Lottos = this.getLottoWithMoney();
    await this.userInput.handleLottoNumbers();
    await this.userInput.handleBonusNumber();

    const LOTTO_RANKS = this.calculLottoResult({
      lottos: this.Lottos,
      winNumbers: this.userInput.lottoNumbers,
      bonusNumber: this.userInput.bonusNumber,
    });
    this.printLottoResult(LOTTO_RANKS);
    this.printRateOfIncome(LOTTO_RANKS);
  }

  getRandomSixNumbers() {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 45;
    const COUNT = 6;
    return pickUniqueRandomNumbers(MIN_NUMBER, MAX_NUMBER, COUNT).sort(
      (a, b) => a - b
    );
  }

  getLottoWithMoney() {
    const LOTTO_PIRCE = 1000;
    const MONEY = this.userInput.money;
    const NUMBER_OF_LOTTO = Math.floor(MONEY / LOTTO_PIRCE);
    this.#printLottoCount(NUMBER_OF_LOTTO);

    return Array.from({ length: NUMBER_OF_LOTTO }, () => {
      const RANDOM_NUMBERS = this.getRandomSixNumbers();
      this.#printLottoNumbers(RANDOM_NUMBERS);
      return new Lotto(RANDOM_NUMBERS);
    });
  }

  #printLottoCount(count) {
    printOutput(`${count}개를 구매했습니다.`);
  }

  #printLottoNumbers(lottoNumbers) {
    printOutput(`[${lottoNumbers.join(", ")}]`);
  }

  calculLottoResult({ lottos, winNumbers, bonusNumber }) {
    const RANKS_NUMBER = 5;
    const lottoRanks = Array.from({ length: RANKS_NUMBER + 1 }, () => 0);
    lottos.forEach((lotto) => {
      const RANK = lotto.getLottoResult({ winNumbers, bonusNumber });
      if (RANK <= RANKS_NUMBER) lottoRanks[RANK] += 1;
    });
    return lottoRanks;
  }

  printLottoResult(lottoRanks) {
    printOutput(`당첨 통계\n---`);
    const RANK_STRINGS = {
      1: "6개 일치 (2,000,000,000원)",
      2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      3: "5개 일치 (1,500,000원)",
      4: "4개 일치 (50,000원)",
      5: "3개 일치 (5,000원)",
    };
    lottoRanks.forEach((count, rank) => {
      const STRING = `${RANK_STRINGS[rank]} - ${count}개`;
      if (rank !== 0) printOutput(STRING);
    });
  }

  printRateOfIncome(lottoRanks) {
    const RANK_MONEY = [null, 2000000000, 30000000, 1500000, 50000, 5000];
    let income = 0;
    lottoRanks.forEach((number, rank) => {
      if (rank !== 0) income += number * RANK_MONEY[rank];
    });
    const RATE_INCOME = Math.round((income / this.userInput.money) * 1000) / 10;
    const STRING = `총 수익률은 ${RATE_INCOME}%입니다.`;
    printOutput(STRING);
  }
}

export default App;
