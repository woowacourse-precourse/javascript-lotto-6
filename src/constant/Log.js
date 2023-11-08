import { LOTTO_MATCH } from "./LottoInfo.js";
const LINE_BREAK = "\n";
export const INPUT_MESSAGE = {
  amount: "구입금액을 입력해주세요." + LINE_BREAK,
  winningLotto: LINE_BREAK + "당첨 번호를 입력해 주세요." + LINE_BREAK,
  bonusLotto: LINE_BREAK + "보너스 번호를 입력해 주세요." + LINE_BREAK,
};
export const PRINT_MESSAGE = {
  count: "개를 구매했습니다.",
  winningTitle: "당첨 통계",
  winningLine: "---",
  winningResult: {
    first:
      "6개 일치 (" +
      LOTTO_MATCH.first.reward.toLocaleString("ko-KR") +
      "원) - ",
    second:
      "5개 일치, 보너스 볼 일치 (" +
      LOTTO_MATCH.second.reward.toLocaleString("ko-KR") +
      "원) - ",
    third:
      "5개 일치 (" +
      LOTTO_MATCH.third.reward.toLocaleString("ko-KR") +
      "원) - ",
    fourth:
      "4개 일치 (" +
      LOTTO_MATCH.fourth.reward.toLocaleString("ko-KR") +
      "원) - ",
    fifth:
      "3개 일치 (" +
      LOTTO_MATCH.fifth.reward.toLocaleString("ko-KR") +
      "원) - ",
  },
  winningAfter: "개",
  returnBefore: "총 수익률은 ",
  returnAfter: "%입니다.",
};
