import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";

class LottoGame {
  #lottoTickets;
  rank;

  constructor() {
    this.#lottoTickets = [];
    this.rank = [];
  }

  purchaseLotto = (money) => {
    const lottoCount = money / 1000;
    const lottoList = [];
    const lottoMachine = LottoMachine();
    let isLottoValid = false;
    let generateCount = 0;

    while (!isLottoValid) {
      const lottoArray = lottoMachine.generateLottoNumbers();

      try {
        const lotto = new Lotto(lottoMachine.sortLottoNumbers(lottoArray));
        lottoList.push(lotto.getNumbers());
        this.#lottoTickets.push(lotto.getNumbers());
        generateCount++;
      } catch (error) {
        console.error(error.message);
      }

      if (generateCount === lottoCount) {
        isLottoValid = true;
      }
    }
  };

  getLottoTickets = () => {
    return this.#lottoTickets;
  };

  compareLotto = (winningNumbers, bonusNumber) => {
    this.#lottoTickets.forEach((lotto) => {
      let equalCount = 0;
      let bonusCount = 0;
      lotto.forEach((number) => {
        if (winningNumbers.includes(number)) {
          equalCount++;
        }
      });
      if (lotto.includes(bonusNumber)) {
        bonusCount = 1;
      }
      this.rank.push({ equalCount, bonusCount });
    });
    return this.getRankByEqualCount();
  }

  getRankByEqualCount = () => {
    let rankCount = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
    for (let game of this.rank) {
      switch (game.equalCount) {
        case 6:
          rankCount["1"]++;
          break;
        case 5:
          if (game.bonusCount === 1) {
            rankCount["2"]++;
            break;
          }
          rankCount["3"]++;
        case 4:
          rankCount["4"]++;
          break;
        case 3:
          rankCount["5"]++;
          break;
      }
    }
    return rankCount;
  }


  calculateProfitRate = (rankCount, totalMoney) => {
    const prizeMoney = {
      "1": 2000000000,
      "2": 30000000,
      "3": 1500000,
      "4": 50000,
      "5": 5000
    };

    let totalIncome = 0;

    for (const rank in rankCount) {
      totalIncome += prizeMoney[rank] * rankCount[rank];
    }

    const profit = totalIncome - totalMoney;
    const profitRate = (profit / totalMoney) * 100;

    return Math.round(profitRate * 100) / 100;
  };

}

export default LottoGame;
