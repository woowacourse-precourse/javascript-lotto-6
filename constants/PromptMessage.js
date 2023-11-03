class PromptMessage {
  static ENTER_PRICE = '구입금액을 입력해 주세요.\n';

  static PRINT_PURCHASED_NUM(num) {
    return `${num}개를 구매했습니다.`;
  }

  static ENTER_WIN_NUM = '당첨 번호를 입력해 주세요.\n';

  static ENTER_BONUS_NUM = '보너스 번호를 입력해 주세요.\n';

  static PRINT_STATISTICS = '당첨 통계\n---';

  static PRINT_RETURN_RATE = '총 수익률은 62.5%입니다.';

  //   static a = '구입금액을 입력해 주세요.';

  //   static a = '구입금액을 입력해 주세요.';

  //   static a = '구입금액을 입력해 주세요.';
}

export default PromptMessage;
