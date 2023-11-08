import { Console } from "@woowacourse/mission-utils";

class Statistics {
  #counter;
  constructor(counter) {
    this.#counter = counter;
  }

  print(myMony) {
    const {
      3: three,
      4: four,
      5: five,
      5.5: bonus,
      6: six,
    } = this.#counter.getCount();

    Console.print("당첨 통계");
    Console.print("---------");
    Console.print(
      `3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개\n6개 일치 (2,000,000,000원) - ${six}개`
    );
    Console.print(`총 수익률은 ${this.#calculate(myMony)}%입니다.`);
  }

  #calculate(myMoney) {
    const {
      3: three,
      4: four,
      5: five,
      5.5: bonus,
      6: six,
    } = this.#counter.getCount();

    const winningMoney =
      three * 5000 +
      four * 50000 +
      five * 1500000 +
      bonus * 30000000 +
      six * 2000000000;
    return Math.round((winningMoney / myMoney) * 100 * 10) / 10;
  }
}

export default Statistics;
