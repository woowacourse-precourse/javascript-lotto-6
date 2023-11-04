import VALUE from '../constants/value.js';

class PriceModel {
  static calculateNumberOfLotto(price) {
    return price / VALUE.condition.priceDivision;
  }
}

export default PriceModel;
