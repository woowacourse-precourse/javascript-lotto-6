import { PRINT_MESSAGE } from "./constant/Log.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export function printCount(count) {
  MissionUtils.Console.print("\n" + count + PRINT_MESSAGE.count);
}

export function printLottoNumbers(lottoNumbers) {
  lottoNumbers.forEach((lottoNumber) => {
    MissionUtils.Console.print(lottoNumber.getNumbers());
  });
}
