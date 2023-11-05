import { OTHERS } from './utils/constants.js';

class GameMessageGenerator {
  getLottoNumberListMessage(lottoNumberArray) {
    let LOTTO_NUMBER_LIST_MESSAGE = OTHERS.emptyString;
    lottoNumberArray.forEach((lotto) => {
      LOTTO_NUMBER_LIST_MESSAGE += `[${lotto.join(OTHERS.commaWithSpace)}]\n`;
    });

    return LOTTO_NUMBER_LIST_MESSAGE;
  }
}

export default GameMessageGenerator;
