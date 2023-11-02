import { Console } from "@woowacourse/mission-utils";

const Match = {
  'fifth': {
    cnt: 0,
    prize: 5000,
    match: ["3개"]
  },
  'fourth': {
    cnt: 0,
    prize: 50000,
    match: ["4개"]
  },
  'third': {
    cnt: 0,
    prize: 1500000,
    match: ["5개"]
  },
  'second': {
    cnt: 0,
    prize: 30000000,
    match: ["5개", "보너스 볼"]
  },
  'first': {
    cnt: 0,
    prize: 2000000000,
    match: ["6개"]
  },
};

class OutputView {
  static printLottoCnt(lottoCnt) {
    this.printNewLine();
    Console.print(`${lottoCnt}개를 구매했습니다.`);
  }

  static printNewLine() {
    Console.print("");
  }

  static printLottoNumbers(lotto) {
    Console.print(`[${lotto.join(", ")}]`);
  }

  // 4. 당첨 내역을 출력한다
  static printLottoResult(result, money) {
    this.printNewLine();
    Console.print('당첨 통계');
    Console.print('---');
    // 4-1. 당첨 통계를 출력한다
    Object.keys(result).forEach((key) => {
      Match[key].cnt = result[key];
      this.printEachResult(Match[key]);
    });
    this.calculateTotalPrize(result, money);
  }

  static printEachResult(match) {
    let result = '';
    const { cnt, prize, match: matchCnt } = match;
    
    for (let i = 0; i < matchCnt.length; i += 1) {
      result += `${matchCnt[i]} 일치`;
      if (i !== matchCnt.length - 1) {
        result += ', ';
      }
    }

    result += ` (${prize.toLocaleString()}원) - ${cnt}개`;
    Console.print(result);
  }

  static calculateTotalPrize(result, money) {
    const totalPrize = Object.keys(result).reduce((acc, key) => {
      const { cnt, prize } = Match[key];
      return acc + (cnt * prize);
    }, 0);
    this.calculateProfitRate(totalPrize, money);
  }

  // 4-2. 수익률을 출력한다.
  static calculateProfitRate(totalPrize, money) {
    let profit = totalPrize / money;
    profit *= 100;
    Console.print(`총 수익률은 ${profit.toFixed(1)}%입니다.`);
  }
}

export default OutputView;