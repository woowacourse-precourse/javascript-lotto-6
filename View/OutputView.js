import { Console } from "@woowacourse/mission-utils";

const MESSAGE = {
  OUTPUT_LOTTO_MATCH_RESULT_STATISTIC: "\n당첨 통계\n---\n",
};

const OutputView = {
  outputRandomLottoNumbersList(RandomLottoNumbersList) {
    RandomLottoNumbersList.forEach(lottoList => {
      Console.print(`[${lottoList.join(', ')}]`);
    });
  },
};

export default OutputView;