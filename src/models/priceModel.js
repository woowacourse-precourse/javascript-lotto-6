import VALUE from '../constants/value.js';

const priceModel = {
  calculateNumberOfLotto(price) {
    return price / VALUE.condition.priceDivision;
  },
};

export default priceModel;
