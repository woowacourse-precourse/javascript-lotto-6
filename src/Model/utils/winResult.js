import { REWARDSET } from '../../Constant/SETTING.js';

export default function winResult(winCountArr) {
  const winResultArr = [];
  Object.keys(REWARDSET).forEach((rank) => {
    winResultArr.push(winCountArr.filter((winCount) => REWARDSET[rank].cnt === winCount).length);
  });

  return winResultArr;
}
