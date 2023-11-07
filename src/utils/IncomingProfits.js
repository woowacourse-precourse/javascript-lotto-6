import { DECIMAL_POINT, LOTTO_RANK } from '../constants/GameSetting.js';

export function incomingProfits(result, buyLottoAmount) {
  const totalPrize = result.reduce((acc, cur, index) => {
    return acc + cur * Object.values(LOTTO_RANK)[index].winningMoney;
  }, 0);

  const profitPercentage = ((totalPrize / buyLottoAmount) * 100).toFixed(DECIMAL_POINT);
  const formatterProfitPercentage = Number(profitPercentage).toLocaleString(undefined, {
    minimumFractionDigits: DECIMAL_POINT,
  });
  return formatterProfitPercentage;
}
