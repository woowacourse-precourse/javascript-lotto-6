import winningStatisticsUI from '../../util/UI/gameResult/winningStatisticsUI.js';
import lottoMatcher from '../../util/matcher/lottoMatcher.js';
import lottoCompareService from '../lottoCompareService.js';

export default function resultService(purchaseList, lotto, bonusNumber, purchaseAmount) {
  const matchResult = lottoMatcher(purchaseList, lotto, bonusNumber);
  const lottoResult = lottoCompareService(matchResult, purchaseAmount);
  winningStatisticsUI(lottoResult);
}
