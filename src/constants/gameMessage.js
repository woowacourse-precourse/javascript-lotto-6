const GAME_MESSAGE = Object.freeze({
  buy_money: "구입금액을 입력해주세요.\n",
  bought: "개를 구매했습니다.",
  winning_number: "\n당첨 번호를 입력해 주세요.\n",
  bonus_number: "\n보너스 번호를 입력해 주세요.\n",
});

const GAME_RESULT = Object.freeze({
  result: "\n당첨 통계",
  hyphon: "---",
  three_matching: "3개 일치 (5,000원) - ",
  four_matching: "4개 일치 (50,000원) - ",
  five_matching: "5개 일치 (1,500,000원) - ",
  bonus_five_matching: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  six_matching: "6개 일치 (2,000,000,000원) - ",
  piece: "개",
  money_return: "총 수익률은 ",
  text_end: "%입니다.",
});

export { GAME_MESSAGE, GAME_RESULT };
