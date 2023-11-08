class Statistics {
  #winningNumber;
  #lottoNumber;
  #bonus;
  #checkArray;
  #result;

  constructor(winningNumber, lottoNumber, bonus) {
    this.#winningNumber = winningNumber;
    this.#lottoNumber = lottoNumber;
    this.#bonus = bonus;
    this.#checkArray = [];
    this.#result = [0, 0, 0, 0, 0];
  }

  // 각 로또에 당첨 번호와 일치하는 숫자 개수 집계
  #sameNumberCheck() {
    this.#lottoNumber.forEach((innerArray) => {
      const sameNumber = innerArray.filter((element) => this.#winningNumber.includes(element));
      this.#checkArray.push(sameNumber.length);
    });
  }

  // 등수 집계
  #winningRank() {
    const rankCondition = {
      3: () => this.#result[0] += 1,
      4: () => this.#result[1] += 1,
      5: (i) => this.#checkBonus(i),
      6: () => this.#result[4] += 1
  };
  
    this.#sameNumberCheck();

    this.#checkArray.forEach((item) => {
      if (rankCondition[item]) {
        rankCondition[item](this.#checkArray.indexOf(item));
      }
    });
  }

  #checkBonus(i) {
    if (this.#lottoNumber[i].includes(this.#bonus)) {
      this.#result[3] += 1;
    } else {
      this.#result[2] += 1;
    }
  }

  getResult() {
    this.#winningRank();
    return this.#result;
  }

  getROI() {
    const REWORD = [5000, 50000, 1500000, 30000000, 2000000000];
    const investment = this.#lottoNumber.length * 1000;
    let profit = 0;

    for (let i = 0; i < this.#result.length; i += 1) {
      profit += this.#result[i] * REWORD[i];
    }

    const roi = (profit / investment) * 100;
    return roi.toFixed(1);
  }
}

export default Statistics;
