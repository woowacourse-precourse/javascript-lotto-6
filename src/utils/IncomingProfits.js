import { DECIMAL_POINT, LOTTO_RANK, TO_LOCALE_STRING_OPTION } from '../constants/GameSetting.js';

export function incomingProfits(result, buyLottoAmount) {
  const totalPrize = result.reduce((acc, cur, index) => {
    return acc + cur * Object.values(LOTTO_RANK)[index].winningMoney;
  }, 0);

  const profitPercentage = ((totalPrize / buyLottoAmount) * 100).toFixed(DECIMAL_POINT);
  const formatterProfitPercentage = Number(profitPercentage).toLocaleString(
    TO_LOCALE_STRING_OPTION,
    {
      minimumFractionDigits: DECIMAL_POINT,
    },
  );
  return formatterProfitPercentage;
}
