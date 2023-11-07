import { Console } from "@woowacourse/mission-utils";
import { calculateWinMoney } from "./calculateWinMoney.js";
import { calculateStatistical } from "./calculateStatistical.js";
import { getMoneyTable } from "./getMoneyTable.js";

export const printWinningMoney = (winCounts, lottoAmount) => {
  const count = calculateWinMoney(winCounts);

  count.forEach((el) => {
    const countKeyVaule = Object.keys(el)[0];
    const moneyTable = getMoneyTable(countKeyVaule);

    Console.print(
      countKeyVaule !== "불일치5"
        ? `${countKeyVaule}개 일치 (${moneyTable}) - ${el[countKeyVaule]}개`
        : `5개 일치, 보너스 불 일치 (${moneyTable}) - ${el[countKeyVaule]}개`
    );
    
  });

  const statisticalValue = calculateStatistical(count, lottoAmount);

  Console.print(`총 수익률은 ${statisticalValue}%입니다.`);
};
