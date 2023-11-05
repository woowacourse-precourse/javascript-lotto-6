import parseToMap from '../util/parse/parseToMap.js';
import getRateOfReturn from '../util/yield/getRateOfReturn.js';

export default function lottoCompareService(matchResult, purchaseAmount) {
  const resultCount = parseToMap(matchResult);
  const rateOfReturn = getRateOfReturn(resultCount, purchaseAmount);
  return { resultCount, rateOfReturn };
}
