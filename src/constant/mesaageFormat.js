import Util from '../utils/Util.js';
import { LOTTO } from './constant.js';

export const messageFormat = {
  purchase: (count) => `\n${count}개를 구매했습니다.`,
  rateOfReturn: (number) => `총 수익률은 ${number}%입니다.`,
};

// eslint: Dependency cycle detected. 에러 해결을 위해 constant.js 가 아닌 messageFormat.js에 위치
export const PRIZE_MESSAGE = Object.freeze({
  first: `6개 일치 (${Util.numberToKoreanWon(LOTTO.firstPrize)})`,
  second: `5개 일치, 보너스 볼 일치 (${Util.numberToKoreanWon(LOTTO.secondPrize)})`,
  third: `5개 일치 (${Util.numberToKoreanWon(LOTTO.thirdPrize)})`,
  fourth: `4개 일치 (${Util.numberToKoreanWon(LOTTO.fourthPrize)})`,
  fifth: `3개 일치 (${Util.numberToKoreanWon(LOTTO.fifthPrize)})`,
});
