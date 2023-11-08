import { Console } from '@woowacourse/mission-utils';
import validateMoney from './validation/validateMoney';
import validateLotto from './validation/validateLotto';

const inputUserMoney = async () => {
  const userMoney = await Console.readLineAsync('구입 금액을 입력해 주세요.');
  validateMoney(userMoney);

  return userMoney;
};

const inputUserLottoArray = async () => {
  const userLottoNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
  const userLottoNumberToArray = userLottoNumber.split(',').map(Number);

  validateLotto(userLottoNumberToArray);

  return userLottoNumberToArray;
};

const inputUserBonusNumber = async () => {
  const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.');

  return bonusNumber;
};

module.exports = { inputUserMoney, inputUserLottoArray, inputUserBonusNumber };
