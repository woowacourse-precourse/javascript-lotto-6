import { Console } from "@woowacourse/mission-utils";

export class Purchase {
  #amountOfLotto;
  constructor() {
    this.#amountOfLotto = 0;
  }

  async getCredit() {
    const cash = Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return cash;
  }

  getAmountOfLotto(credit) {
    this.#amountOfLotto = this.isDividedBy1000(credit);
    return this.#amountOfLotto;
  }

  isDividedBy1000(credit) {
    if (credit % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
    } else {
      return Math.floor(credit / 1000);
    }
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`${amountOfLotto}개를 구매했습니다.`);
  }
}

export class Profit {
  constructor() {
    this.statCount = [0, 0, 0, 0, 0];
  }

  lottoStats(rank) {
    let statCount = this.statCount;
    if (rank === 5) {
      statCount[0] = 1;
      console.log(statCount);
      return;
    }
    if (rank === 4) {
      statCount[1] = 1;
      console.log(statCount);
      return;
    }
    if (rank === 3) {
      statCount[2] = 1;
      console.log(statCount);
      return;
    }
    if (rank === 2 && isBonus === true) {
      statCount[3] = 1;
      console.log(statCount);
      return;
    }
    if (rank === 1) {
      statCount[4] = 1;
      console.log(statCount);
      return;
    }

    return statCount;
  }

  lottoStatsPrint(count) {
    const statCount = this.statCount;
    Console.print(
      `당첨 통계\n---\n3개 일치 (5000원) - ${statCount[0]}개\n
      4개 일치 (50,000원) - ${statCount[1]}개\n
      5개 일치 (1,500,000원) - ${statCount[2]}개\n
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${statCount[3]}개\n
      6개 일치 (2,000,000,000원) - ${statCount[4]}개\n`
    );
  }
}
