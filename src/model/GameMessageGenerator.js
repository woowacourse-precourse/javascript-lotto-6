import { OTHERS, PRIZES_MESSAGE, PRIZES } from '../utils/constants.js';

class GameMessageGenerator {
  getPurchaseLottosMessages(purchaseLottos) {
    const PURCHASE_LOTTOS_MESSAGES = [];

    purchaseLottos.forEach((lotto) => {
      PURCHASE_LOTTOS_MESSAGES.push(lotto.join(OTHERS.commaWithSpace));
    });

    return PURCHASE_LOTTOS_MESSAGES;
  }

  getResultMessage(winningResult) {  
    const RESULT_MESSAGE_ARRAY = [];

    Object.keys(winningResult).forEach((key) => {
      RESULT_MESSAGE_ARRAY.push(
        `${PRIZES_MESSAGE[key]} ${OTHERS.dash} ${winningResult[key]}${OTHERS.numKorean}`
      );
    });
    
    return RESULT_MESSAGE_ARRAY
  }
}

export default GameMessageGenerator;
