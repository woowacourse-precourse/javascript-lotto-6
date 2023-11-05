class Profit {
  constructor() {
    this.statCount = [0, 0, 0, 0, 0];
  }

  lottoStats(rank) {
    let statCount = this.statCount;
    if (rank === 5) {
      statCount[0] = 1;

      return;
    }
    if (rank === 4) {
      statCount[1] = 1;

      return;
    }
    if (rank === 3) {
      statCount[2] = 1;

      return;
    }
    if (rank === 2 && isBonus === true) {
      statCount[3] = 1;

      return;
    }
    if (rank === 1) {
      statCount[4] = 1;

      return;
    }

    return statCount;
  }

  lottoStatsPrint(count) {
    const statCount = this.statCount;
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5000원) - ${statCount[0]}개\n4개 일치 (50,000원) - ${statCount[1]}개\n5개 일치 (1,500,000원) - ${statCount[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${statCount[3]}개\n6개 일치 (2,000,000,000원) - ${statCount[4]}개\n`
    );
  }

  profitCalc() {}
}

export default Profit;
