import Input from "./Input";
import Lotto from "./Lotto";
import { pickUniqueRandomNumbers, printOutput } from "./utils";

class App {
  #RANK_INFO = {
    1: { STRING: "6개 일치 (2,000,000,000원)", PRICE: 2000000000 },
    2: { STRING: "5개 일치, 보너스 볼 일치 (30,000,000원)", PRICE: 30000000 },
    3: { STRING: "5개 일치 (1,500,000원)", PRICE: 1500000 },
    4: { STRING: "4개 일치 (50,000원)", PRICE: 50000 },
    5: { STRING: "3개 일치 (5,000원)", PRICE: 5000 },
  };

  constructor() {
    this.userInput = new Input();
  }

  async play() {
    await this.userInput.handleMoney();
    this.lottos = this.getLottoWithMoney();
    await this.userInput.handleLottoNumbers();
    await this.userInput.handleBonusNumber();

    const LOTTO_RANKS = this.calculLottoResult();
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

  calculLottoResult() {
    const RANKS_NUMBER = 5;
    const lottoRanks = Array.from({ length: RANKS_NUMBER + 1 }, () => 0);
    this.lottos.forEach((lotto) => {
      const RANK = lotto.getLottoResult({
        winNumbers: this.userInput.lottoNumbers,
        bonusNumber: this.userInput.bonusNumber,
      });
      if (RANK <= RANKS_NUMBER) lottoRanks[RANK] += 1;
    });

    return lottoRanks;
  }

  printLottoResult(lottoRanks) {
    printOutput(`\n당첨 통계\n---`);

    for (let rank = 5; rank > 0; rank -= 1) {
      const COUNT = lottoRanks[rank];
      const STRING = `${this.#RANK_INFO[rank].STRING} - ${COUNT}개`;
      printOutput(STRING);
    }
  }

  printRateOfIncome(lottoRanks) {
    let income = 0;
    lottoRanks.forEach((number, rank) => {
      if (rank !== 0) income += number * this.#RANK_INFO[rank].PRICE;
    });

    const RATE_INCOME = Math.round((income / this.userInput.money) * 1000) / 10;
    const STRING = `총 수익률은 ${RATE_INCOME}%입니다.`;
    printOutput(STRING);
  }
}

export default App;
