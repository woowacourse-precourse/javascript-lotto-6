import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";

export class LottoRandom {
  constructor(lotto_num) {
    this.num = lotto_num;
    this.lotto_arr_total = [];
    this.makeAllLottoSet(this.num);
    this.win = new Array(5).fill(0);
  }

  //메소드 : 한 쌍의 로또 당첨 번호를 만든다
  makeOneLottoSet() {
    let one_lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    one_lotto = new Lotto(one_lotto);
    return one_lotto;
  }

  //메소드 : 구입 금액에 맞는 양만큼의 로또 당첨 번호를 만든다
  makeAllLottoSet() {
    for (let i = 0; i < this.num; i++) {
      let one = this.makeOneLottoSet();
      this.lotto_arr_total.push(one);
    }
  }

  //메소드 : 발행한 로또 당첨 번호를 출력한다
  printLottoSet() {
    for (let lotto of this.lotto_arr_total) {
      lotto.printAllLottoNum();
    }
  }

  //메소드 : 당첨 횟수를 고려하여 당첨 내역에 넣는다
  getPrize(win, bonus) {
    for (let i = 0; i < this.num; i++) {
      let isWin = this.lotto_arr_total[i].countWin(win);
      let isBonus = this.lotto_arr_total[i].isBonus(bonus);
      this.countPrize(isWin, isBonus);
    }
  }

  //메소드 : 당첨 내역을 고려하여 win 배열 값을 변경한다
  countPrize(isWin, isBonus) {
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

  //메소드 : 당첨 통계를 출력한다
  printResult() {
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
