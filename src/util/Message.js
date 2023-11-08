import { LOTTO } from "./constant";

export const MESSAGE = Object.freeze({
  inputAmount: "구입금액을 입력해 주세요.\n",
  inputWinningNumber: "\n당첨 번호를 입력해 주세요.\n",
  inputBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const ERROR = Object.freeze({
  inputAmount: `[ERROR] 구입금액은 ${LOTTO.price}원 단위만 가능합니다.`,
  lottoNumRange: `[ERROR] 로또 번호는 ${LOTTO.minimum}~${LOTTO.maximum}까지만 가능합니다.`,
  lottoWinningNumDuplicate: `[ERROR] 로또 번호는 중복 되지않는 수가 ${LOTTO.numLength}개여야 합니다.`,
  lottoBonusDuplicate: `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`,
});
