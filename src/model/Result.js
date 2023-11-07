import { print } from "../view/print";
import { MESSAGE } from "../constant/MESSAGE";
import { LOTTO_SETTINGS } from "../constant/LOTTO_SETTINGS";

export default class Result {
  #winPrice;
  #ranking;
  #winning;
  #bonus;

	constructor(answer) {
    this.#ranking = Array(5).fill(0);
    this.#winPrice = 0;
    this.#winning = answer.answerNumber;
    this.#bonus = answer.bonusNumber;
  }

  async printResult(money) {
    await this.addPrice();
    print(MESSAGE.WINNING_STATICS);
    print(`3개 일치 (5,000원) - ${this.#ranking[0]}개`);
    print(`4개 일치 (50,000원) - ${this.#ranking[1]}개`);
    print(`5개 일치 (1,500,000원) - ${this.#ranking[2]}개`);
    print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#ranking[3]}개`);
    print(`6개 일치 (2,000,000,000원) - ${this.#ranking[4]}개`,);
    print(`${MESSAGE.TOTAL_RATE_OF_RETURN}${(this.#winPrice / money).toPrecision(3)*100}%입니다.`); 
  }

  // 정답 수 확인
  checkRank(numbers) {
    const same = numbers.filter((num) => this.#winning.includes(num));
    if (numbers.includes(this.#bonus)) {
      same.push(this.#bonus);
      this.addRank(same.length, true);
      return;
    }
    this.addRank(same.length, false);
    return;
  }

  // ranking 업데이트
  addRank(rank, bonus) {
    if (rank === 3) this.#ranking[0]++;
    if (rank === 4) this.#ranking[1]++;
    if (rank === 5) {
      if (bonus) {
        this.#ranking[3]++;
        return;
      }
      this.#ranking[2]++;
    }
    if (rank === 6) this.#ranking[4]++;
  }

  // 돈 계산
  async addPrice() {
    const price = [LOTTO_SETTINGS.FIFTH_PRIZE, LOTTO_SETTINGS.FOURTH_PRIZE, LOTTO_SETTINGS.THIRD_PRIZE, LOTTO_SETTINGS.SECOND_PRIZE, LOTTO_SETTINGS.FIRST_PRIZE];
    this.#winPrice = this.#ranking.reduce((accumulator, currentValue, index) => accumulator + currentValue * price[index], 0);
  }


  getWinPrice(){
    return this.#winPrice;
  }

}
