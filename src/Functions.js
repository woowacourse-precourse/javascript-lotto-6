import { Console, Random } from "@woowacourse/mission-utils";

const ERROR_MESSAGE = "[ERROR] 금액이 1000원 단위가 아닙니다.";
const BUY_MESSAGE = "개를 구매했습니다.";

function calculateProfitMargin(totalPrize, purchaseAmount) {
  return (totalPrize / purchaseAmount) * 100;
}

class Functions {
  lottoRandomNumber() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return Array.from(randomNumbers);
  }

  validateAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  printNumberLottos(amount) {
    const numberOfLottos = amount / 1000;
    Console.print(`${numberOfLottos}` + BUY_MESSAGE);
  }

  buyLottoByAmount(amount) {
    this.validateAmount(amount);
    this.printNumberLottos(amount);
    const lottoList = [];
    for (let i = 0; i < amount / 1000; i++) {
      const random = this.lottoRandomNumber();
      random.sort((a, b) => a - b);
      lottoList.push(random);
      Console.print(`[${random.join(", ")}]`);
    }
    Console.print("");
    return lottoList;
  }

  calculateTotalPrize(prizeTable, resultCounts) {
    return prizeTable.reduce((total, prizeInfo) => {
      return total + prizeInfo.prize * (resultCounts[prizeInfo.count] || 0);
    }, 0);
  }
  ProfitMargin(profitMargin) {
    const roundedProfitMargin = (Math.round(profitMargin * 10) / 10).toFixed(1);
    return `${roundedProfitMargin.toLocaleString()}%`;
  }
  generatePrizeStrings(prizeTable, resultCounts) {
    return prizeTable.map((prizeInfo) => {
      const count = `${prizeInfo.count}개${prizeInfo.bonus ? " 일치, 보너스 볼" : ""} 일치`;
      const totalPrize = prizeInfo.prize;
      return `${count} (${totalPrize.toLocaleString()}원) - ${resultCounts[prizeInfo.count] || 0}개`;
    });
  }

  displayResult(results, purchaseAmount) {
    const prizeTable = [
      { count: 3, prize: 5000 },
      { count: 4, prize: 50000 },
      { count: 5, prize: 1500000 },
      { count: 5, bonus: true, prize: 30000000 },
      { count: 6, prize: 2000000000 },
    ];

    const resultCounts = results.reduce((counts, result) => {
      counts[result] = (counts[result] || 0) + 1;
      return counts;
    }, {});

    const prizeStrings = this.generatePrizeStrings(prizeTable, resultCounts);
    const totalPrize = this.calculateTotalPrize(prizeTable, resultCounts);
    const profitMargin = calculateProfitMargin(totalPrize, purchaseAmount);
    const profitMarginString = `총 수익률은 ${this.ProfitMargin(profitMargin)}입니다.`;
    return { prizeStrings, profitMarginString };
  }

  getMatchCount(lottoNumbers, winningNumbers, bonusNumber) {
    const matchNumber = lottoNumbers.filter((number) =>
      winningNumbers.includes(number)
    );
    return matchNumber.length;
  }

  calculateResult(matchCount, bonus) {
    switch (matchCount) {
      case 6:
        return bonus ? 5 : 6;
      case 5:
        return 5;
      case 4:
        return 4;
      case 3:
        return 3;
      default:
        return 0;
    }
  }

  calculateResults(lottoNumbers, winningNumbers, bonusNumber) {
    const results = [];

    for (const lottoNumber of lottoNumbers) {
      const matchCount = this.getMatchCount(lottoNumber,winningNumbers,bonusNumber);
      const hasBonus = matchCount === 5 && lottoNumber.includes(bonusNumber);
      results.push(this.calculateResult(matchCount, hasBonus));
    }
    return results;
  }

  lottoStart(lottoNumbers, winningNumbers, bonusNumber, amount) {
    Console.print("당첨 통계");
    Console.print("---");
    const results = this.calculateResults(lottoNumbers,winningNumbers,bonusNumber
    );
    const result = this.displayResult(results, amount);
    Console.print(result.prizeStrings.join("\n"));
    Console.print(result.profitMarginString);
  }
}

export default Functions;
