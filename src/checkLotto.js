import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoGenerator from "./LottoGenerator.js";

async function checkWinning(totalLottos, winNumbers, bonusNumber)
{
  const lottos = totalLottos.lottos;

	const result = {
      3: 0,
      4: 0,
      5: 0,
      50: 0,
      60: 0,
	  };

  for (const lotto of lottos)
  {
    const match = lotto.checkWinningNumbers(winNumbers);

    if (match === 5 && lotto.checkBonusNumber(bonusNumber))
    result[50]++;
    else
    result[match]++;
  };

  return result;
}

async function printResult(lottos, result)
{
	const rewards = {
		3: "3개 일치 (5,000원)",
		4: "4개 일치 (50,000원)",
		5: "5개 일치 (1,500,000원)",
		50: "5개 일치, 보너스 볼 일치 (30,000,000원)",
		60: "6개 일치 (2,000,000,000원)",
	  };

	const logs = [];
	let totalLottos = lottos.count;

	Object.keys(rewards).forEach((count) => {

    const reward = rewards[count];
    const countValue = result[count] ?? 0;
    logs.push(`${reward} - ${countValue}개`);
    totalLottos -= countValue;
	});

	const totalreward =
	result[3] * 5000 +
	result[4] * 50000 +
	result[5] * 1500000 +
	result[50] * 30000000 +
  result[60] * 2000000000;

	const profitRate = ((totalreward / (lottos.count * 1000)) * 100).toFixed(1);
	logs.push(`총 수익률은 ${profitRate}%입니다.`);

	for (let log of logs)
		Console.print(log);
}

export {checkWinning, printResult};
