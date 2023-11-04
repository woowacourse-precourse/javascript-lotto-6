import { Console } from "@woowacourse/mission-utils";
import { createNumber } from "./createNumber.js";
import Lotto from "../Lotto.js";

export const createLotto = (lottoCount) => {
  Console.print(`\n${lottoCount}개를 구매했습니다.`);

  for (let i = 0; i < lottoCount; i++) {
    const numberArray = createNumber();

    const lotto = new Lotto(numberArray);
    lotto.printLottoNumbers();
  }
};
