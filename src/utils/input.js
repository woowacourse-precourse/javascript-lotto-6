import { MissionUtils } from '@woowacourse/mission-utils';

const input = async (printString = '') => {
  const inputValue = await MissionUtils.Console.readLineAsync(printString);

  return inputValue;
};

const inputPurchaseAmount = async () => {
  const purchaseAmount = await input();

  return Number(purchaseAmount);
};

const inputWinnigNumbers = async () => {
  const winnigNumber = await input();

  return winnigNumber.split(',');
};

const inputBonusNumber = async () => {
  const bonusNumber = await input();

  return Number(bonusNumber);
};

export { inputPurchaseAmount, inputWinnigNumbers, inputBonusNumber };
