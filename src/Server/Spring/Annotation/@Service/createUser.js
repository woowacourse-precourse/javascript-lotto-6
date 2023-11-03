/* eslint-disable import/extensions */
import User from '../../DTO/User.js';

const createUser = purchaseAmount => {
  return new User(purchaseAmount);
};

export default createUser;
