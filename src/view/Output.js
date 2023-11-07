import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_LOTTO_COUNT } from '../constant/OutputMessage.js';

const Output = {
  async printLottoCount(lottoCount) {
    await Console.print(`\n${lottoCount}${OUTPUT_LOTTO_COUNT}`);
  },
  printLottoList(lottoList) {
    lottoList.forEach((lotto) => {
      Console.print(`[${lotto}]`);
    });
  },
};

export default Output;
