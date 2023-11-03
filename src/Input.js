import { Console } from '@woowacourse/mission-utils';

const inputPurchaseAmount = async () => {
  const purchaseAmount =
    await Console.readLineAsync('구입금액을 입력해 주세요.');
};

const inputLottoNumber = async () => {
  const lottoNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
};

const inputBonusNumber = async () => {
  const bonusNumber =
    await Console.readLineAsync('보너스 번호를 입력해 주세요.');
};

module.exports = { inputPurchaseAmount, inputLottoNumber, inputBonusNumber };