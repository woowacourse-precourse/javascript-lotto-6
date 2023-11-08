import { PRINT_MESSAGE } from "./constant/Log.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import CalcReturnRate from "./CalcReturnRate.js";
const PRINT_DECIMAL_POINT = 1;

export function printCount(count) {
  MissionUtils.Console.print("\n" + count + PRINT_MESSAGE.count);
}

export function printLottoNumbers(lottoNumbers) {
  lottoNumbers.forEach((lottoNumber) => {
    MissionUtils.Console.print(printArray(lottoNumber.getNumbers()));
  });
}

export function printArray(lotto) {
  const lottoNumberStr = lotto.join(", ");
  return "[" + lottoNumberStr + "]";
}

export function printWinning(rankObj) {
  printWinningTitle();
  Object.keys(rankObj).forEach((rank) => {
    MissionUtils.Console.print(
      PRINT_MESSAGE.winningResult[rank] +
        rankObj[rank] +
        PRINT_MESSAGE.winningAfter
    );
  });
}

function printWinningTitle() {
  MissionUtils.Console.print("\n" + PRINT_MESSAGE.winningTitle);
  MissionUtils.Console.print(PRINT_MESSAGE.winningLine);
}

export function printReturnRate(rankObj, amount) {
  const returnRate = CalcReturnRate(rankObj, amount);
  MissionUtils.Console.print(
    PRINT_MESSAGE.returnBefore +
      returnRate.toFixed(PRINT_DECIMAL_POINT) +
      PRINT_MESSAGE.returnAfter
  );
}
