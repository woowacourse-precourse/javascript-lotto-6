import { OTHERS, PRIZES } from './utils/constants.js';

class GameMessageGenerator {
  getLottoNumberListMessage(lottoNumberArray) {
    let LOTTO_NUMBER_LIST_MESSAGE = OTHERS.emptyString;
    lottoNumberArray.forEach((lotto) => {
      LOTTO_NUMBER_LIST_MESSAGE += `[${lotto.join(OTHERS.commaWithSpace)}]\n`;
    });

    return LOTTO_NUMBER_LIST_MESSAGE;
  }

  getResultMessage(gameResultObj) {
    let resultMessage = OTHERS.emptyString;

    Object.keys(gameResultObj).forEach((key, index) => {
      if (index === Object.keys(gameResultObj).length - 1) {
        resultMessage += `${PRIZES[key]} ${OTHERS.dash} ${gameResultObj[key]}${OTHERS.numKorean}`;
      } else {
        resultMessage += `${PRIZES[key]} ${OTHERS.dash} ${gameResultObj[key]}${OTHERS.numKorean}${OTHERS.lineBreak}`;
      }
    });

    return resultMessage;
  }
}

export default GameMessageGenerator;
