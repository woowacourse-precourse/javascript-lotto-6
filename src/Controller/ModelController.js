import LottoStore from "../model/LottoStore.js";
import WinningNumbersChecker from "../model/WinningNumbersChecker.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";
import Formattor from "../View/Formattor.js";
import MatchedNumber from "../model/MatchedNumber.js";
import NUMBER_CONSTANT from "../Constant/NumberConstant.js";

const openLottoStore = () => {
  const lottoStore = new LottoStore(
    RULE_CONSTANT.LOTTO_MIN_NUMBER,
    RULE_CONSTANT.LOTTO_MAX_NUMBER,
    RULE_CONSTANT.LOTTO_SELLECT_NUMBER_COUNT
  )

  return (lottoStore);
}

const lottoCardsController = (purchaseCount) => {
  const lottoStore = openLottoStore();
  const LottoSellectNumberCards = lottoStore.takeLottoSellectNumberCards(purchaseCount);
  LottoSellectNumberCards.forEach((card) => card.autoSelect());
  const lottoCards = lottoStore.sellLottos(LottoSellectNumberCards);
  const getLottoCard = () => lottoCards;
  return {
    getLottoCard,
  };
}

const WinningNumbersCheckerController = (commonWinningNumbers, bonusWinningNumber) => {
  const winningNumbersChecker = new WinningNumbersChecker(
    commonWinningNumbers,
    bonusWinningNumber,
    RULE_CONSTANT.WINNUNG_CONDITIONS
  );
  const getWinningNumbersChecker = () => winningNumbersChecker;
  return {
    getWinningNumbersChecker,
  }
}



const winningStatistics = () => {
  const winningStatistics = winningStatisticsSettings(new Object());;

  winningStatistics.getTotalStatistics = (...strings) => Formattor.joinStrings(...strings);
  winningStatistics.getName = () => winningStatistics.name;
  const getWinningStatistics = () => winningStatistics;
  return {
    getWinningStatistics
  };
}

const winningStatisticsSettings = (winningStatistics) => {
  winningStatistics.name = RULE_CONSTANT.WINNING_STATISTICS;
  winningStatistics.totalAmount = 0;
  winningStatistics.totalCount = 0;
  winningStatistics[(RULE_CONSTANT.THREE_MATCH)] = new MatchedNumber(RULE_CONSTANT.THREE_MATCHS);
  winningStatistics[(RULE_CONSTANT.FOUR_MATCH)] = new MatchedNumber(RULE_CONSTANT.FOUR_MATCHS);
  winningStatistics[(RULE_CONSTANT.FIVE_MATCH)] = new MatchedNumber(RULE_CONSTANT.FIVE_MATCHS);
  winningStatistics[(RULE_CONSTANT.FIVE_AND_BONUS_MATCH)] = (
    new MatchedNumber(RULE_CONSTANT.FIVE_AND_BONUS_MATCHS)
  )
  winningStatistics[(RULE_CONSTANT.SIX_MATCH)] = new MatchedNumber(RULE_CONSTANT.SIX_MATCHS);
  winningStatistics[RULE_CONSTANT.OPTION_NONE] = NUMBER_CONSTANT.ZERO;
  return (winningStatistics);
}

export default {
  lottoCardsController,
  WinningNumbersCheckerController,
  winningStatistics,
}
