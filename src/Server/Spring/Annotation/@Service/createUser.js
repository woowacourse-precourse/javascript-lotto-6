import User from '../../VO/User.js';

const createUser = (purchaseAmount, generateLottoNumber) => {
  return new User(purchaseAmount, generateLottoNumber);
};

export default createUser;
