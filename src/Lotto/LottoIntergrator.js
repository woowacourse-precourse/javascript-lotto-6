import { WINNING_AMOUNT_UNITS } from '../Constant/Constant.js';

import LottoAnalyzer from './LottoAnalyzer.js';

const LottoIntergrator = class {
  #allLottos = [];

  #roi;

  #board = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    0: 0,
  };

  pushLotto(lotto) {
    this.#allLottos.push(lotto);
  }

  allLottoInfo() {
    return this.#allLottos;
  }

  saveBoard(winNum, bonusNum) {
    this.#allLottos.forEach((lottos) => {
      this.#board[LottoAnalyzer.getAnalysis(winNum, bonusNum, lottos)] += 1;
    });

    return this.#board;
  }

  static getstatistics(totalWinning, purchaseAmount) {
    return LottoAnalyzer.toFixedNumber((totalWinning / purchaseAmount) * 0.1);
  }

  static totalWinningAmount(winningArray) {
    let totalAmount = 0;
    winningArray.forEach((winning) => {
      if (winning === 1) totalAmount += WINNING_AMOUNT_UNITS.FIRST_PLACE;
      if (winning === 2) totalAmount += WINNING_AMOUNT_UNITS.SECOND_PLACEs;
      if (winning === 3) totalAmount += WINNING_AMOUNT_UNITS.THIRD_PLACE;
      if (winning === 4) totalAmount += WINNING_AMOUNT_UNITS.FOURTH_PLACE;
      if (winning === 5) totalAmount += WINNING_AMOUNT_UNITS.FIFTH_PLACE;
    });
    return totalAmount;
  }
};

export default LottoIntergrator;
