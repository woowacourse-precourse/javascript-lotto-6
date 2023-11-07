import { Console } from '@woowacourse/mission-utils';
import LOTTO_CONSTANT from '../constants/lotto.js';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import PRIZE from '../constants/prize.js';

const RATE = Object.freeze({
  percent: 100,
  float: 1,
});

const printLottoResult = (lottoTicketNumber, ranks) => {
  const income = Array.from(ranks).reduce((acc, [_, value], idx) => acc + value * PRIZE[idx], 0);
  const input = lottoTicketNumber * LOTTO_CONSTANT.price;
  const rateOfReturn = +((income / input) * RATE.percent).toFixed(RATE.float);

  OUTPUT_MESSAGES.result(ranks).forEach((result) => Console.print(result));
  Console.print(OUTPUT_MESSAGES.rate(rateOfReturn));
};

export default printLottoResult;
