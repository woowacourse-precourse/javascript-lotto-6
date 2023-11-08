import { MissionUtils } from "@woowacourse/mission-utils";
import { model } from "./Model.js";

export class Results {
  #results = [0,0,0,0,0];

  constructor(lotto, winning, bonus, count) {
    this.lotto = lotto;
    this.winning = winning;
    this.bonus = bonus;
    this.count = count;
    this.#lottosReader(lotto, winning, bonus, count);
  }

  #lottosReader(lotto, winning, bonus, count) {
    model.winningResults = [];
    for (let i = 0; i < count; i++) {
      const result = this.#lottoReader(lotto[i], winning, bonus)
      model.winningResults.push(result);
    }

    model.totalPrize = 0;
    this.#lottoResultsCounter(model.winningResults);
  }

  #lottoReader(lotto, winning, bonus) {
    const sameNumbers = winning.filter(number => lotto.includes(number))
    const sameBonus = lotto.includes(bonus);
    if (sameBonus === false) {
      return [sameNumbers.length, 0];
    }
    return [sameNumbers.length, 1];
  }

  #lottoResultsCounter(results) {
    for (let i = 0; i < results.length; i++) {
      this.#lottoResultCounter(results[i]);
    }

    this.#lottoResultsPrinter(this.#results);
  }

  #lottoResultCounter(result) {
    for (let i = 3; i < 7; i++) {
      if (result[0] === i && result[0] !== 5) {
        this.#lottoRatingCounter(result[0]);
      }
    }
    if (result[0] === 5) {
      this.#lottoResultBonusCounter(result);
    }
  }

  #lottoRatingCounter(sameCounts) {
    if (sameCounts === 3) {
      this.#results[0] += 1;
      model.totalPrize += model.prize[0];
      return true;
    }
    if (sameCounts === 4) {
      this.#results[1] += 1;
      model.totalPrize += model.prize[1];
      return true;
    }
    this.#results[4] += 1;
    model.totalPrize += model.prize[4];
  }

  #lottoResultBonusCounter(result) {
    if (result[1] === 0) {
      this.#results[2] += 1;
      model.totalPrize += model.prize[2];
      return true;
    }
    this.#results[3] += 1;
    model.totalPrize += model.prize[3];
  }

  #lottoResultsPrinter(results) {
    this.#lottoResultComment();

    for (let i = 0; i < results.length; i++) {
      const prize = model.prize[i]
      const currencyPrize = this.#formatCurrency(prize);
      this.#lottoResultPrinter(currencyPrize, results[i], i);
    }

    this.totalRate(model.totalMoney, model.totalPrize);
  }

  totalRate(money, prize) {
    const roundedRate = this.#calculateRate(money, prize);
    MissionUtils.Console.print(`총 수익률은 ${roundedRate}%입니다.`);
  }
  
  #calculateRate(money, prize) {
    const rate = (prize / money) * 100;
    const roundedRate = rate.toFixed(2);
    return Number(roundedRate);
  }

  #formatCurrency(number) {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    minimumFractionDigits: 0, 
    }).format(number).replace(/₩/g, '');
  }

  #lottoResultPrinter(prize, result, i) {
    if (i === 3) {
      MissionUtils.Console.print(
        `${model.same[i]}개 일치, 보너스 볼 일치 (${prize}원) - ${result}개`
      );
      return true;
    } 
    MissionUtils.Console.print(
      `${model.same[i]}개 일치 (${prize}원) - ${result}개`
    );
  }

  #lottoResultComment() {
    MissionUtils.Console.print("");
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
  }
}