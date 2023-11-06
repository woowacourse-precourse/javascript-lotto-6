import { OTHERS, PRIZES_MESSAGE, PRIZES } from './utils/constants.js';

class GameMessageGenerator {
  getLottoNumberListMessage(lottoNumberArray) {
    let LOTTO_NUMBER_LIST_MESSAGE = OTHERS.emptyString;
    lottoNumberArray.forEach((lotto) => {
      LOTTO_NUMBER_LIST_MESSAGE += `[${lotto.join(OTHERS.commaWithSpace)}]\n`;
    });

    return LOTTO_NUMBER_LIST_MESSAGE;
  }

  getResultMessage(gameResultObj, purchaseMoney) {
    let resultMessage = OTHERS.emptyString;
    let totalPrize = 0;

    Object.keys(gameResultObj).forEach((key, index) => {
      if (index === Object.keys(gameResultObj).length - 1) {
        resultMessage += `${PRIZES_MESSAGE[key]} ${OTHERS.dash} ${gameResultObj[key]}${OTHERS.numKorean}`;
      } else {
        resultMessage += `${PRIZES_MESSAGE[key]} ${OTHERS.dash} ${gameResultObj[key]}${OTHERS.numKorean}${OTHERS.lineBreak}`;
      }
      totalPrize += gameResultObj[key] * PRIZES[key];
    });

    const returnRate = ((totalPrize / purchaseMoney) * 100).toFixed(1);

    return [resultMessage, returnRate];
  }
}

export default GameMessageGenerator;
