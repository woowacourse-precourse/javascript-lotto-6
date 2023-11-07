export const INPUT = {
  purchase_amount: "구입금액을 입력해 주세요.\n",
  win_numbers: "\n당첨 번호를 입력해 주세요.\n",
  bonus_numbers: "\n보너스 번호를 입력해 주세요.\n",
};
export const OPTION = {
  max_name_length: 5,
  min_random_num: 1,
  max_random_num: 45,
  lotto_num_count: 6,
  bonus_num_count: 1,
};
export const OUTPUT = {
  linebreak: "\n",
  how_many_purchased: "개를 구매했습니다.",
  correct_3: "3개 일치 (5,000원) - ",
  correct_4: "4개 일치 (50,000원) - ",
  correct_5: "5개 일치 (1,500,000원) - ",
  correct_5_bouns: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  correct_6: "6개 일치 (2,000,000,000원) - ",
  count: "개",
  statics: "\n당첨 통계\n---",
  rate_of_return: "총 수익률은 ",
  percent_is: "%입니다.",
};
export const ERROR = {
  lotto_num_error:
    "[ERROR] 로또 번호는 중복되지 않은 1-45 사이의 정수 6개여야 합니다.",
  bonus_num_error:
    "[ERROR] 보너스 번호는 로또 번호와 중복되지 않은 1-45 사이의 정수여야 합니다.",
  purchase_amount_error:
    "[ERROR] 로또 구입 금액은 1000원 단위의 양수여야 합니다.",
};
export const MATCH = {
  match_3: 3,
  match_4: 4,
  match_5: 5,
  match_6: 6,
  match_5_bonus: 7,
};
