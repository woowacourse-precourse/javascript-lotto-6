import NUMBER from '../../constants/number.js';
import WinnerSelector from '../WinnerSelector.js';

export default function calculateTotalProfit({
  lottoNumbers,
  bonusNumber,
  lottos,
}) {
  const winningSelector = new WinnerSelector({
    lottoNumbers: lottoNumbers,
    bonusNumber: bonusNumber,
    issuedLottos: lottos,
  });
  const winningCount = winningSelector.getResult();
  const winPlace = NUMBER.winningAmount;

  let totalProfit = 0;

  totalProfit += winningCount[0] * winPlace.fifth;
  totalProfit += winningCount[1] * winPlace.fourth;
  totalProfit += winningCount[2] * winPlace.third;
  totalProfit += winningCount[3] * winPlace.second;
  totalProfit += winningCount[4] * winPlace.first;

  return totalProfit;
}
