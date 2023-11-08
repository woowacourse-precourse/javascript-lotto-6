import Output from '../View/Output';
import OUTPUT_CONSTANT from '../Constant/OutputConstant';
import RULE_CONSTANT from '../Constant/RuleConstant';
import Formattor from '../View/Formattor';
import NUMBER_CONSTANT from '../Constant/NumberConstant';

const outputPurchaseCount = (count) => {
  Output.outputString(`${count}${OUTPUT_CONSTANT.PURCHASE_COUNT}`);
}

const outputLottoNumbers = (lottos) => {
  lottos.forEach((lotto) => Output.outputArray(lotto.getLottoNumbers()));
}

const outputTotalStatistics = (winningStatistics) => {
  const keys = Object.keys(RULE_CONSTANT.WINNUNG_CONDITIONS).reverse();
  
  Output.outputString('');
  Output.outputString(winningStatistics.getName());
  Output.outputString(RULE_CONSTANT.HYPON.repeat(3));
  keys.forEach((item) => {
    Output.outputString((winningStatistics[item]).getTotalStatement());
    winningStatistics.totalAmount += winningStatistics[item].getTotalPurchase();
    winningStatistics.totalCount += winningStatistics[item].getCount();
  });
  winningStatistics.totalCount += + winningStatistics[RULE_CONSTANT.OPTION_NONE];
  const message = (outputWinningStatistics(winningStatistics)).getMessage();
  Output.outputString(message);
}

const outputWinningStatistics = (winningStatistics) => {
  const purchaseCount = winningStatistics.totalCount * RULE_CONSTANT.LOTTO_TICKET_PRICE;
  const message = winningStatistics.getTotalStatistics(
    RULE_CONSTANT.STATISTICS_PREFIX,
    Formattor.divideValue(winningStatistics.totalAmount ,purchaseCount) * NUMBER_CONSTANT.HUNDRED,
    RULE_CONSTANT.STATISTICS_SUFFIX
  )
  const getMessage = () => message;
  return {
    getMessage,
  };
}

export default {
  outputPurchaseCount,
  outputLottoNumbers,
  outputTotalStatistics,
}