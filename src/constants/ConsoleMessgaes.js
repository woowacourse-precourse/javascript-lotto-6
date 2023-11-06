export const CONSOLE_MESSAGE = Object.freeze({
  inputPrice: "구입금액을 입력해 주세요.\n",
  inputLottoNumbers: "\n당첨번호를 입력해 주세요.\n",
  inputBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  outputLottoNumber: "개를 구매했습니다.",
  outputFirst: "6개 일치 (2,000,000,000원) - {0}개",
  outputSecond: "5개 일치, 보너스 볼 일치 (30,000,000원) - {0}개",
  outputThird: "5개 일치 (1,500,000원) - {0}개",
  outputFourth: "4개 일치 (50,000원) - {0}개",
  outputFifth: "3개 일치 (5,000원) - {0}개",
  outputRate: "총 수익률은 {0}%입니다.",
});

export function format(templateMessage, ...args) {
  return args.reduce(
    (message, arg, index) => message.replaceAll(`{${index}}`, arg),
    templateMessage
  );
}
