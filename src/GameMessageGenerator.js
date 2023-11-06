import { OTHERS, PRIZES_MESSAGE, PRIZES } from './utils/constants.js';

class GameMessageGenerator {
  getLottoNumberListMessage(lottoNumberArray) {
    const LOTTO_NUMBER_LIST_MESSAGE_ARRAY = [];

    lottoNumberArray.forEach((lotto) => {
      LOTTO_NUMBER_LIST_MESSAGE_ARRAY.push(lotto.join(OTHERS.commaWithSpace));
    });

    return LOTTO_NUMBER_LIST_MESSAGE_ARRAY;
  }

  getResultMessage(gameResultObj, purchaseMoney) {
    let totalPrize = 0;
    const RESULT_MESSAGE_ARRAY = [];
    Object.keys(gameResultObj).forEach((key) => {
      RESULT_MESSAGE_ARRAY.push(
        `${PRIZES_MESSAGE[key]} ${OTHERS.dash} ${gameResultObj[key]}${OTHERS.numKorean}`
      );

      totalPrize += gameResultObj[key] * PRIZES[key];
    });

    const returnRate = ((totalPrize / purchaseMoney) * 100).toFixed(1);

    return [RESULT_MESSAGE_ARRAY, returnRate];
  }
}

export default GameMessageGenerator;
