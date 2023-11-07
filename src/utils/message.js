import { LOTTO, REWARD } from "../constants/lotto.js";

const arrToString = (arr) => `[${arr.join(", ")}]`;
const twoDimensionalArrToString = (tArr) => tArr.map((arr) => arrToString(arr)).join("\n");

const ErrorMessage = Object.freeze({
  basic: (msg) => `[ERROR] ${msg}`,
  incorrectFormat: () => `숫자가 잘못된 형식입니다.`,
  incorrectLottoCount: () => `로또 번호는 ${LOTTO.NUMBER_COUNT}개여야 합니다.`,
  incorrectLottoNumber: () =>
    `로또 번호는 ${LOTTO.MIN_NUMBER}이상 ${LOTTO.MAX_NUMBER}이하의 숫자여야 합니다.`,
  duplicateNumbers: () => `중복된 숫자가 포함되어 있습니다.`,
});

const ReadMessage = Object.freeze({
  purchaseAmount: () => `구입금액을 입력해 주세요.\n`,
  answerNumbers: () => `\n당첨 번호를 입력해 주세요.\n`,
  bonusNumber: () => `\n보너스 번호를 입력해 주세요.\n`,
});

const ResultMessage = Object.freeze({
  purchaseLottos: (lottos) =>
    `\n${lottos.length}개를 구매했습니다.\n${twoDimensionalArrToString(lottos)}`,

  lottoResult: (arr) => {
    const results = arr.map((count, index) => {
      const match = REWARD[index].match;
      const bonusMessage = REWARD[index].bonus !== 0 ? `, 보너스 볼 일치` : "";
      const reward = REWARD[index].reward.toLocaleString();

      return `${match}개 일치${bonusMessage} (${reward}원) - ${count}개`;
    });

    return `\n당첨 통계\n---\n${results.reverse().join("\n")}`;
  },

  lottoProfit: (ratio) => `총 수익률은 ${ratio}%입니다.`,
});

export { ErrorMessage, ReadMessage, ResultMessage };
