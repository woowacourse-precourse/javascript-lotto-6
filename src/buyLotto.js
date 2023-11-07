import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import makeRandomNumbers from "./makeRandomNumbers";

const buyLotto = (lottoList, lottoNumber) => {
  for (let i = 0; i < lottoNumber; i++) {
    const sortedRandomNumbers = makeRandomNumbers().sort((a, b) => a - b);
    Console.print(`[${sortedRandomNumbers.join(", ")}]`);
    lottoList.push(new Lotto(sortedRandomNumbers));
  }
};
export default buyLotto;
