import { Console } from '@woowacourse/mission-utils';
import { countLottoTickets } from './utils/countLottoTickets';
import validateMoney from './validation/validateMoney';
import validateLotto from './validation/validateLotto';

const inputUserMoney = async () => {
  const userMoney = await Console.readLineAsync('구입 금액을 입력해 주세요.');

  validateMoney(userMoney);
  countLottoTickets(userMoney);
};

const inputLottoNumber = async () => {
  const lottoNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.');

  validateLotto(lottoNumber);
};

const inputBonusNumber = async () => {
  const bonusNumber =
    await Console.readLineAsync('보너스 번호를 입력해 주세요.');
};

module.exports = { inputUserMoney, inputLottoNumber, inputBonusNumber };
