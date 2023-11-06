import { SETTING } from "./Settings.js";

export const CONSOLE_MESSAGE = Object.freeze({
  inputPrice: "구입금액을 입력해 주세요.\n",
  inputLottoNumbers: "\n당첨번호를 입력해 주세요.\n",
  inputBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  outputLottoCount: "\n{0}개를 구매했습니다.",
  outputLottoNumber: `{0}`,
  outputFirst: `6개 일치 (${SETTING.first_prize.toLocaleString(
    "ko-KR"
  )}원) - {0}개`,
  outputSecond: `5개 일치, 보너스 볼 일치 (${SETTING.second_prize.toLocaleString(
    "ko-KR"
  )}원) - {0}개`,
  outputThird: `5개 일치 (${SETTING.third_prize.toLocaleString(
    "ko-KR"
  )}원) - {0}개`,
  outputFourth: `4개 일치 (${SETTING.fourth_prize.toLocaleString(
    "ko-KR"
  )}원) - {0}개`,
  outputFifth: `3개 일치 (${SETTING.fifth_prize.toLocaleString(
    "ko-KR"
  )}원) - {0}개`,
  outputRate: "총 수익률은 {0}%입니다.",
});

export function format(templateMessage, ...args) {
  return args.reduce(
    (message, arg, index) => message.replaceAll(`{${index}}`, arg),
    templateMessage
  );
}
