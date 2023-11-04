class PromptMessage {
  static ENTER_PRICE = '구입금액을 입력해 주세요.\n';

  static PRINT_PURCHASED_NUM(num) {
    return `\n${num}개를 구매했습니다.`;
  }

  static ENTER_WIN_NUM = '\n당첨 번호를 입력해 주세요.\n';

  static ENTER_BONUS_NUM = '\n보너스 번호를 입력해 주세요.\n';

  static PRINT_STATISTICS = '\n당첨 통계\n---';

  static PRINT_RETURN_RATE(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  }
}

export default PromptMessage;
