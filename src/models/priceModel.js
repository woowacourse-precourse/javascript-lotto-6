import VALUE from '../constants/value.js';

const priceModel = {
  calculateNumberOfLotto(price) {
    return price / VALUE.unit.price;
  },
};

export default priceModel;
