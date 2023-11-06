export const LOTTO_MESSAGE = Object.freeze({
  get_purchase_amount: '구입금액을 입력해 주세요.\n',
  print_purchase_count: (count) => `${count}개를 구매했습니다.`,
  get_winning_numbers: '당첨 번호를 입력해 주세요.\n',
  get_bonus_number: '보너스 번호를 입력해 주세요.\n',
  print_start_result: '당첨 통계\n---',
  print_winnings: (count, amount, winningCnt) => `${count} (${amount}원) - ${winningCnt}개`,
  print_return_rate: (percentage) => `총 수익률은 ${percentage.toFixed(1)}%입니다.`
});