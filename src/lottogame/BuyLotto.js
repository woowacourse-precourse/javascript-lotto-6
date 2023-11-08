import { ERROR } from '../constant/constant.js';

const buyLotto = (cost) => {
  if (cost % 1000 === 0 && cost !== 0) return cost / 1000;
  throw ERROR.INVALID_UNIT;
};

export default buyLotto;
