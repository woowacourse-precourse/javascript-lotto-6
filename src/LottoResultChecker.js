import { Console, Random } from "@woowacourse/mission-utils";

class LottoResultChecker {
  constructor() {}
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => Number(element));
  }

  async inputWinningLottoNum() {
    return await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
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

  getMatchingCounts(counts, bonus) {
    const matchingCounts = {
      three: 0,
      four: 0,
      five: 0,
      fiveAndBonus: 0,
      six: 0,
    };
    counts.map((count, i) => {
      if (count === 3) {
        matchingCounts.three += 1;
      }
      if (count === 4) {
        matchingCounts.four += 1;
      }
      if (count === 5 && bonus[i] === 0) {
        matchingCounts.five += 1;
      }
      if (count === 5 && bonus[i] === 1) {
        matchingCounts.fiveAndBonus += 1;
      }
      if (count === 6) {
        matchingCounts.six += 1;
      }
    });

    return matchingCounts;
  }
}

export default LottoResultChecker;
