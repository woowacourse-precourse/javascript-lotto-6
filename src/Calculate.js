import { MissionUtils } from "@woowacourse/mission-utils";
import { RANK_NUM } from "./constants/message.js";
import { MAGIC_NUM } from "./constants/magicNum.js";

class Calculate {
  #result = {};
  #totalwinnings = 0;
  constructor(userlotterys, winningnumber, bonusNumber) {
    this.userlotterys = userlotterys;
    this.winningnumber = winningnumber;
    this.bonusNumber = bonusNumber;
    this.#validate(userlotterys);
  }

  #validate(userlotterys) {
    if (userlotterys.length === 0) {
      throw new Error("[ERROR] 유저의 로또가 존재하지 않습니다.");
    }
  }

  calProfit() {
    let buyLottery = this.userlotterys.length * MAGIC_NUM.LOTTERY_PRICE;
    let profitLottery = this.#totalwinnings;
    let profitRatio = (profitLottery / buyLottery) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitRatio.toFixed(1)}%입니다.`);
  }

  //   당첨 통계
  // ---
  // 3개 일치 (5,000원) - 1개
  // 4개 일치 (50,000원) - 0개
  // 5개 일치 (1,500,000원) - 0개
  // 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  // 6개 일치 (2,000,000,000원) - 0개
  // 총 수익률은 62.5%입니다.
  reportStatistics() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    for (let key in RANK_NUM) {
      if (this.#result[key] ?? false) {
        this.#totalwinnings += Number(
          /\((\d+(?:,\d+)+)\D\)/.exec(RANK_NUM[key])[1].split(",").join("")
        );
      }
      MissionUtils.Console.print(
        `${RANK_NUM[key]} - ${this.#result[key] ?? 0}개`
      );
    }
  }

  saveStatistics(key) {
    if (this.#result?.[key]) {
      this.#result[key] += 1;
    } else {
      this.#result[key] = 1;
    }
  }

  calStatistics(usrlotto) {
    let totalNum = [...usrlotto, ...this.winningnumber];
    let uniqueNum = [...new Set(totalNum)];
    // uniqueNum.length = 6 1등
    // uniqueNum.length = 7 + 보너스 2등
    // uniqueNum.length = 7 3등
    // uniqueNum.length = 8 4등
    // uniqueNum.length = 9 5등
    switch (uniqueNum.length) {
      case 6:
        this.saveStatistics("PLACE_1ST_IN_THE_LOTTERY");
        break;
      case 7:
        if (uniqueNum.includes(this.bonusNumber)) {
          this.saveStatistics("PLACE_2ND_IN_THE_LOTTERY");
        } else {
          this.saveStatistics("PLACE_3RD_IN_THE_LOTTERY");
        }
        break;
      case 8:
        this.saveStatistics("PLACE_4TH_IN_THE_LOTTERY");
        break;
      case 9:
        this.saveStatistics("PLACE_5TH_IN_THE_LOTTERY");
        break;
      default:
    }
  }

  start() {
    for (let usrlotto of this.userlotterys) {
      this.calStatistics(usrlotto);
    }
    this.reportStatistics();
    this.calProfit();
  }
}

export default Calculate;

// let a = [
//   [1, 2, 3, 4, 5, 41],
//   [4, 5, 6, 7, 1, 2],
//   [4, 5, 6, 7, 1, 2],
//   [1, 2, 3, 4, 5, 6],
// ];
// let b = [1, 2, 3, 4, 5, 6];
// let c = 7;

// const cal = new Calculate(a, b, c);
// cal.start();
