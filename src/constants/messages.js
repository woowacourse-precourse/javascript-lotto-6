import { PRIZE, PRIZE_CONDITION, PROFIT_FOR_PRIZE } from "./lotto.js";

const INPUT_QUERY = Object.freeze({
  money: "구입금액을 입력해 주세요." + "\n",
  lottoAnswer: "당첨 번호를 입력해 주세요." + "\n",
  bonusNumber: "보너스 번호를 입력해 주세요." + "\n",
});

const PRIZE_RESULT = (prize, prizeCount) =>
  `${PRIZE_CONDITION[prize]} (${PROFIT_FOR_PRIZE[prize].toLocaleString()}원) - ${
    prizeCount[prize]
  }개`;

const PRIZES = Object.values(PRIZE).reverse();

const OUTPUT_MESSAGE = Object.freeze({
  buyLottos: (lottos) => `${lottos.length}개를 구매했습니다.`,
  lottoArray: (lotto) => `[${lotto.getNumbers().join(", ")}]`,
  profitRate: (profitRate) => `총 수익률은 ${parseFloat(profitRate).toLocaleString()}%입니다.`,

  lottoResult: (prizeCount) =>
    ["당첨 통계", "---", PRIZES.map((prize) => PRIZE_RESULT(prize, prizeCount)).join("\n")].join(
      "\n"
    ),
});

const errorString = (string) => `[ERROR] ${string}`;

const ERROR_MESSAGE = Object.freeze({
  notPostiveInt: errorString("값이 양의 정수 외의 값이 포함될 수 없습니다."),
  hasNotOnlyPostiveInt: errorString("값이 양의 정수가 아닌 값이 포함될 수 없습니다."),
  notValidNumber: errorString("값이 유효한 숫자 형태가 아닙니다"),
  notInNumberRange: (minInclusive, maxInclusive) =>
    errorString(`입력한 값이 ${minInclusive}부터 ${maxInclusive} 사이의 숫자가 아닙니다.`),
  notArray: errorString("배열 타입의 값이 아닙니다."),
  hasNoElement: errorString("배열에 요소가 1개 이상 존재하지 않습니다."),
  undividableByThousand: errorString("값이 1000으로 나누어 떨어지는 값이 아닙니다."),
  overLottoStock: errorString("남아있는 로또의 재고 수를 초과하여 구매할 수 없습니다."),
  hasNonLotto: errorString("로또 객체가 아닌 값이 포함될 수 없습니다."),
  duplicateBonusNumber: errorString("보너스 번호는 당첨 번호와 겹칠 수 없습니다."),
  includeComma: errorString("여러 개의 값을 받을 수 없습니다."),
});

export { INPUT_QUERY, OUTPUT_MESSAGE, ERROR_MESSAGE };
