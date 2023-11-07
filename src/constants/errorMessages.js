import { deepFreeze } from '../utils/deepFreeze.js';

export const ERROR_MESSAGES = deepFreeze({
  money_not_a_number: '로또 구입 금액은 숫자여야해요!',
  lack_money: '로또 구입 금액은 최소 1000원 이상이어야해요!',
  not_divded: '로또 구입 금액은 1000원 단위로 나누어 떨어져야해요!',
  lotto_not_match_length: '로또는 총 6개의 숫자로 이루어져야해요!',
  lotto_have_duplication_number: '로또에 중복된 번호가 존재해요!',
  lotto_not_a_number: '로또 번호는 숫자로 이루어져야해요!',
  lotto_out_of_range: '로또 번호는 1이상 45이하의 숫자여야해요!',
  winning_lotto_have_duplication_number: '당첨 번호에 중복된 번호가 존재해요!',
});
