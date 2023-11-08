import { deepFreeze } from '../utils/deepFreeze.js';

export const REWARD_MESSAGES = deepFreeze({
  winning_statistics_start: '당첨 통계\n---',
  /**
   *
   * @param { number } num
   * @returns { string }
   */
  match_result: (num) => `${num}개 일치`,
  match_five_not_bonus: '5개 일치, 보너스 볼 일치',

  /**
   *
   * @param { number } rate
   * @returns { string }
   */

  rate_result: (rate) => `총 수익률은 ${rate}%입니다.`,

  /**
   *
   * @param { string } displayKey
   * @param { number } formattedPrize
   * @param { number } count
   * @returns { string }
   */

  statistics_message_format: (displayKey, formattedPrize, count) =>
    `${displayKey} (${formattedPrize}) - ${count}개`,
});
