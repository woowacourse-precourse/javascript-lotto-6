import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoRandom {
  constructor(lotto_num) {
    this.num = lotto_num;
    this.lotto_value_arr = [];
    this.makeAllLottoSet(this.num);
    this.win = new Array(5).fill(0);
  }
  makeAllLottoSet() {
    for (let i = 0; i < this.num; i++) {
      let one = this.makeOneLottoSet();
      this.lotto_value_arr.push(one);
    }
  }

  makeOneLottoSet() {
    let one_lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    one_lotto = new Lotto(one_lotto);
    return one_lotto;
  }

  printLottoSet() {
    for (let lotto of this.lotto_value_arr) {
      lotto.printAllLottoNum();
    }
  }

  getPrize(win, bonus) {
    for (let i = 0; i < this.num; i++) {
      let isWin = this.lotto_value_arr[i].countWin(win);
      let isBonus = this.lotto_value_arr[i].getUserLotto(bonus);
      this.calculatePrize(isWin, isBonus);
    }
  }

  calculatePrize(isWin, isBonus) {
    if (isWin === 3) {
      this.win[0]++;
    }
    if (isWin === 4) {
      this.win[1]++;
    }
    if (isWin === 5 && isBonus == false) {
      this.win[2]++;
    }
    if (isWin === 5 && isBonus == true) {
      this.win[3]++;
    }
    if (isWin === 6) {
      this.win[4]++;
    }
  }
  // / 결과 출력
  getResult() {
    MissionUtils.Console.print("\n당첨 통계\n___");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.win[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.win[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.win[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.win[3]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.win[4]}개`);
  }
}
