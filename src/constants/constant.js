export const GameSetting = Object.freeze({
  error: "[ERROR]",
  currency: "원",
  countOfMatches: "개",
  lotto_Length: 6,
  lotto_Price: 1000,
  lotto_Min_Number: 1,
  lotto_Max_Number: 45,
  prize_5st: 5000,
  prize_4nd: 50000,
  prize_3rd: 1500000,
  prize_2th: 30000000,
  prize_1th: 2000000000,
});

export const Print = Object.freeze({
  start: "구입금액을 입력해 주세요.\n",
  buy_Tiket: "개를 구매했습니다.",
  select_Number: "당첨 번호를 입력해 주세요.\n",
  select_Bonus: "보너스 번호를 입력해 주세요.\n",
  end_Game: "당첨 통계\n---",
  prize_1th: `6개 일치 (${formatPrize(GameSetting.prize_1th) + GameSetting.currency}) - `,
  prize_2th: `5개 일치, 보너스 볼 일치 (${formatPrize(GameSetting.prize_2th) + GameSetting.currency}) - `,
  prize_3rd: `5개 일치 (${formatPrize(GameSetting.prize_3rd) + GameSetting.currency}) - `,
  prize_4nd: `4개 일치 (${formatPrize(GameSetting.prize_4nd) + GameSetting.currency}) - `,
  prize_5st: `3개 일치 (${formatPrize(GameSetting.prize_5st) + GameSetting.currency}) - `,
  totalPrizeFirst: "총 수익률은 ",
  totalPrizeEnd: "%입니다.",
});

export const Errors = Object.freeze({
  is_Price: `${GameSetting.error} ${GameSetting.lotto_Price} 단위의 숫자만 입력해주세요`,
  is_Number: `${GameSetting.error} 숫자만 입력해주세요`,
  is_Length: `${GameSetting.error}${GameSetting.lotto_Length} 개의 숫자를 입력해 주세요`,
  duplication_Number: `${GameSetting.error} 중복된 숫자는 입력 할 수 없습니다`,
  min_Number: `${GameSetting.error}${GameSetting.lotto_Min_Number} 이상의 숫자를 입력해주세요`,
  max_Number: `${GameSetting.error}${GameSetting.lotto_Max_Number} 이하의 숫자를 입력해주세요`,
});

function formatPrize(amount) {
  return amount.toLocaleString("en-US");
}
