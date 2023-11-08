class LottoGame {
  #userLottoNumberList;

  #winningNumber;

  #bonusNumber;

  constructor(userLottoNumberList, winningNumber, bonusNumber) {
    this.#userLottoNumberList = userLottoNumberList;
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.winnerStatic = Array.from({ length: 5 }, () => 0);
    this.#checkWinner();
    console.log(this.winnerStatic); // TODO 디버기용
  }

  #checkWinner() {
    this.#userLottoNumberList.forEach((value) => {
      const count = this.#checkNumber(value);
      const bonusCount = this.#checkBonusNumber(value);
      this.#checkWinnerResult(count, bonusCount);
    });
  }

  #checkNumber(value) {
    let count = 0;
    for (let i = 0; i < 6; i += 1) {
      if (value.includes(Number(this.#winningNumber[i]))) {
        count += 1;
      }
    }
    return count;
  }

  #checkBonusNumber(value) {
    let bonusCount = 0;
    if (value.includes(this.#bonusNumber)) {
      bonusCount += 1;
    }
    return bonusCount;
  }

  #checkWinnerResult(count, bonusCount) {
    if (count === 3) {
      this.winnerStatic[0] += 1;
    } else if (count === 4) {
      if (bonusCount === 1) {
        this.winnerStatic[3] += 1;
      } else {
        this.winnerStatic[1] += 1;
      }
    } else if (count === 5) {
      this.winnerStatic[2] += 1;
    } else if (count === 6) {
      this.winnerStatic[4] += 1;
    }
  }
}
export default LottoGame;
