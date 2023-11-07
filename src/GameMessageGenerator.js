import { OTHERS, PRIZES_MESSAGE, PRIZES } from './utils/constants.js';

class GameMessageGenerator {
  getPurchaseLottosMessages(purchaseLottos) {
    const PURCHASE_LOTTOS_MESSAGES = [];

    purchaseLottos.forEach((lotto) => {
      PURCHASE_LOTTOS_MESSAGES.push(lotto.join(OTHERS.commaWithSpace));
    });

    return PURCHASE_LOTTOS_MESSAGES;
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
