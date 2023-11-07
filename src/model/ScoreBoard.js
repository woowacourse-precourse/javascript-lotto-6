class ScoreBoard {
  #scoreBoard;

  constructor() {
    this.#scoreBoard = Object.seal({
      '1등': 0,
      '2등': 0,
      '3등': 0,
      '4등': 0,
      '5등': 0,
    });
  }

  checkLotto(winningNumbers, bonusNumber, lotto) {
    let numOfCorrect = 0;
    let isWonBonus = false;
    winningNumbers.forEach((number) => {
      if (lotto.includes(number)) numOfCorrect += 1;
    });
    if (lotto.includes(bonusNumber)) isWonBonus = true;

    const rank = ScoreBoard.#getRank(numOfCorrect, isWonBonus);
    this.#addRank(rank);
  }

  getScoreBoard() {
    return this.#scoreBoard;
  }

  #addRank(rank) {
    if (rank) this.#scoreBoard[rank] += 1;
  }

  static #getRank(numOfCorrect, isWonBonus) {
    switch (numOfCorrect) {
      case 6:
        return '1등';
      case 5:
        return isWonBonus ? '2등' : '3등';
      case 4:
        return '4등';
      case 3:
        return '5등';
      default:
        return null;
    }
  }
}

export default ScoreBoard;
