import PURCHASE_UNIT from '../constants/PurchaseUnit.js';

class GameUtils {
  static dividedByThousand(amount) {
    return amount / PURCHASE_UNIT;
  }
}

export default GameUtils;
