import { Console } from '@woowacourse/mission-utils'
import INPUT_CONSTANT from '../Constant/inputConstant';

const getLottoPurchaseAmount = (async () => {
  const lottoPurchaseAmount = await Console.readLineAsync(
    INPUT_CONSTANT.GET_LOTTO_PURCHASE_AMOUNT_MESSAGE
  );
  return (lottoPurchaseAmount);
})

const getLottoCommonWinningNumbers = (async () => {
  const lottoCommonWinningNumbers = await Console.readLineAsync(
    INPUT_CONSTANT.GET_LOTTO_COMMON_WINNING_NUMBERS_MESSAGE
  );

  return (lottoCommonWinningNumbers);
})

export default {
  getLottoPurchaseAmount,
  getLottoCommonWinningNumbers,
};
