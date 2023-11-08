import MESSAGES from '../constants/messages.js';
import { printMessage } from '../utils/printMessage.js';

class ProfitRate {
  static calculateProfitRate(purchaseAmount, totalPrize) {
    const profitRate = (totalPrize / purchaseAmount) * 100;
    if (profitRate % 0.01) {
      profitRate.toFixed(2);
    }
    printMessage(MESSAGES.profitRate(profitRate));
  }
}

export default ProfitRate;
