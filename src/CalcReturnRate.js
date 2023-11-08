import { LOTTO_MATCH } from "./constant/LottoInfo.js";
function CalcReturnRate(rankObj, amount) {
  let sum = 0;
  Object.keys(rankObj).forEach((rank) => {
    sum += LOTTO_MATCH[rank].reward * rankObj[rank];
  });
  return (sum / amount) * 100;
}

export default CalcReturnRate;
