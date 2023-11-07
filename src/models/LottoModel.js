import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
import { PRICE } from "../constants.js";

class LottoModel {
  winningTickets;
  lottoWinCounts;

  constructor() {
    this.winningTickets = [];
    this.lottoWinCounts = {
      3: { count: 0 },
      4: { count: 0 },
      5: { count: 0 },
      bonus: { count: 0 },
      6: { count: 0 },
    };
  }

  setLotteryTickets(lotteryTicketsCount) {
    const lotteryTickets = [];
    for (let i = 0; i < lotteryTicketsCount; i++) {
      let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotteryTickets.push(lottoNumbers);
    }

    return lotteryTickets;
  }

  checkWinningNums(lotteryTickets, winningNums) {
    for (let i = 0; i < lotteryTickets.length; i++) {
      const lotteryTicket = lotteryTickets[i];
      const winningNumsInTicket = lotteryTicket.filter((ele) => winningNums.includes(ele));

      if (winningNumsInTicket.length < 3) continue;

      this.winningTickets.push({ count: winningNumsInTicket.length, lotteryTicket: lotteryTicket });

      this.lottoWinCounts[winningNumsInTicket.length]["count"]++;
    }
  }

  checkBonusNum(bonusNum) {
    this.winningTickets.map((ele) => {
      if (ele.count === 5 && ele["lotteryTicket"].includes(bonusNum)) {
        this.lottoWinCounts["5"]["count"]--;
        this.lottoWinCounts["bonus"]["count"]++;
      }
      return ele;
    });

    return this.lottoWinCounts;
  }

  getTotalPrize(winningTickets) {
    return PRICE.reduce((acc, cur) => {
      return acc + winningTickets[cur.count]["count"] * cur.prize;
    }, 0);
  }
}

export default LottoModel;
