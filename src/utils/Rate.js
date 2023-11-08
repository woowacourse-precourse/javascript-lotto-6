import { CONSTANTS } from "../Constants.js";

class Rate {

  rateOfReturn(statistics, lottoEach) {
    const total = statistics[0] * CONSTANTS.WIN_PRIZE_FIFTH + statistics[1] * CONSTANTS.WIN_PRIZE_FORTH + 
    statistics[2] * CONSTANTS.WIN_PRIZE_THIRD + statistics[4] * CONSTANTS.WIN_PRIZE_SECOND + statistics[3] * CONSTANTS.WIN_PRIZE_FIRST;
    const rate = Math.round((total / (lottoEach * 10)) * 10) / 10;
    
    return rate;
  }
}

export default Rate;