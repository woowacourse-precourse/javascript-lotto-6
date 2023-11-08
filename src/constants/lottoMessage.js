import { deepFreeze } from '../utils/deepFreeze.js';

export const LOTTO_MESSAGES = deepFreeze({
  input_money: '구입금액을 입력해 주세요.\n',
  buy_lottos: (amount) => `${amount}개를 구매했습니다.`,
  input_winning_numbers: '당첨 번호를 입력해 주세요.\n',
  input_bonus_number: '보너스 번호를 입력해 주세요.\n',
});
