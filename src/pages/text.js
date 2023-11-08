export const ERROR = {
  input_1000: "[ERROR] 1,000 단위로 입력해야 합니다.",
  input_lotto_num: "[ERROR] 로또 번호는 6개여야 합니다.",
  input_lotto_bonus: "[ERROR] 보너스 번호는 1개여야 합니다.",
  input_lotto_bonus_in_numbers:
    "[ERROR] 보너스 번호는 당첨 번호와 다른 숫자를 입력해주세요.",
  input_1_45: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  input_double_num: "[ERROR] 서로 다른 숫자를 입력해주세요.",
  input_minimum: "[ERROR] 1개 이상 구매하여야 합니다",
};

export const GAME = {
  input_cost: "구입금액을 입력해 주세요.\n",
  input_number: "\n당첨 번호를 입력해 주세요.\n",
  input_bonus: "\n보너스 번호를 입력해 주세요.\n",
  buy: (count) => `${count}개를 구매했습니다.`,
  statistic: "당첨통계\n-----\n",

  game_result: (win_3, win_4, win_5, win_6, win_50) =>
    `3개 일치 (5,000원) - ${win_3}개\n4개 일치 (50,000원) - ${win_4}개\n5개 일치 (1,500,000원) - ${win_5}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${win_6}개\n6개 일치 (2,000,000,000원) - ${win_50}개`,

  game_money: (money) => `총 수익률은 ${money}%입니다.`,
};
