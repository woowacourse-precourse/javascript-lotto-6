const BUY_LOTTO = "구맥 금액을 입력해주세요.";

const LOTTO_COUNT = (count) => `${count}개를 구매했습니다.`;

const PRINT_PURCHASE_LOTTO = (lotto) => `[${lotto.join(", ")}]\n`;

const INPUT_WINNING_NUMBER = "당첨 번호를 입력해주세요";

const WINNING_OUTCOME = (arr) => {
  return `3개 일치 (5,000원) - ${arr[0]}개\n
4개 일치 (50,000원) - ${arr[1]}개\n
5개 일치 (1,500,000원) - ${arr[2]}개\n
5개 일치, 보너스 볼 일치 (30,000,000원) - ${arr[3]}개\n
6개 일치 (2,000,000,000원) - ${arr[4]}개\n`
}

const GENERATE_BONUS_NUM = "보너스 번호를 입력해 주세요.";

const RATIO_OF_RETURN = (ratio) => `총 수익률은 ${ratio}%입니다.`

export {
  BUY_LOTTO, 
  LOTTO_COUNT,
  PRINT_PURCHASE_LOTTO,
  INPUT_WINNING_NUMBER,
  WINNING_OUTCOME,
  GENERATE_BONUS_NUM,
  RATIO_OF_RETURN
}