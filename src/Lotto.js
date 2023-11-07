import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/index.js';

class Lotto {
  constructor(numbers) {}

  async buy() {}

  async setWinningNumbers() {}

  async getResult() {}

  printPrize() {}

  printRateOfRevenue() {}

  #readBuyAmount() {}

  #validateIsNumber(input) {}

  #validateBuyUnit(input) {}

  #validateNumberOfInputs(input) {}

  #validateIsInRange(input) {}

  #getNumberOfAvailableTickets(amount) {}

  #publishLottoTicket() {}

  #printAllTickets() {}

  #readWinningNumbers() {}

  #readWinningBonusNumber() {}

  #getRank() {}
}

class LottoTicket {
  numbers = [];
  constructor() {}

  generateLottoNumbers() {}

  getNumberOfMatchedNumbers() {}

  getIsBonusNumberMatched() {}

  printNumbers() {}
}

export default Lotto;
