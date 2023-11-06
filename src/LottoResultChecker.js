import { Console, Random } from "@woowacourse/mission-utils";

class LottoResultChecker {
  constructor() {
    this.threeMatches = 0;
    this.fourMatches = 0;
    this.fiveMatches = 0;
    this.fiveAndBonusMatches = 0;
    this.sixMatches = 0;
  }
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => parseInt(element));
  }

  async inputWinningLottoNum() {
    return await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
  }
  compareInputNumAndRandomNum(inputArr, randomArrs) {
    const counts = [];

    for (const randomArr of randomArrs) {
      const matchingCount = inputArr.reduce((accumalator, inputValue) => {
        return accumalator + (randomArr.includes(inputValue) ? 1 : 0);
      }, 0);
      counts.push(matchingCount);
    }

    return counts;
  }

  countMatchingNumbers(counts) {
    for (const count of counts) {
      if (count === 3) {
        this.threeMatches += 1;
      }
      if (count === 4) {
        this.fourMatches += 1;
      }
      if (count === 5) {
        this.fiveMatches += 1;
      }
      if (count === 5 && count.includes(this.bonus)) {
        this.fiveAndBonusMatches += 1;
      }
      if (count === 6) {
        this.sixMatches += 1;
      }
    }
  }
  calculateTotalProfit() {
    const totalProfit =
      5000 * this.threeMatches +
      10000 * this.fourMatches +
      1500000 * this.fiveMatches +
      30000000 * this.fiveAndBonusMatches +
      2000000000 * this.sixMatches;
    return totalProfit;
  }
}

export default LottoResultChecker;
