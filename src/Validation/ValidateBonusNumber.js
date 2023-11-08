import { MESSAGE } from '../Constants/constant';

const ValidateBonusNumber = (number) => {
  if (isNaN(number) || number === '' || number < 1 || number > 45) {
    throw new Error(MESSAGE.ERROR.BONUS);
  }
};

export default ValidateBonusNumber;
